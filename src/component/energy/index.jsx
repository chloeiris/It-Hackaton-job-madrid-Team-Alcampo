import { useState } from "react";
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import Button from '@mui/material/Button';

export function Energy(){
    const [value, setValue] = useState(20);

    const changeValue = (event, value) => {
        setValue(value);
        console.log(value);
    };
    return(
        <>
            <div>hola energy</div>
            <button onClick={() => console.log('min', min)}>Min</button>
            <button onClick={() => console.log('max', max)}>Max</button>
            <Box sx={{ width: 300 }}>
            <Slider
                aria-label="Temperature"
                //defaultValue={30}
                value={value}
                //getAriaValueText={value}
                valueLabelDisplay="auto"
                step={10}
                marks
                min={0}
                max={100}
                onChange={changeValue}
            />
            </Box>
            <Button>Submit</Button>
        </>
    )
}





