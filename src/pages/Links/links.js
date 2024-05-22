import React, { useState, useEffect } from "react";
import "./links.css";
import { FiLink, FiArrowLeft, FiTrash } from "react-icons/fi";
import { Link } from "react-router-dom";
import LinkItem from "../../componetes/LinkIntem/link";
import { getLinksSave, deleteLink } from "../../services/storeLinks";

export default function Links() {
  const [myLinks, setMyLinks] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [emptyList, setEmptyList] = useState(false);
  const [data, setData] = useState({});

  useEffect(() => {
    async function getLinks() {
      const result = await getLinksSave("@encutaLink");

      setEmptyList(result.length === 0);
      setMyLinks(result);
    }

    getLinks();
  }, []);

  function handleOpenLink(link) {
    setData(link);
    setShowModal(true);
  }

  async function handleDelete(id) {
    const updatedLinks = myLinks.filter((link) => link.id !== id);
    setEmptyList(updatedLinks.length === 0);
    setMyLinks(updatedLinks);
    await deleteLink(myLinks, id); // Corrigido o parâmetro passado para a função deleteLink
  }

  return (
    <div className="links-container">
      <div className="link-header">
        <Link to="/">
          <FiArrowLeft size={38} color="#fff" />
        </Link>
        <h1>Meus Links</h1>
      </div>

      {emptyList && (
        <div className="links-container">
          <img className="empty-icon"
            src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Telegram-Animated-Emojis/main/People/Eyes.webp"
            alt="Eyes"
            width="80"
            height="80"
          />
          <h2 className="empty-text">Sua lista está vazia...</h2>
        </div>
      )}

      {myLinks.map((link) => (
        <div key={link.id} className="links-item">
          <button className="link" onClick={() => handleOpenLink(link)}>
            <FiLink size={18} color="#fff" />
            {link.long_url}
          </button>

          <button className="link-delete" onClick={() => handleDelete(link.id)}>
            <FiTrash size={24} color="#ff5454" />
          </button>
        </div>
      ))}

      {showModal && (
        <LinkItem closeModal={() => setShowModal(false)} content={data} />
      )}
    </div>
  );
}
