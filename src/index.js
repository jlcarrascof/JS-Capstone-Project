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
  } catch (error) {
    throw new Error(`Error fetching data: ${error}`);
  }
});
