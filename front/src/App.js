import { useState } from "react";
import './App.css';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import Button from '@mui/material/Button';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import * as React from 'react';
import data from './setlist.json';
import { ListMusic } from "./component/list";


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
    setPop(event.target.value);
  };
  const [ energyJson, setEnergyJson ] = useState({...initialSubmitState});

  const onSumbit = () => {
    setEnergyJson({params: {
      nrgy: energyValue,
      dnce: dance,
      val: val,
      pop: pop,
    }});
  }
  
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
        <main>
          <div className="music-play">Play music</div>
          <div className="list-music">
            {data.map((item, index) => {
              return (
                <ListMusic item={item}></ListMusic>
              )
            })}
          </div>
        </main>

        <footer>
          <div>Nilton Medina</div>
          <div>Alexandra Kuchynskaya</div>
          <div>Chloe Aroca</div>
          <div>Maria Pisto</div>
        </footer>



      </div>
  );
}

export default App;
