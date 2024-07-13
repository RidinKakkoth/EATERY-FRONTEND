import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import StoreContextProvider from "./context/StoreContext.jsx";
import {GoogleOAuthProvider} from '@react-oauth/google'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const client_id= import.meta.env.VITE_GOOGLE_CLIENT_ID

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
  <ToastContainer />
  <GoogleOAuthProvider clientId={client_id}>
    <StoreContextProvider>
      <App />
    </StoreContextProvider>
  </GoogleOAuthProvider>
  </BrowserRouter>
);
