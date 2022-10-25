import { useState } from "react";
import PaletaLista from "components/PaletaLista/PaletaLista";
import NavBar from "components/Navbar/NavBar";
import AdicionaEditaPaletaModal from "components/AdicionaEditaPaletaModal/AdicionaEditaPaletaModal";
import "./Home.css";


function Home() {
  
  const [canShowAdicionaPaletaModal, setCanShowAdicionaPaletaModal] = useState(false);
  const [paletaParaAdicionar, setPaletaParaAdicionar] = useState();
  return (<div className="Home">
       <NavBar creatPaleta={() => setCanShowAdicionaPaletaModal(true)}/>
      <div className="Home__container">
        <PaletaLista paletaCriada={paletaParaAdicionar} />
        {
          canShowAdicionaPaletaModal && (<AdicionaEditaPaletaModal closeModal={() => setCanShowAdicionaPaletaModal(false)} onCretePaleta={(paleta) => setPaletaParaAdicionar(paleta)}/>)
        }
      </div>
    </div>
    
  );
}

export default Home;