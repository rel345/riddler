import React, { createContext, useContext, useEffect, useState } from 'react';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [puzzleImage, setPuzzleImage] = useState(null);
  const [pieceImage, setPieceImage] = useState(null);

  return (
    <AppContext.Provider value={{ puzzleImage, pieceImage, setPuzzleImage, setPieceImage }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
