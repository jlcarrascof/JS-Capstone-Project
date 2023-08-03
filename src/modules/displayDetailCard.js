import { getItemComments } from './commentsApi.js';
import countComments from './countComments.js';

const displayDetailCard = (data) => {
  const showDetail = document.querySelector('.show-detail');
  document.getElementById('shows-comment').style.display = 'flex';
  const htmlDetail = `<div class="image-container">
                          <img class="comment-image" src="${data.image.medium}" />
                      </div>
                      <div class="shows-name">
                        <h2>${data.name}</h2>
                        <div class="detail">
                          <span><strong>type:</strong> ${data.type}</span>
                          <span><strong>ended:</strong> ${data.ended}</span>
                          <span><strong>language:</strong> ${data.language}</span>
                          <div>
                            <strong>summary:</strong>
                            <p>
                            ${data.summary}
                            </p>
                          </div>
                         </div>
                      </div>
                          `;

  showDetail.innerHTML = htmlDetail;
};

const displayComments = async (commentId) => {
  const listCommet = document.querySelector('.listComment');
  const comments = await getItemComments(commentId);
  listCommet.innerHTML = '';

  comments.forEach((comment) => {
    const li = document.createElement('li');
    li.classList.add('itemComment');
    li.innerHTML = `Date: ${comment.creation_date} <strong>${comment.username}</strong>  : ${comment.comment} `;
    listCommet.appendChild(li);
  });
};

const displayCounterOfComments = () => {
  const numberCommet = document.querySelector('.numberCommet');
  // Wait a bit to allow comments to be displayed
  setTimeout(() => {
    const commentCounter = countComments();
    numberCommet.innerHTML = `comments (${commentCounter})`;
  }, 500);
};

const clearField = (nameInput, commentInput) => {
  nameInput.value = '';
  commentInput.value = '';
};

export {
  displayDetailCard, displayComments, displayCounterOfComments, clearField,
};