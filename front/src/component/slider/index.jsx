import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';




export default function DiscreteSlider() {
  const [value, setValue] = React.useState(20);

  const changeValue = (event, value) => {
    setValue(value);
    console.log(value);
  };

  return (
    <Box sx={{ width: 300 }}>
      <Slider
        aria-label="Temperature"
        //defaultValue={30}
        value={value}
        //getAriaValueText={value}
        valueLabelDisplay="auto"
        step={10}
        marks
        min={10}
        max={110}
        onChange={changeValue}
      />
      {/* <Slider defaultValue={30} step={10} marks min={10} max={110} disabled /> */}
    </Box>
  );
}