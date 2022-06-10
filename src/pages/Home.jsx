import About from "../components/About";
import Footer from "../components/Footer";
import Header from "../components/Head";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <>
    <div className='grid grid-cols-1 h-screen'>
      <Navbar/>
      <Header/>
      <About/>
      <Footer/>
    </div>
    </>
  )
}
