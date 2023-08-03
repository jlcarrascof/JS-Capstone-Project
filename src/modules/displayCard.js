const showsList = document.getElementById('shows-list');

const displayCard = (Data) => {
  Data.forEach((item) => {
    const showCard = document.createElement('div');
    showCard.className = 'show-card';
    showCard.dataset.id = item.id;
    showCard.innerHTML = `
                            <img class="show-image" src="${item.image.medium}">
                            <div class="show-title">${item.name}</div>

                            <div class="likes-container">
                              <span class="likes-icon">❤️</span>
                              <span class="likes-count">0</span> Likes
                            </div>
                           
                            <button class="btn btn-comment">Add Comment</button>
                          `;

    showsList.appendChild(showCard);
  });
};

export default displayCard;
