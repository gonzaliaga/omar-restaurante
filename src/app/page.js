import Landing from "../../elementos/landing"
import Navbar from "../../elementos/navbar"
import Information from "../../elementos/information"
import Footer from "../../elementos/footer"

export default function Home() {
  return (
    <>
      <Navbar />
      <div>
        <p>Hola Omar</p>
      </div>
      <Landing />
      <Information />
      <Footer />
    </>
  );
}