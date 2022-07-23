import Index from "./pages";
import DataProvider from "./redux/store";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  return (
    <DataProvider>
      <Index />
      <ToastContainer />
    </DataProvider>
  );
}

export default App;