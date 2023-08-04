const countComments = () => {
  const commentElements = document.querySelectorAll('.itemComment');
  const commentCount = commentElements.length;
  return commentCount;
};
export default countComments;