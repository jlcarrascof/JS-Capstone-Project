import displayDetailCard from './displayDetailCard.js';
import { createComment, getItemComments } from './commentsApi.js';

const displayComments = async (commentId) => {
  const listCommet = document.querySelector('.listComment');
  const comments = await getItemComments(commentId);
  listCommet.innerHTML = '';

  comments.forEach((comment) => {
    const li = document.createElement('li');
    li.innerHTML = `Date: ${comment.creation_date} <strong>${comment.username}</strong>  : ${comment.comment} `;
    listCommet.appendChild(li);
  });
};

const initializeEventHandlers = (showsData) => {
  const btnComment = document.querySelectorAll('.btn-comment');
  const closeBtn = document.querySelector('.close-btn');
  const addComment = document.querySelector('.form');
  const nameInput = document.querySelector('.nameInput');
  const commentInput = document.querySelector('.commentInput');
  const numberCommet = document.querySelector('.numberCommet');

  let commentId;

  btnComment.forEach((btn) => btn.addEventListener('click', () => {
    commentId = +btn.parentElement.dataset.id;
    const showDetail = showsData.filter((el) => el.id === commentId);

    // display Detail Card
    displayDetailCard(...showDetail);

    // Add comments counter
    numberCommet.innerHTML = 'comment (5)';

    // display comment
    displayComments(commentId);
  }));

  addComment.addEventListener('submit', async (e) => {
    e.preventDefault();

    // create Comment
    await createComment(commentId, nameInput.value, commentInput.value);

    // display comment
    displayComments(commentId);

    nameInput.value = '';
    commentInput.value = '';
  });

  closeBtn.addEventListener('click', () => {
    document.getElementById('shows-comment').style.display = 'none';
  });
};

export default initializeEventHandlers;
