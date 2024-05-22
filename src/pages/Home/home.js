import { useState } from "react";
import { FiLink } from "react-icons/fi";
import "./home.css";
import { FiCode } from "react-icons/fi";


import Menu from "../../../src/componetes/Menu/menu";
import LinkItem from "./../../componetes/LinkIntem/link"; // Corrigido o nome do componente
import api from "../../../src/services/api";
import { saveLink } from "../../services/storeLinks";

export default function Home() {
  const [link, setLink] = useState("");
  const [data, setData] = useState({});

  const [showModal, setShowModal] = useState(false);

  async function handleShortLink() {
    try {
      const response = await api.post("/shorten", {
        long_url: link,
      });
      setData(response.data);
      setShowModal(true);
      saveLink("@encutaLink", response.data);
      setLink("");
    } catch {
      alert("Ops parece que tem algo errdo! ");
      setLink("");
    }
  }

  return (
    <div className="container-home">
      <div className="logo">
        <img src="/logo.png" alt="logo" />
        <h1> Encurtador de Links </h1>
        <span>
          Por favor, insira seus links para que possam ser encurtados.
        </span>
        <img
          src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Telegram-Animated-Emojis/main/People/Backhand%20Index%20Pointing%20Down.webp"
          alt="Backhand Index Pointing Down"
          className="icon"
        />
      </div>

      <div className="area-input">
        <div>
          <FiLink size={24} color="#fff" />
          <input
            placeholder="Cole o seu link aqui..."
            value={link}
            onChange={(e) => setLink(e.target.value)}
          />
        </div>
        <button onClick={handleShortLink}>Gerar Link</button>
      </div>
      <Menu />

      {showModal && (
        <LinkItem closeModal={() => setShowModal(false)} content={data} />
      )}

      <div className="developed-by">
        <FiCode /> Desenvolvido por Thomas
      </div>
    </div>
  );
}
