import './style.css';
import init from './modules/displayCard.js';
import ShowAPI from './modules/api.js';

const tvAPI = new ShowAPI();

document.addEventListener('DOMContentLoaded', async () => {
  try {
    const showsData = await tvAPI.searchShows('byos');
    init(showsData);
  } catch (error) {
    throw new Error(`Error fetching data: ${error}`);
  }
});
