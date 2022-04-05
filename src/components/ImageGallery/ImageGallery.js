import React from 'react';
import PropTypes from 'prop-types';

import { fetchImages } from '../../services/PixabayApi';
import Loader from '../Loader';
import ImageGalleryItem from '../ImageGalleryItem';
import Button from '../Button';

import s from './ImageGallery.module.css';

const Status = {
  IDLE: 'idle',
  PENDING: 'pending',
  RESOLVED: 'resolved',
  REJECTED: 'rejected',
};

class ImageGallery extends React.Component {
  state = {
    currentPage: 1,
    images: [],
    status: Status.IDLE,
  };

  componentDidUpdate(prevProps, prevState) {
    const prevName = prevProps.imageName;
    const nextName = this.props.imageName;
    const prevPage = prevState.currentPage;
    const currentPage = this.state.currentPage;

    if (prevName !== nextName) {
      this.setState(
        {
          currentPage: 1,
          images: [],
          status: Status.PENDING,
        },
        () => this.getImages(nextName, 1)
      );
    }
    if (prevPage < currentPage) {
      this.getImages(nextName, currentPage);
    }
  }

  getImages = (nextName, currentPage) => {
    fetchImages(nextName, currentPage).then(images => {
      if (images.length === 0) {
        alert('Ничего не найдено');
        this.setState({ status: Status.REJECTED });
        return;
      }
      this.setState(prevState => ({
        images: [...prevState.images, ...images],
        status: Status.RESOLVED,
      }));
    });
  };
  incrementPage = () => {
    this.setState(prevState => ({ currentPage: prevState.currentPage + 1 }));
  };

  handleImageClick = event => {
    this.props.handleModal(event.target.lowsrc);
  };

  render() {
    const { images, status } = this.state;

    if (status === 'idle' || status === 'rejected') {
      return <ul className={s.gallery}></ul>;
    }

    if (status === 'pending') {
      return <Loader />;
    }

    if (status === 'resolved') {
      return (
        <>
          <ul className={s.gallery}>
            {images.map(image => (
              <ImageGalleryItem
                onClick={this.handleImageClick}
                key={image.id}
                imageURL={image.webformatURL}
                largeImage={image.largeImageURL}
                name={image.tags}
              />
            ))}
          </ul>
          <Button onLoadMore={this.incrementPage} />
        </>
      );
    }
  }
}

export default ImageGallery;

ImageGallery.propTypes = {
  handleModal: PropTypes.func.isRequired,
  imageName: PropTypes.string.isRequired,
};
