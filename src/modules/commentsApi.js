const baseUrl = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/';
const appId = '8ge52RZ4xe8gKMYNyxDN';

// Function to create a new app
/* async function createApp() {
  const url = `${baseUrl}apps/`;
  try {
    const response = await fetch(url, {
      method: 'POST',
    });
    if (response.ok) {
      const data = await response.text(); // Get the response as text
      appId = data.trim(); // Trim whitespace from the response
      console.log('App created. App ID:', appId);
    } else {
      console.error('Failed to create app:', response.status, response.statusText);
    }
  } catch (error) {
    console.error('Error creating app:', error);
  }
} */

// Function to create a new comment for an item
export async function createComment(itemId, username, comment) {
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
}

// Function to get comments for a specific item
export async function getItemComments(itemId) {
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
}
