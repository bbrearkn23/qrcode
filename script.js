const SHEETDB_URL = 'https://sheetdb.io/api/v1/he394hvfqaoqb';
let sites = [];

async function carregarSites() {
  try {
    const resposta = await fetch(SHEETDB_URL);
    sites = await resposta.json();

    const siteSelector = document.getElementById('siteSelector');
    siteSelector.innerHTML = '<option value="">Escolha um site</option>';

    sites.forEach(site => {
      const option = document.createElement('option');
      option.value = site.url;
      option.textContent = site.nome || `Site ${site.id}`;
      siteSelector.appendChild(option);
    });
  } catch (erro) {
    alert('Erro ao carregar os sites. Verifique a conexão com a planilha.');
    console.error(erro);
  }
}

function gerarQRCode() {
  const siteUrl = document.getElementById('siteSelector').value;

  if (!siteUrl) {
    alert("Por favor, selecione um site!");
    return;
  }

  const qrCodesDiv = document.getElementById('qrCodes');
  qrCodesDiv.innerHTML = '';

  const img = document.createElement('img');
  img.classList.add('qrCode');
  img.src = `https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=${encodeURIComponent(siteUrl)}`;
  qrCodesDiv.appendChild(img);
}

window.onload = carregarSites;
