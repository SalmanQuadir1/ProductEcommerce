
import './App.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from './component/Navbar';
import Footer from './component/Footer';
import AllRoutes from './routes/AllRoutes';





function App() {
  return (
    <>
      <Navbar />
      <AllRoutes />
      <ToastContainer />
      <Footer />
    </>
  );
}

export default App;
