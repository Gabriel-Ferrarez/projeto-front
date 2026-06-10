// URL da API publicada no Render.
// >>> AJUSTE para a sua URL após publicar o back-end no Render.
const API_URL = "https://projeto-back.onrender.com"

async function chamarAPI() {
  const el = document.getElementById("resposta")
  el.textContent = "Chamando a API..."

  try {
    const resposta = await fetch(`${API_URL}/v1`)
    const dados = await resposta.json()
    el.textContent = `${dados.message} chamada em ${dados.chamada_em}`
  } catch (erro) {
    el.textContent = "Erro ao chamar a API: " + erro.message
  }
}

// Chama a API automaticamente ao abrir a página.
window.addEventListener("DOMContentLoaded", chamarAPI)
