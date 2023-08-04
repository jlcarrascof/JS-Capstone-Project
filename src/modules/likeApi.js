const baseUrl = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/';
const appId = 'g5tsgrRdaxLZ6ykMVZ2Z';

// Function to create a new like for an item
const createLike = async (itemId) => {
  const url = `${baseUrl}apps/${appId}/likes`;
  const data = {
    item_id: itemId,
  };
  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    return response.status === 201;
  } catch (error) {
    return false;
  }
};

// Function to get likes for a specific item
const getItemLikes = async (itemId) => {
  const url = `${baseUrl}apps/${appId}/likes`;
  const params = new URLSearchParams({ item_id: itemId });
  try {
    const response = await fetch(`${url}?${params}`);
    if (response.ok) {
      const likes = await response.json();
      return likes;
    }
    return [];
  } catch (error) {
    return [];
  }
};

export { createLike, getItemLikes };