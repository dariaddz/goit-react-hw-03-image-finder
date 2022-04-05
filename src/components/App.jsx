import React from 'react';

import Search from "./Search"
import ImageGallery from './ImageGallery';

import Loader from './Loader';


export const App = () => {
  return (
    <>
        <Search/>
      <ImageGallery/>
    <Loader/></>
    
    
  );
};
