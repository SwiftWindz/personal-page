import About from "../components/About";
import Footer from "../components/Footer";
import Header from "../components/Head";

export default function Home() {
  return (
    <>
    <div className='grid grid-cols-1 h-screen'>
      <Header/>
      <About/>
      <Footer/>
    </div>
    </>
  )
}
