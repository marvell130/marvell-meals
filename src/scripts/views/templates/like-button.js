const buatTemplateButtonLike = () => `
  <button aria-label="Like Boss" id="likeButton" class="like">
    <i class="fas fa-thumbs-up" aria-hidden="true"></i>
  </button>
`;

const buatTemplateButtonUnlike = () => `
  <button aria-label="Unlike yah" id="unlikeButton" class="like">
    <i class="fas fa-thumbs-down" aria-hidden="true"></i>
  </button>
`;

export { buatTemplateButtonLike, buatTemplateButtonUnlike };
