const showDetail = document.querySelector('.show-detail');

const displayDetailCard = (data) => {
  const htmlDetail = `<div class="image-container">
                          <img class="comment-image" src="${data.image.medium}" />
                      </div>
                      <div class="shows-name">
                        <h2>${data.name}</h2>
                        <div class="detail">
                          <span><strong>type:</strong> ${data.type}</span>
                          <span><strong>ended:</strong> ${data.ended}</span>
                          <span><strong>language:</strong> ${data.language}</span>
                          <div>
                            <strong>summary:</strong>
                            <p>
                            ${data.summary}
                            </p>
                          </div>
                         </div>
                      </div>
                          `;

  showDetail.innerHTML = htmlDetail;
};

export default displayDetailCard;