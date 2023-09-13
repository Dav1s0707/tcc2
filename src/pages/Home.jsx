import Entrada from "../components/Entada";
import Navbary from "../components/Navbar";
import Sessao1 from "../components/sessao1";
import Card from "../components/Cartao";
import Footer from "../components/Footer";

function Home() {
    return (
        <div>
            <Navbary />
            <Entrada />
            <Sessao1 />
            <Card />
            <Footer />
        </div>
    )
}

export default Home