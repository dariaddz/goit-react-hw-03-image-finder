import React from 'react';
import s from './ImageGalleryItem.module.css';

function ImageGalleryItem({ imageURL, largeImage, name, onClick }) {
  return (
    <li className={s.galleryItem} onClick={onClick}>
      <img
        className={s.itemImage}
        src={imageURL}
        lowsrc={largeImage}
        alt={name}
      />
    </li>
  );
}

export default ImageGalleryItem;
