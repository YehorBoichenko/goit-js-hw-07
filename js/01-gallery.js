import { galleryItems } from "./gallery-items.js";
// Change code below this line
const pageGallery = document.querySelector(".gallery");
const cardImage = createGallery(galleryItems);
let originalImage;

pageGallery.insertAdjacentHTML("beforeend", cardImage);
pageGallery.addEventListener("keydown", closeEsc);

function createGallery(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`;
    })
    .join("");
}

pageGallery.addEventListener("click", (event) => {
  event.preventDefault();
  if (event.target.nodeName !== "IMG") {
    return;
  }
  originalImage = basicLightbox.create(
    `
    <img src=${event.target.dataset.source} width="500" height="500">`,
    {
      onShow: () => {
        window.addEventListener("keydown", closeEsc);
      },
      onClose: () => {
        window.removeEventListener("keydown", closeEsc);
      },
    }
  );
  //   console.log(event.target);
  originalImage.show();
});

function closeEsc(event) {
  if (event.code !== "Escape") {
    return;
  }
  originalImage.close();
}
