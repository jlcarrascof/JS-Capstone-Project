import displayDetailCard from './displayDetailCard.js';

const addComment = (e, showsData) => {
  const showsComment = document.getElementById('shows-comment');
  showsComment.style.display = 'flex';

  const item = e.target.closest('.btn-comment');

  const id = +item.parentElement.dataset.id;
  const showDetail = showsData.filter((el) => el.id === id);
  displayDetailCard(...showDetail);
};

const initializeEventHandlers = (showsData) => {
  const btnComment = document.querySelectorAll('.btn-comment');
  const closeBtn = document.querySelector('.close-btn');

  btnComment.forEach((btn) => btn.addEventListener('click', (e) => addComment(e, showsData)));

  closeBtn.addEventListener('click', () => {
    const showsComment = document.getElementById('shows-comment');
    showsComment.style.display = 'none';
  });
};

export default initializeEventHandlers;
