const funx_elementos_arrastaveis = document.querySelectorAll('.funx_bloco_carga');
const funx_container_bau = document.getElementById('funx_bau_caminhao');
const funx_container_origem = document.getElementById('funx_area_origem');
const funx_btn_limpar = document.getElementById('funx_btn_limpar');
const funx_btn_whatsapp = document.getElementById('funx_btn_whatsapp');

funx_elementos_arrastaveis.forEach(funx_item => {
    funx_item.addEventListener('click', (funx_evento) => {
        const funx_bloco_clicado = funx_evento.target;
        
        if (funx_bloco_clicado.parentElement.id === 'funx_area_origem') {
            const funx_espaco_livre = funx_container_bau.querySelector('div[style*="flex-grow"]');
            funx_container_bau.insertBefore(funx_bloco_clicado, funx_espaco_livre);
        } else {
            funx_container_origem.appendChild(funx_bloco_clicado);
        }
    });
});

funx_btn_limpar.addEventListener('click', () => {
    const funx_todos_blocos = document.querySelectorAll('.funx_bloco_carga');
    funx_todos_blocos.forEach(funx_bloco => {
        funx_container_origem.appendChild(funx_bloco);
    });
});

funx_btn_whatsapp.addEventListener('click', () => {
    const funx_blocos_no_caminhao = funx_container_bau.querySelectorAll('.funx_bloco_carga');
    
    if (funx_blocos_no_caminhao.length === 0) {
        alert('O caminhão está vazio! Adicione as lojas antes de enviar.');
        return;
    }

    let funx_mensagem = "🚚 *Layout de Carga* 🚚\n\n";
    funx_mensagem += "*(Fundo do Caminhão)*\n";
    
    funx_blocos_no_caminhao.forEach((funx_bloco, funx_index) => {
        funx_mensagem += `${funx_index + 1}º - ${funx_bloco.innerText}\n`;
    });
    
    funx_mensagem += "*(Porta do Baú)*\n\n";
    funx_mensagem += "Atenção: A primeira loja a ser descarregada deve ser a última da lista (Porta do Baú).";

    const funx_numero_whatsapp = "5519996139304";
    const funx_url = `https://wa.me/${funx_numero_whatsapp}?text=${encodeURIComponent(funx_mensagem)}`;
    
    window.open(funx_url, '_blank');
});