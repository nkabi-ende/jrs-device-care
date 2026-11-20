export function initializeIndustrySlideshow(root) {
  const slideshow = root?.querySelector(".business-industries");
  if (!slideshow) return;

  const track = slideshow.querySelector(".business-industries__track");
  const controls = slideshow.querySelector(".business-industries__controls");
  const cards = Array.from(track.children);
  const choices = Array.from(controls.querySelectorAll(".business-industries__choices button"));
  const previous = controls.querySelector('[data-step="-1"]');
  const next = controls.querySelector('[data-step="1"]');
  let active = -1;

  function sync() {
    const current = cards.reduce((nearest, card, index) => {
      const distance = Math.abs(card.offsetLeft - track.scrollLeft);
      const bestDistance = Math.abs(cards[nearest].offsetLeft - track.scrollLeft);
      return distance < bestDistance ? index : nearest;
    }, 0);
    if (current === active) return;
    active = current;
    choices.forEach((choice, index) => choice.setAttribute("aria-pressed", String(index === active)));
    previous.setAttribute("aria-disabled", String(active === 0));
    next.setAttribute("aria-disabled", String(active === cards.length - 1));
  }

  function goTo(index) {
    if (cards[index]) track.scrollTo({ left: cards[index].offsetLeft });
  }

  function onClick(event) {
    const button = event.target.closest("button");
    if (!button || button.getAttribute("aria-disabled") === "true") return;
    goTo(button.dataset.step ? active + Number(button.dataset.step) : choices.indexOf(button));
  }

  function onKeyDown(event) {
    const targets = { ArrowLeft: active - 1, ArrowRight: active + 1, Home: 0, End: cards.length - 1 };
    if (!Object.hasOwn(targets, event.key) || event.altKey || event.ctrlKey || event.metaKey || event.shiftKey) return;
    event.preventDefault();
    goTo(targets[event.key]);
  }

  controls.hidden = false;
  sync();
  controls.addEventListener("click", onClick);
  track.addEventListener("scroll", sync, { passive: true });
  track.addEventListener("keydown", onKeyDown);
  return () => {
    controls.removeEventListener("click", onClick);
    track.removeEventListener("scroll", sync);
    track.removeEventListener("keydown", onKeyDown);
  };
}
