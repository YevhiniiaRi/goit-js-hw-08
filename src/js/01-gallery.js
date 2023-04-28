import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { galleryItems } from './gallery-items';

const gallery = document.querySelector('.gallery');
const galleryMarkup = createGalleryMarkup(galleryItems);
gallery.insertAdjacentHTML('beforeend', galleryMarkup);

function createGalleryMarkup(items) {
  return items
    .map(({ preview, original, description }) => {
      return `
        <li class="gallery__item">
          <a class="gallery__link" href="${original}">
            <img class="gallery__image" src="${preview}" alt="${description}" />
          </a>
        </li>
      `;
    })
    .join('');
}

const lightbox = new SimpleLightbox('.gallery a', {
  captions: true,
  captionsDelay: 250,
});
