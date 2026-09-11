const modal = document.querySelector('#evidence-modal');
const fullImage = modal.querySelector('img');
const caption = modal.querySelector('.modal-caption');
let opener;
document.querySelectorAll('.open-evidence').forEach(button => {
  button.addEventListener('click', () => {
    opener = button;
    fullImage.src = button.dataset.source;
    fullImage.alt = button.dataset.caption;
    caption.textContent = button.dataset.caption;
    modal.showModal();
    modal.querySelector('.modal-scroll').scrollTop = 0;
    document.body.classList.add('modal-open');
  });
});
modal.querySelector('.close').addEventListener('click', () => modal.close());
modal.addEventListener('click', event => { if (event.target === modal) modal.close(); });
modal.addEventListener('close', () => {
  document.body.classList.remove('modal-open');
  fullImage.removeAttribute('src');
  opener?.focus({preventScroll:true});
});
