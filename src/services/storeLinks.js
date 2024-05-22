// Buscar os links salvos
export async function getLinksSave(key) {
    try {
      const myLinks = await localStorage.getItem(key);
      return JSON.parse(myLinks) || [];
    } catch (error) {
      console.error("Erro ao buscar links salvos:", error);
      return [];
    }
  }
  
  // Salvar um link no localStorage
  export async function saveLink(key, newLink) {
    try {
      let linkStored = await getLinksSave(key);
  
      const hasLink = linkStored.some((link) => link.id === newLink.id);
  
      if (hasLink) {
        console.log("Esse link já existe");
        return;
      }
  
      linkStored.push(newLink);
      await localStorage.setItem(key, JSON.stringify(linkStored));
      console.log("Link salvo com sucesso");
    } catch (error) {
      console.error("Erro ao salvar link:", error);
    }
  }
  
  // Deletar um link do localStorage
  export function deleteLink(links, id) {
    try {
      let myLinks = links.filter((item) => item.id !== id);
  
      localStorage.setItem("@encurtarLink", JSON.stringify(myLinks));
      console.log("Link deletado com Sucesso!");
  
      return myLinks;
    } catch (error) {
      console.error("Erro ao deletar link:", error);
      return links; // Retorna a lista original em caso de erro
    }
  }
  