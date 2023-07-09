//Registration
import React, { useEffect, useRef, useState } from "react";
import Dialog from "@mui/material/Dialog";
import { Box, Button, IconButton, Typography } from "@mui/material";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import styled from "@emotion/styled";
import { useDispatch } from "react-redux";
import axios from "axios";
import GoogleIcon from "@mui/icons-material/Google";
import TextField from "@mui/material/TextField";
//==============================================================
import { GoogleLogin } from "@react-oauth/google";
// import jwt_decode from "jwt-decode";
import { LoginedUser } from "../../ReduxToolkit/LoginUser";
import PasswordDialog from "./PasswordDialog";
import { toast } from "react-hot-toast";
//==============================================================

export default function LoginDialog() {
  const[switchLogin,setswitchLogin]=useState(false)
  const [register, setregister] = useState();
  const [onSucces, SetonSuccess] = useState([]);
  console.log(onSucces.length);
  const dispatch = useDispatch();
  const Listitems = styled(List)({
    "&>li": {
      padding: 0,
      marginTop: "15px",
      fontSize: "18px",
      lineHeight: "28px",
      color: "#4a4a4a",
    },
  });

  const credentialResponse = (e) => {
    SetonSuccess([e]);
  };

  const handleChange = (e) => {
    setregister({ ...register, [e.target.name]: e.target.value });
  };
 
  const handleRegister = async () => {
    if (register.Password != register.Cpassword) {
      toast.error("Password Mismatch");
    } else {
      const data = {
        email: register.email,
        family_name: register.Lastname,
        given_name: register.Firstname,
        password: register.Password,
      };
      await axios.post("/adduser", data).then((userData) => {
        if (userData.data.status == true) {
          toast.success("Registerd Successfully");
        } else if (userData.data.status == false) {
          toast.error(userData.data.message);
        }
        // dispatch(LoginedUser(decoded))
      });
    }
  };


 const handleLogin=async()=>{
   const data={email:register.email,
    password: register.Password}
    
    await axios.post("/login",data).then((userData) => {
    // console.log(userData.data.data._id)
    if (userData.data.status == true) {
      toast.success(userData.data.message);
      dispatch(LoginedUser(userData))
      localStorage.setItem("id",userData.data.data._id)
    } else if (userData.data.status == false) {
      toast.error(userData.data.message);
    }
  });


 }

  return (
    <Dialog
      hideBackdrop={true}
      PaperProps={{
        sx: {
          height: "80%",
          marginTop: "5%",
          width: "60%",
          maxWidth: "100%",
          maxHeight: "100%",
          boxShadow: "none",
        },
      }}
      open={true}
    >
      <Box>
        <Box sx={{ display: "flex" }}>
          <Box sx={{ padding: "56px 0 56px 56px" }}>
            <Typography
              sx={{ fontSize: "26px", color: " #BEBEBE", marginBottom: "25px" }}
            >
              To use WhatsApp on your Computer
            </Typography>
            <Listitems>
              <ListItem>1. Open WhatsApp on Your Computer</ListItem>
              <ListItem>2. Tap Menu Setting and select WhatsApp Web</ListItem>
              <ListItem>3. Tap Menu Setting and select WhatsApp Web</ListItem>
            </Listitems>
          </Box>
          {switchLogin==true? <Box
            sx={{
              position: "relative",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
            }}
           >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                margin: "60px 0 0px 50px",
              }}
            >
              <Typography sx={{ fontSize: "30px" }}>Register</Typography>
              <TextField
                id="standard-basic"
                name="email"
                onChange={(e) => handleChange(e)}
                label="Email"
                variant="standard"
              />
              <TextField
                id="standard-basic"
                name="Firstname"
                onChange={(e) => handleChange(e)}
                label="Firstname"
                variant="standard"
              />
              <TextField
                id="standard-basic"
                name="Lastname"
                onChange={(e) => handleChange(e)}
                label="Lastname"
                variant="standard"
              />
              <TextField
                id="standard-basic"
                name="Password"
                onChange={(e) => handleChange(e)}
                label="Password"
                variant="standard"
              />
              <TextField
                id="standard-basic"
                name="Cpassword"
                onChange={(e) => handleChange(e)}
                label="Conform Password"
                variant="standard"
              />
              {/* <TextField
                id="standard-basic"
                label="Profile"
                variant="standard"
              /> */}
              <Button
                onClick={handleRegister}
                sx={{ width: "100%", marginTop: "10px" }}
                variant="contained"
              >
                Register
              </Button>
              <Button onClick={()=>setswitchLogin(false)}
                sx={{
                  width: "100%",
                  marginTop: "20px",
                  backgroundColor: "Green",
                }}
                variant="contained"
              >
                Click to login
              </Button>
              <Typography sx={{ marginTop: "5px" }}>
                {" "}
                Or Register Through Google
              </Typography>
            </Box>
            <Box sx={{ margin: "10px 0 0px 50px" }}>

                <GoogleLogin 
                  onSuccess={(e) => credentialResponse(e)}
                  onError={() => {
                    console.log("Login Failed");
                  }}
                />
              </Box>

              {onSucces.length != 0 ? (
                <PasswordDialog onSucces={onSucces} />
              ) : (
                ""
              )}
            </Box>
            
            
            
            :
            
            
            
            
            <Box
            sx={{
              position: "relative",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
            }}
           >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                margin: "60px 0 0px 50px",
              }}
            >
              <Typography sx={{ fontSize: "30px" }}>Login</Typography>
              <TextField
                id="standard-basic"
                name="email"
                onChange={(e) => handleChange(e)}
                label="Email"
                variant="standard"
              />     
              <TextField
                id="standard-basic"
                name="Password"
                onChange={(e) => handleChange(e)}
                label="Password"
                variant="standard"
              />
      
              {/* <TextField
                id="standard-basic"
                label="Profile"
                variant="standard"
              /> */}
              <Button
                onClick={handleLogin}
                sx={{ width: "100%", marginTop: "10px" }}
                variant="contained"
              >
                Login
              </Button>
              <Button onClick={()=>setswitchLogin(true)}
                sx={{
                  width: "100%",
                  marginTop: "20px",
                  backgroundColor: "Green",
                }}
                variant="contained"
              >
                Click to Register
              </Button>
               </Box>
                 
            </Box>
            }
         
          </Box>

          
        </Box>

    </Dialog>
  );
}
