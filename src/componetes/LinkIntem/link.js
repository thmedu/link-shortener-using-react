import React from "react";
import "./link-item.css";
import { FiX, FiClipboard } from "react-icons/fi";
import { Link } from "react-router-dom";

async function copyLink(link) {
  try {
    await navigator.clipboard.writeText(link);
    alert("Link copiado com sucesso: " + link);
  } catch (error) {
    console.error("Erro ao copiar o link:", error);
    alert("Erro ao copiar o link. Por favor, tente novamente.");
  }
}

export default function LinkItem({ closeModal, content }) {
  return (
    <div className="modal-container">
      <div className="modal-header">
        <h2>Link Encurtado</h2>
        <button onClick={closeModal}>
          <FiX size={28} color="#954A5A" />
        </button>
      </div>
      <span>{content.long_url}</span> {/* Corrigido para long_url */}
      
      <button className="modal-link" onClick={() => copyLink(content.link)}>
        {content.link}
        <FiClipboard size={20} color="#fff" />
      </button>
    </div>
  );
}
