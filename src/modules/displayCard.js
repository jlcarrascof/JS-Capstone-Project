import { getItemLikes } from './likeApi.js';
import initializeEventHandlers from './eventHandlers.js';

const showsList = document.getElementById('shows-list');

const init = async (Data) => {
  const likesPromises = Data.map(async (item) => {
    const likes = await getItemLikes(item.id);
    const numOfLike = likes.find((like) => like.item_id === item.id);
    return { item, numOfLike };
  });

  const itemsWithLikes = await Promise.all(likesPromises);

  itemsWithLikes.forEach(({ item, numOfLike }) => {
    const showCard = document.createElement('div');
    showCard.className = 'show-card';
    showCard.dataset.id = item.id;

    showCard.innerHTML = `
      <img class="show-image" src="${item.image.medium}">
      <div class="show-title">${item.name}</div>
      <div class="box-like">
        <button class="btn-like"><span>👍</span></button>
        <span class="counter-like">${numOfLike ? numOfLike.likes : 0}</span>
      </div>
      <button class="btn btn-comment">Add Comment</button>
    `;

    showsList.appendChild(showCard);
    document.querySelector('.counter-shows').textContent = `(${Data.length})`;

    initializeEventHandlers({ showCard, itemId: item.id, itemData: item });
  });
};

export default init;
