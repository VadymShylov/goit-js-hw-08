// Add imports above this line
import SimpleLightbox from "simplelightbox";

import { galleryItems } from './gallery-items.js';

import "simplelightbox/dist/simple-lightbox.min.css";

// Change code below this line

const  galleryCard = document.querySelector(".gallery");

const blockImage = galleryItems
  .map(
    ({ preview, original, description }) =>
      `<a class="gallery__item" href="${original}">
    <img class="gallery__image" 
    src="${preview}" 
    alt="${description}"/>
  </a>`
  )
  .join("");

 galleryCard.insertAdjacentHTML("beforeend", blockImage);

 new SimpleLightbox('.gallery__item', {
    captionsData: "alt",
    captionDelay: "250",
    enableKeyboard: "true",
  });