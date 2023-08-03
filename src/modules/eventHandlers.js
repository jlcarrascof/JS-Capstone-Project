import {
  displayDetailCard, displayComments, displayCounterOfComments, clearField,
} from './displayDetailCard.js';
import { createComment } from './commentsApi.js';

const initializeEventHandlers = (showsData) => {
  const btnComment = document.querySelectorAll('.btn-comment');
  const closeBtn = document.querySelector('.close-btn');
  const addComment = document.querySelector('.form');
  const nameInput = document.querySelector('.nameInput');
  const commentInput = document.querySelector('.commentInput');
  let commentId;

  // display Detail Card
  btnComment.forEach((btn) => btn.addEventListener('click', async () => {
    commentId = +btn.parentElement.dataset.id;
    const showDetail = showsData.filter((el) => el.id === commentId);

    // display Detail Card
    displayDetailCard(...showDetail);

    // display comment
    displayComments(commentId);

    // display Counter Of Comments
    displayCounterOfComments();
  }));

  // add new Comment
  addComment.addEventListener('submit', async (e) => {
    e.preventDefault();

    // create Comment
    await createComment(commentId, nameInput.value, commentInput.value);

    // display comment
    displayComments(commentId);

    // display Counter Of Comments
    displayCounterOfComments();

    // clear Field
    clearField(nameInput, commentInput);
  });

  // Close Detail Card
  closeBtn.addEventListener('click', () => {
    document.getElementById('shows-comment').style.display = 'none';
  });
};

export default initializeEventHandlers;
