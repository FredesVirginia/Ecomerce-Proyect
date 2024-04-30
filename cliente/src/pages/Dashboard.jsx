import { Link } from "react-router-dom"
import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useState , useEffect } from "react";



export default function Dashboard() {

  //MATERIAL 
  const [open, setOpen] = React.useState(false);
  const [age, setAge] = useState("");

  const handleChange = (event) => {
    setAge(Number(event.target.value) || '');
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason !== 'backdropClick') {
      setOpen(false);
    }
  };

  ////////////


  useEffect(() => {
    const cardsContainer = document.querySelector(".container");

    const handleClick = (e) => {
      const target = e.target.closest(".card");

      if (!target) return;

      cardsContainer.querySelectorAll(".card").forEach((card) => {
        card.classList.remove("active");
      });

      target.classList.add("active");
    };

    cardsContainer.addEventListener("click", handleClick);

    return () => {
      cardsContainer.removeEventListener("click", handleClick);
    };
  }, []);


  return (
    <div className=" space-x-4 w-full">
      <nav className="  bg-cyan-700 w-full py-1">
        <div className="flex items-center">
          <img
            src="../../public/img/i2-removebg-preview.png"
            className="w-[120px]"
          />

          <h1 className="text-2xl text-bold text-white ">Ecomerce </h1>

          <input placeholder=" 🔎 Buscar" className="  ml-[300px] w-[300px] rounded-xl px-2 py-1" />


          <div className=" ml-[260px] flex space-x-3 items-center">
            <Link className="text-white text-xl " to="/login">Iniciar secion</Link>
            <Link className="hover:bg-cyan-700 hover:text-white  bg-white text-xl text-cyan-700 px-4 py-1 pb-2 rounded-md" to="/register">Registrarse</Link>
          </div>
        </div>


        <div className="flex justify-center mb-2">
          <Button style={{
            color: "white", border: "1px solid white",
            padding: "0 20px",
            borderRadius: "10px",
            transition: "border-color 0.3s ease",

            ":hover": {
              borderColor: "white",
              cursor: "pointer"
            }
          }} className="hover:border-4 hover:border-white" onClick={handleClickOpen}>Buscar por Categoria</Button>
          <Dialog disableEscapeKeyDown open={open} onClose={handleClose}>
            <DialogTitle>Fill the form</DialogTitle>
            <DialogContent>
              <Box component="form" sx={{ display: 'flex', flexWrap: 'wrap' }}>

                <FormControl sx={{ m: 1, minWidth: 120 }}>
                  <InputLabel id="demo-dialog-select-label">Category</InputLabel>
                  <Select
                    labelId="demo-dialog-select-label"
                    id="demo-dialog-select"
                    value={age}
                    onChange={handleChange}
                    input={<OutlinedInput label="Age" />}
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                  </Select>
                </FormControl>
              </Box>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose}>Cancel</Button>
              <Button onClick={handleClose}>Ok</Button>
            </DialogActions>
          </Dialog>
        </div>


      </nav>

      <section className="mt-10">
        <div className="container">
          <div className="card">
            <img className="background" src="../../public/img/iglu.png" alt="" />

            <div className="card-content">
              <div className="profile-image">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"  className="lucide lucide-gamepad-2">
                  <line x1="6" x2="10" y1="11" y2="11" />
                  <line x1="8" x2="8" y1="9" y2="13" />
                  <line x1="15" x2="15.01" y1="12" y2="12" />
                  <line x1="18" x2="18.01" y1="10" y2="10" />
                  <path d="M17.32 5H6.68a4 4 0 0 0-3.978 3.59c-.006.052-.01.101-.017.152C2.604 9.416 2 14.456 2 16a3 3 0 0 0 3 3c1 0 1.5-.5 2-1l1.414-1.414A2 2 0 0 1 9.828 16h4.344a2 2 0 0 1 1.414.586L17 18c.5.5 1 1 2 1a3 3 0 0 0 3-3c0-1.545-.604-6.584-.685-7.258-.007-.05-.011-.1-.017-.151A4 4 0 0 0 17.32 5z" />
                </svg>
              </div>

              <h3 className="title">GTA 6</h3>
            </div>
            <div className="backdrop"></div>
          </div>

          <div className="card">
            <img className="background" src="../../public/img/iglu.png" alt="" />

            <div className="card-content">
              <div className="profile-image">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"  className="lucide lucide-gamepad-2">
                  <line x1="6" x2="10" y1="11" y2="11" />
                  <line x1="8" x2="8" y1="9" y2="13" />
                  <line x1="15" x2="15.01" y1="12" y2="12" />
                  <line x1="18" x2="18.01" y1="10" y2="10" />
                  <path d="M17.32 5H6.68a4 4 0 0 0-3.978 3.59c-.006.052-.01.101-.017.152C2.604 9.416 2 14.456 2 16a3 3 0 0 0 3 3c1 0 1.5-.5 2-1l1.414-1.414A2 2 0 0 1 9.828 16h4.344a2 2 0 0 1 1.414.586L17 18c.5.5 1 1 2 1a3 3 0 0 0 3-3c0-1.545-.604-6.584-.685-7.258-.007-.05-.011-.1-.017-.151A4 4 0 0 0 17.32 5z" />
                </svg>
              </div>

              <h3 className="title">Spider-Man PS5</h3>
            </div>
            <div className="backdrop"></div>
          </div>

          <div className="card">
            <img className="background" src="../../public/img/iglu.png" alt="" />

            <div className="card-content">
              <div className="profile-image">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"  className="lucide lucide-gamepad-2">
                  <line x1="6" x2="10" y1="11" y2="11" />
                  <line x1="8" x2="8" y1="9" y2="13" />
                  <line x1="15" x2="15.01" y1="12" y2="12" />
                  <line x1="18" x2="18.01" y1="10" y2="10" />
                  <path d="M17.32 5H6.68a4 4 0 0 0-3.978 3.59c-.006.052-.01.101-.017.152C2.604 9.416 2 14.456 2 16a3 3 0 0 0 3 3c1 0 1.5-.5 2-1l1.414-1.414A2 2 0 0 1 9.828 16h4.344a2 2 0 0 1 1.414.586L17 18c.5.5 1 1 2 1a3 3 0 0 0 3-3c0-1.545-.604-6.584-.685-7.258-.007-.05-.011-.1-.017-.151A4 4 0 0 0 17.32 5z" />
                </svg>
              </div>

              <h3 className="title">God Of War</h3>
            </div>
            <div className="backdrop"></div>
          </div>

         

         
        </div>
      </section>
    </div>
  )
}





