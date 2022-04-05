import React from 'react';

import SearchBar from "./SearchBar"
import ImageGallery from './ImageGallery';

import Loader from './Loader';


export const App = () => {
  return (
    <>
         <SearchBar/>
      <ImageGallery/>
    <Loader/></>
    
    
  );
};
