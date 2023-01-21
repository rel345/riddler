import React, { useContext, useState } from 'react';

const Frame = ({ title }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div class='frame'>
      <h1>{title}</h1>
      {selectedImage && (
        <div>
          <img class='input-img' alt='not found' src={URL.createObjectURL(selectedImage)} />
          <br />
        </div>
      )}
      <br />

      <br />

      <input
        type='file'
        name='myImage'
        disabled={true}
        onChange={(event) => {
          console.log(event.target.files[0]);
          setSelectedImage(event.target.files[0]);
        }}
      />
    </div>
  );
};

export default Frame;