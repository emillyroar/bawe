document.getElementById("trackingForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    // Obter o número de rastreio inserido pelo usuário
    const trackingNumber = document.getElementById("trackingNumber").value.trim();
  
    // Validar o número de rastreio (Ex: AB123456789BR)
    if (!/^[A-Za-z]{2}\d{9}[A-Za-z]{2}$/.test(trackingNumber)) {
      alert("Por favor, insira um número de rastreio válido.");
      return;
    }
  
    // Exibir o carregamento
    document.getElementById("trackingResult").classList.add("hidden");
  
    // Simular uma consulta ao API de rastreamento (Aqui vamos simular com dados fictícios)
    setTimeout(() => {
      // Simulação de resposta de rastreio
      const trackingData = simulateTrackingData(trackingNumber);
  
      // Exibir os resultados
      displayTrackingInfo(trackingData);
    }, 1000); // Simula o tempo de espera do servidor (1 segundo)
  });
  
  // Função para simular a resposta de rastreio
  function simulateTrackingData(trackingNumber) {
    return {
      status: "Entregue",
      events: [
        {
          date: "13/11/2024 16:00",
          location: "Brasília - DF",
          description: "Objeto entregue ao destinatário"
        },
        {
          date: "13/11/2024 14:30",
          location: "Brasília - DF",
          description: "Objeto saiu para entrega"
        },
        {
          date: "11/11/2024 08:15",
          location: "Curitiba - PR",
          description: "Objeto coletado"
        }
      ]
    };
  }
  
  // Função para exibir as informações de rastreio
  function displayTrackingInfo(data) {
    // Mostrar a área de resultados
    document.getElementById("trackingResult").classList.remove("hidden");
  
    // Atualizar o status
    document.getElementById("status").innerText = `Status: ${data.status}`;
  
    // Mostrar os eventos
    const detailsContainer = document.getElementById("details");
    detailsContainer.innerHTML = ""; // Limpar resultados antigos
  
    data.events.forEach(event => {
      const eventDiv = document.createElement("div");
      eventDiv.classList.add("event");
      
      const eventHTML = `
        <p><strong>Data:</strong> ${event.date}</p>
        <p><strong>Local:</strong> ${event.location}</p>
        <p><strong>Descrição:</strong> ${event.description}</p>
        <hr>
      `;
      eventDiv.innerHTML = eventHTML;
      detailsContainer.appendChild(eventDiv);
    });
  }
  