import React from "react"
import { Box } from '@mui/material'

const Frame = () => {
    return (
        <Box
          sx={{
            width: 750,
            height: 550,
            backgroundColor: 'primary.dark',
            '&:hover': {
              backgroundColor: 'primary.main',
              opacity: [0.9, 0.8, 0.7],
            },
          }}
        />
      );
}

export default Frame