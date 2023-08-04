import {
  displayDetailCard, displayComments, displayCounterOfComments, clearField,
} from './displayDetailCard.js';
import { createComment } from './commentsApi.js';
import { createLike, getItemLikes } from './likeApi.js';

const initializeEventHandlers = (item) => {
  const { showCard, itemId, itemData } = item;

  const likeButton = showCard.querySelector('.btn-like');
  likeButton.addEventListener('click', async () => {
    try {
      await createLike(itemId);
      const likes = await getItemLikes(itemId);
      const numOfLike = likes.find((like) => like.item_id === itemId);
      const counterLike = showCard.querySelector('.counter-like');
      counterLike.textContent = numOfLike ? numOfLike.likes : 0;
    } catch (error) {
      throw new Error(`Error fetching data: ${error}`);
    }
  });

  const commentButton = showCard.querySelector('.btn-comment');
  commentButton.addEventListener('click', async () => {
    try {
      await displayDetailCard(itemData);
      await displayComments(itemId);
      await displayCounterOfComments();

      const addComment = document.querySelector('.form');
      const nameInput = document.querySelector('.nameInput');
      const commentInput = document.querySelector('.commentInput');

      addComment.addEventListener('submit', async (e) => {
        e.preventDefault();

        await createComment(itemId, nameInput.value, commentInput.value);
        await displayComments(itemId);
        await displayCounterOfComments();

        clearField(nameInput, commentInput);
      });
    } catch (error) {
      throw new Error(`Error fetching data: ${error}`);
    }
  });

  const closeBtn = document.querySelector('.close-btn');
  closeBtn.addEventListener('click', () => {
    document.getElementById('shows-comment').style.display = 'none';
  });
};

export default initializeEventHandlers;
