import './Navbar.css';
import paleta from "public/assets/paleta.svg";
import sacola from "assets/icons/sacola.svg";
import atualizar from "public/assets/atualizar.svg";
import logo from "assets/logo.svg";

function Navbar({ createPaleta, updatePaleta }) {
  return (
    <div className="Header">
      <div className="row">
        <div className="Header__logo Logo">
          <img
            src={logo}
            width="70px"
            alt="Logo El Geladon"
            className="Logo__icone"
          />
          <span className="Logo__titulo"> El Geladon </span>
        </div>
        <div className="Header__opcoes Opcoes">
        <button
            type="button"
            className="Opcoes__paleta Paleta"
            onClick={() => updatePaleta()}
          >
            <img
              src={atualizar}
              width="40px"
              className="Paleta__icone"
              alt="Editar paleta"
            />
          </button>
          <button
            type="button"
            className="Opcoes__paleta Paleta"
            onClick={() => createPaleta()}
          >
            <img
              src={paleta}
              width="40px"
              className="Paleta__icone"
              alt="Adiconar paleta"
            />
          </button>

          <div className="Opcoes__sacola Sacola">
            <img
              src={sacola}
              width="40px"
              className="Sacola__icone"
              alt="Sacola de compras"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
