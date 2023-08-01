class ShowAPI {
  constructor() {
    this.API = 'https://api.tvmaze.com';
  }

  async searchShows(query) {
    try {
      const response = await fetch(`${this.API}/search/shows?q=${query}`);
      const data = await response.json();
      const result = await data.map((show) => show.show);
      return result;
    } catch (error) {
      throw new Error('Error fetching data:', error);
    }
  }
}

export default ShowAPI;
