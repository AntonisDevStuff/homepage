(() => {
  const year = new Date().getFullYear();
  const username = "AntonisDevStuff";
  const copyrightEl = document.getElementById("copyright");
  if (copyrightEl) copyrightEl.textContent = `© ${year} ${username}`;
  const card = document.querySelector(".card");
  if (!card) return;
  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reduced) return;
  document.addEventListener("mousemove", (e) => {
    const x = e.clientX / window.innerWidth - 0.5;
    const y = e.clientY / window.innerHeight - 0.5;
    card.style.transform = `rotateX(${(-y * 5).toFixed(2)}deg) rotateY(${(x * 7).toFixed(2)}deg)`;
  });
  document.addEventListener("mouseleave", () => {
    card.style.transform = "rotateX(0deg) rotateY(0deg)";
  });
})();
