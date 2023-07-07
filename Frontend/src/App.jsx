
import { GoogleOAuthProvider } from '@react-oauth/google';
import './App.css'
import Messanger from './Components/Messanger'

function App() {

const clientId= import.meta.env.VITE_GOOGLEOUATH_CLIENTID
  return (
    <GoogleOAuthProvider clientId={clientId}>
      <Messanger/>
      
    </GoogleOAuthProvider>
  )
}

export default App
