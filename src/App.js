import React, { useState } from 'react';
import './App.css';

function App() {
  const requestUrl =
    'https://api.unsplash.com/search/photos?query=dogs&client_id=HX3wJPX0SDBEltHEnd754XINQRAX7lFAeEFNb2cCn5Y';

  const [imageSrc, setImageSrc] = useState('');

  const getNewImage = async () => {
    const randomNumber = Math.floor(Math.random() * 10);

    try {
      const response = await fetch(requestUrl);
      const data = await response.json();
      const allImages = data.results[randomNumber];
      setImageSrc(allImages.urls.regular);
    } catch (error) {
      console.error('Error fetching image:', error);
    }
  };

  return (
    <div id="display">
      <div className="fetchImagesWrapper">
        <button className="getImagesButton" onClick={getNewImage}>
          Click Here to get Pictures of Dogs
        </button>
      </div>
      <div className="imageDisplayWrapper">
        <img className="imageToDisplay" src={imageSrc} alt="Random Dog" />
      </div>
    </div>
  );
}

export default App;
