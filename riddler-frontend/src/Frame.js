import React, { useContext, useState } from "react"
import { Box, Button, IconButton, Stack, } from '@mui/material'
import PhotoCamera from '@mui/icons-material/PhotoCamera'
import Image from 'mui-image'

const Frame = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div>
      <h1>Upload Your Puzzle</h1>
      {selectedImage && (
        <div>
        <img alt="not fount" width={"750px"} height={"550px"} src={URL.createObjectURL(selectedImage)} />
        <br />
        </div>
      )}
      <br />
     
      <br /> 

      <input
        type="file"
        name="myImage"
        onChange={(event) => {
          console.log(event.target.files[0]);
          setSelectedImage(event.target.files[0]);
        }}
      />
    </div>
  );
};

export default Frame