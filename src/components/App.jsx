import React from 'react';

import Search from "./Search"
import ImageGallery from './ImageGallery';
import Modal from './Modal';
// import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

class App extends React.Component {
  state = {
    imageName: '',
    showModal: false,
    stateURL: '',
  };

  handleFormSubmit = query => {
    this.setState({ imageName: query });
  };

  toggleModal = url => {
    this.setState(({ showModal }) => ({
      stateURL: url,
      showModal: !showModal,
    }));
  };

  render() {
    const { imageName, showModal, stateURL} = this.state;

    return (
      <div className="App">
        <Search onSubmit={this.handleFormSubmit} />
        <ImageGallery imageName={imageName} handleModal={this.toggleModal} />
        {showModal && <Modal onClose={this.toggleModal} imageURL={stateURL} />}
        
      </div>
    );
  }
}
export default App
