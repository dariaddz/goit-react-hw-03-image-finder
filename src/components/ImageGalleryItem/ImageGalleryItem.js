import React from 'react';

function ImageGalleryItem({ imageURL, largeImage, name, onClick }) {
  return (
    <li className="gallery-item" onClick={onClick}>
      <img
        className="itemImage"
        src={imageURL}
        lowsrc={largeImage}
        alt={name}
      />
    </li>
  );
}

export default ImageGalleryItem;
