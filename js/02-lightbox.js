import { galleryItems } from "./gallery-items.js";
// Change code below this line
const pageGallery = document.querySelector(".gallery");
const cardImage = createGallery(galleryItems);

pageGallery.insertAdjacentHTML("beforeend", cardImage);

function createGallery(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image lazyload"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`;
    })
    .join("");
}

// Lightbox library )))))
new SimpleLightbox(".gallery a", {
  disableRightClick: true,
  scrollZoom: false,
  captionDelay: 250,
  captionsData: "alt",
});
