export function initializeProspectus() {
  const dialog = document.querySelector('#prospectus-dialog');
  const form = dialog.querySelector('form');
  const trigger = document.querySelector('[data-prospectus]');
  const submit = form.querySelector('[type=submit]');
  const status = form.querySelector('[role=status]');
  const dismiss = dialog.querySelector('[data-dismiss]');
  const controller = new AbortController();
  let id = crypto.randomUUID();
  let previousDetails;
  let href;

  function open() {
    if (!dialog.open) dialog.showModal();
  }
  function close() {
    dialog.close();
    trigger.focus({ preventScroll: true });
  }

  async function download(event) {
    event.preventDefault();
    if (submit.disabled) return;
    const details = Object.fromEntries(new FormData(form));
    const signature = JSON.stringify(details);
    if (previousDetails !== signature) {
      id = crypto.randomUUID();
      if (href) URL.revokeObjectURL(href);
      href = undefined;
      previousDetails = signature;
    }
    submit.disabled = true;
    status.textContent = 'Preparing your PDF…';
    try {
      if (!href) {
        const response = await fetch('/api/academy/prospectus', {
          method: 'POST', headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ ...details, id }), signal: controller.signal,
        });
        if (response.status === 400) {
          status.textContent = 'Please check your name, email and phone number, then try again.';
          return;
        }
        if (!response.ok || !response.headers.get('content-type')?.includes('application/pdf')) throw Error();
        href = URL.createObjectURL(await response.blob());
      }
      const link = document.createElement('a');
      link.href = href;
      link.download = 'JRs-Academy-Prospectus.pdf';
      link.textContent = 'Download your prospectus again';
      status.replaceChildren(link);
      link.click();
    } catch {
      if (!controller.signal.aborted) status.textContent = 'Download unavailable. Please retry or WhatsApp 071 686 5256.';
    } finally {
      submit.disabled = false;
    }
  }

  trigger.addEventListener('click', open);
  dismiss.addEventListener('click', close);
  form.addEventListener('submit', download);
  open();
  return () => {
    controller.abort();
    if (href) URL.revokeObjectURL(href);
    dialog.close();
    trigger.removeEventListener('click', open);
    dismiss.removeEventListener('click', close);
    form.removeEventListener('submit', download);
  };
}
