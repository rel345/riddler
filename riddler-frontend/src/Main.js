import React from 'react';
import { AppProvider, useAppContext } from './Context';
import Frame from './Frame';

const Main = () => {
  const { puzzleImage, pieceImage, setPuzzleImage, setPieceImage } = useAppContext();

  return (
    <>
      <h1>Riddler</h1>
      <div class='container'>
        <Frame title='Upload puzzle' image={puzzleImage} setImage={setPuzzleImage} />
        <Frame title='Upload piece' image={pieceImage} setImage={setPieceImage} isPiece={true} />
      </div>
    </>
  );
};

export default Main;
