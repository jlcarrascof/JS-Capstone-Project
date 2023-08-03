import './style.css';
import displayCard from './modules/displayCard.js';
import ShowAPI from './modules/api.js';
import initializeEventHandlers from './modules/eventHandlers.js';

const tvAPI = new ShowAPI();

document.addEventListener('DOMContentLoaded', async () => {
  try {
    const showsData = await tvAPI.searchShows('batman');

    displayCard(showsData);

    initializeEventHandlers(showsData);

    // Get all elements with 'likes-icon' class
    const likeIcons = document.querySelectorAll('.likes-icon');

    // Add a click event
    likeIcons.forEach((likeIcon) => {
      let likesCount = 0; // Init Counter

      likeIcon.addEventListener('click', () => {
        likesCount += 1; // Increments
        const likesCountElement = likeIcon.nextElementSibling; // Likes Number
        likesCountElement.textContent = likesCount; // Update likes number
      });
    });
  } catch (error) {
    throw new Error(`Error fetching data: ${error}`);
  }
});
