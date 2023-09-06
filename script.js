function moveRandomly() {
    const div = document.getElementById('random-div');
    
    const maxWidth = window.innerWidth - div.clientWidth; // Largura máxima da tela
    const maxHeight = window.innerHeight - div.clientHeight; // Altura máxima da tela
  
    // Gere coordenadas aleatórias dentro dos limites da tela
    const randomLeft = Math.floor(Math.random() * maxWidth);
    const randomTop = Math.floor(Math.random() * maxHeight);
  
    // Aplique as coordenadas à div
    div.style.left = randomLeft + 'px';
    div.style.top = randomTop + 'px';
  }
  