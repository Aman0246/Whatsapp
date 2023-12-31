
import { GoogleOAuthProvider } from '@react-oauth/google';
import './App.css'
import axios from 'axios'
import Messanger from './Components/Messanger'
import { useEffect } from 'react';
import { LoginedUser } from './ReduxToolkit/LoginUser';
import { useDispatch} from 'react-redux';
axios.defaults.baseURL = import.meta.env.VITE_PORT;
axios.defaults.withCredentials = true;
//====================================================================

function App() {
  
//=============================================================

  const dispatch=useDispatch()


  let checkuserinLocalStorage=localStorage.getItem("id")
  let data={id:checkuserinLocalStorage}
  useEffect(()=>{
    let run=async()=>{
    await axios.post("/userCheck",data).then((userdata)=>{
      console.log(userdata.data.data)
      if(userdata.data.status==true){
        dispatch(LoginedUser(userdata.data.data))
      }    }
    )
  }
  run()  
  
},[])

const clientId= import.meta.env.VITE_GOOGLEOUATH_CLIENTID
// console.log(clientId)
  return (
    <GoogleOAuthProvider clientId={clientId}>
      <Messanger/>
      
    </GoogleOAuthProvider>
  )
}

export default App
