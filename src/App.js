import { useEffect, useState } from "react";
import './App.css';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import Button from '@mui/material/Button';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import * as React from 'react';


function App() {

  const [energyValue, setEnergyValue] = useState(20);
  const [dance, setDance] = useState('');
  const [val, setVal] = useState('');
  const [pop, setPop] = useState('');


  const initialSubmitState = {

      nrgy: energyValue,
      dnce: dance,
      val: val,
      pop: pop,

  };

  const changeEnergyValue = (event, value) => {
      setEnergyValue(value);
  };

  
  const handleDanceChange = (event) => {
    event.preventDefault();
    setDance(event.target.value);

  };

  const handleValChange = (event) => {
    event.preventDefault();
    setVal(event.target.value);
  };

  const handlePopChange = (event) => {
    event.preventDefault();
    console.log(event.target.value);
    setPop(event.target.value);
  };
  const [ energyJson, setEnergyJson ] = useState({...initialSubmitState});

  const onSumbit = () => {
    console.log('dance on submit', dance)
    setEnergyJson({params: {
      // ...energyJson,
      nrgy: energyValue,
      dnce: dance,
      val: val,
      pop: pop,
    }});
  }
  console.log('energyJson after submit', energyJson);

/*   useEffect(() => {
    // do stuff
    handleDanceChange();
}, [handleDanceChange]);
 */

  
  return (
    <div className="App">
      <header className="App-header">
        <div class="title title-app">JB Set List</div>
        <div>
            <div class="title">Energy</div>
            <Box sx={{ width: 300 }}>
            <Slider
                aria-label="Energy"
                value={energyValue}
                valueLabelDisplay="auto"
                step={10}
                marks
                min={1}
                max={100}
                onChange={changeEnergyValue}
            />
            </Box>
          </div>
          <div className="selectRange">
            
            
            <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Dance</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={dance}
                label="Dance"
                onChange={handleDanceChange}
              >
                <MenuItem value={1}>1</MenuItem>
                <MenuItem value={2}>2</MenuItem>
                <MenuItem value={3}>3</MenuItem>
                <MenuItem value={4}>4</MenuItem>
                <MenuItem value={5}>5</MenuItem>
              </Select>
            </FormControl>
          </Box>

          {/* <form>
            <select name="dance">
              <option value={'1'}>1</option>
              <option value={'2'}>2</option>
            </select>
            <button onSubmit={handleDanceChange}>send</button>
          </form> */}

          <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Mood</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={val}
                label="Val"
                onChange={handleValChange}
              >
                <MenuItem value={1}>1</MenuItem>
                <MenuItem value={2}>2</MenuItem>
                <MenuItem value={3}>3</MenuItem>
                <MenuItem value={4}>4</MenuItem>
                <MenuItem value={5}>5</MenuItem>

              </Select>
            </FormControl>
          </Box>
          



          <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Popularity</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={pop}
                label="Pop"
                onChange={handlePopChange}
              >
                <MenuItem value={1}>1</MenuItem>
                <MenuItem value={2}>2</MenuItem>
                <MenuItem value={3}>3</MenuItem>
                <MenuItem value={4}>4</MenuItem>
                <MenuItem value={5}>5</MenuItem>

              </Select>
            </FormControl>
          </Box>
            
        </div>

        {/* <button className="btn" onClick={onSumbit}>button</button>  */}
        <Button onClick={onSumbit} variant="contained">
        button
        </Button>
      </header>
          
      </div>
  );
}

export default App;
