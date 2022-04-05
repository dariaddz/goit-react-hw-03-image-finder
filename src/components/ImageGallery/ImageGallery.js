import React from 'react';
import ImageGalleryItem from '../ImageGalleryItem';
import Button from '../Button';

class ImageGallery extends React.Component {
  render() {
    return (
      <div>
        Это Галлерея
        <ImageGalleryItem />
        <Button />
      </div>
    );
  }
}

export default ImageGallery;
