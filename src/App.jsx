import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css'
import Banner from './Components/Banner/Banner'
import Navbar from './Components/Navbar/Navbar'
import Recipes from './Components/Recipes/Recipes'
import Footer from './Components/Footer/Footer';


function App() {

  return (
    <>
    <main className='w-[90%] mx-auto'>
      <Navbar></Navbar>

      {/* toast */}
      <div className="App">
        <ToastContainer />
      </div>

      <Banner></Banner>

      <div className="mt-14 mb-5 text-center space-x-5 space-y-5">
        <h1 className="font-bold text-3xl ">Our Recipes</h1>
        <p className="text-gray-700">Indulge in a diverse collection of mouthwatering recipes crafted to delight every palate. Explore our culinary creations now!</p>
      </div>
      <div className='flex flex-col md:flex-row gap-5'>
        <Recipes></Recipes>
        

      </div>
    </main>
    <Footer></Footer>
    </>
  )
}

export default App
