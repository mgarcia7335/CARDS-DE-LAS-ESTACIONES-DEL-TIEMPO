const cardsData = [
    { title: "Verano", text: "Todo Verano tiene su historia.", imgSrc: "https://saberimagenes.com/wp-content/uploads/2016/12/veranopaisaje3.jpg" },
    { title: "Otoño", text: "Mi color favorito es el Otoño.", imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSZDGz3_v9c9UQTkNq7NeqRuC4t8cCyIeZew&s" },
    { title: "Invierno", text: "Que el Frío no sea un obstáculo para que tengas un hermoso día.", imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQknhuI596-j8QrP4bG9wj3oPW7dzhiVH80ZQ&s " },
    { title: "Primavera", text: "La Primavera le brinda un espiritu de juventud a todo.", imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBCOLYrl2etLufDGn8CgXfcykEfkXCmeb66A&s" },
    { title: "Todas Juntas", text: "Ama las cuatro Estaciones.", imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_svPvUJH6Wi7sPXclFazmmnyJ4ks2EQI0Rw&s" }
];



// Selecciona el contenedor donde se insertarán las tarjetas
const container = document.querySelector('#cards-container');
        
       
// Función para crear y añadir tarjetas al DOM
function createCards(cards) {
    cards.forEach(card => {
      // Añade el contenido a la tarjeta
      // Crea el elemento de la tarjeta
      const cardElement = document.createElement('div');
      cardElement.classList.add('card');

      // Añade la tarjeta al contenedor / DOM
      cardElement.innerHTML = `
      <img src="${card.imgSrc}" alt="${card.title}">
      <h3 class="card-title">${card.title}</h3>
      <p class="card-text">${card.text}</p>
      `;

      // Llama a la función para crear las tarjetas
      container.appendChild(cardElement);
    });
}
createCards(cardsData);






    