export function initializeProspectus() {
  const dialog = document.querySelector('#prospectus-dialog');
  const form = dialog.querySelector('form');
  const button = form.querySelector('button[type=submit]');
  const status = form.querySelector('[role=status]');
  const open = () => dialog.showModal();
  const trigger = document.querySelector('[data-prospectus]');
  trigger.onclick = open;
  dialog.querySelector('[data-dismiss]').onclick = () => dialog.close();
  let id = crypto.randomUUID();
  form.onsubmit = async event => {
    event.preventDefault();
    if (button.disabled) return;
    button.disabled = true;
    status.textContent = 'Preparing your PDF…';
    try {
      const response = await fetch('/api/academy/prospectus', {method:'POST',headers:{'Content-Type':'application/json'},
        body:JSON.stringify({...Object.fromEntries(new FormData(form)),id})});
      if (!response.ok || !response.headers.get('content-type')?.includes('application/pdf')) throw Error();
      const href = URL.createObjectURL(await response.blob());
      const link = document.createElement('a');
      link.href = href; link.download = 'JRs-Academy-Prospectus.pdf'; link.textContent = 'Open your prospectus';
      status.replaceChildren(link); link.click(); setTimeout(() => URL.revokeObjectURL(href), 300000);
      id = crypto.randomUUID();
    } catch {
      status.textContent = 'Download unavailable. Check your details and retry, or WhatsApp 071 686 5256.';
    } finally { button.disabled = false; }
  };
  open();
  return () => {dialog.close();trigger.onclick=null;form.onsubmit=null;};
}
