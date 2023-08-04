const baseUrl = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/';
const appId = '8ge52RZ4xe8gKMYNyxDN';

// Function to create a new comment for an item
const createComment = async (itemId, username, comment) => {
  const url = `${baseUrl}apps/${appId}/comments`;
  const data = {
    item_id: itemId,
    username,
    comment,
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

// Function to get comments for a specific item
const getItemComments = async (itemId) => {
  const url = `${baseUrl}apps/${appId}/comments?item_id=${itemId}`;
  try {
    const response = await fetch(url);
    if (response.ok) {
      const comments = await response.json();
      return comments;
    }
    return [];
  } catch (error) {
    return [];
  }
};

export { createComment, getItemComments };
