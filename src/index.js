import './style.css';
import displayCard from './modules/displayCard.js';
import ShowAPI from './modules/api.js';

document.addEventListener('DOMContentLoaded', async () => {
  try {
    const tvAPI = new ShowAPI();
    const showsData = await tvAPI.searchShows('spederman');

    displayCard(showsData);

    const showsList = document.getElementById('shows-list');
    const showsComment = document.getElementById('shows-comment');
    const closeBtn = document.querySelector('.close-btn');

    const addComment = (e) => {
      showsComment.style.display = 'flex';
      const item = e.target.closest('.btn-comment');
      if (!item) return;
      const id = +item.parentElement.dataset.id;
      const showDetail = showsData.filter((el) => el.id === id);
      console.log(showDetail);
    };

    showsList.addEventListener('click', addComment);
    closeBtn.addEventListener('click', () => {
      showsComment.style.display = 'none';
    });
  } catch (error) {
    console.error('Error fetching data:', error);
  }
});
