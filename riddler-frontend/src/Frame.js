import React, { useContext, useState } from 'react';
import { useMachine } from '@xstate/react';
import promiseMachine from './XState/XState.js';

const Frame = ({ title, image, setImage, isPiece }) => {
  const [current, send] = useMachine(promiseMachine);

  console.log(current);

  return (
    <div class='frame'>
      <h1>{title}</h1>
      {image && (
        <div>
          <img class='input-img' alt='not found' src={URL.createObjectURL(image)} />
          <br />
        </div>
      )}
      <br />

      <br />

      <input
        type='file'
        name='myImage'
        disabled={current.matches('idle') ? false : true}
        onChange={(event) => {
          console.log(event.target.files[0]);
          setImage(event.target.files[0]);
          if (isPiece) {
            console.log('uploaded the piece');
          }
        }}
      />
    </div>
  );
};

export default Frame;
