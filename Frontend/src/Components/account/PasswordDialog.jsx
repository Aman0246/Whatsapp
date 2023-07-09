import React, { useState } from "react";
import Dialog from "@mui/material/Dialog";
import jwt_decode from "jwt-decode";
import { Box, Button, Typography } from "@mui/material";
import TextField from "@mui/material/TextField";
import axios from "axios";
import toast from "react-hot-toast";
import { LoginedUser } from "../../ReduxToolkit/LoginUser";
import { useDispatch } from "react-redux";
// import { LoginedUser } from "../../ReduxToolkit/LoginUser";

export default function PasswordDialog({ onSucces }) {
const dispatch=useDispatch()

  const [open,setopen]=useState(true)

    var decoded = jwt_decode(onSucces[0].credential);
    const [inputs, setinput] = useState();
  const handleChange = (e) => {
    setinput({ ...inputs, [e.target.name]: e.target.value });
  };

  
  
  const handleSubmit = () => {
    let userData={email:decoded.email,
      password:inputs.password,
      family_name: decoded.family_name,
      given_name : decoded.given_name,
      picture:decoded.picture
    }
    // console.log(userData)
      if(inputs.password!=inputs.conformpassword){
        toast.error("Wrong password")
      }
      else{
      const addUser = async () => {
        try {
          await axios.post("/adduser", userData).then((userData) => {
            
            if(userData.data.status==true){
              toast.success("Registerd Successfully")
              toast(userData.data.message)
              // Direct login
              const user=async()=>{
                let data={email:decoded.email,
                  password:inputs.password,
                  picture:decoded.picture
                }

                await axios.post("/login",data).then((userData) => {
                  console.log(userData.data.data._id)
                  if (userData.data.status == true) {
                    toast.success(userData.data.message);
                    localStorage.setItem("id",userData.data.data._id)
                    console.log(userData.data.data)
                    dispatch(LoginedUser(userData.data.data))
                  } else if (userData.data.status == false) {
                    toast.error(userData.data.message);
                  }
                }
                );

              }
              user()
              

              setopen(false)
              
            }
            else if(userData.data.message==="Email Already Registered"){
              toast(userData.data.message)
              // Direct login
              const user=async()=>{
                let data={email:decoded.email,
                  password:inputs.password,
                  picture:decoded.picture
                }

                await axios.post("/login",data).then((userData) => {
                  console.log(userData.data.data._id)
                  if (userData.data.status == true) {
                    toast.success(userData.data.message);
                    localStorage.setItem("id",userData.data.data._id)
                    dispatch(LoginedUser(userData.data.data))
                  } else if (userData.data.status == false) {
                    toast.error(userData.data.message);
                  }
                }
                );

              }
              user()
            }
            else if(userData.data.status==false){
              toast.error(userData.data.message)
            }
          });
        } catch (error) {
          console.log("error while adding User APi", error.message);
        }
      }
      addUser()
    }
    };
    const handleClose=()=>{
      setopen(false)
    }
 
  return (
    <Dialog open={open} onClose={handleClose} >
      <Box
        sx={{
          minWidth: "200px",
          width: "300px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography
          sx={{
            fontSize: "20px",
            margin: "20px auto 10px auto ",
            fontWeight: "600",
            color: "#128C7E",
          }}
        >
          Set PassWord
        </Typography>
        <TextField
          onChange={(e) => handleChange(e)}
          name="password"
          id="filled-basic"
          label="Password"
          type="password"
          variant="standard"
        />
        <TextField
          onChange={(e) => handleChange(e)}
          name="conformpassword"
          id="filled-basic"
          type="password"
          label="ConformPassword"
          variant="standard"
        />
        <Button
          onClick={handleSubmit}
          sx={{ margin: "20px auto 20px auto", width: "100%" }}
          variant="contained"
        >
          Confirm
        </Button>
      </Box>
    </Dialog>
  );
}
