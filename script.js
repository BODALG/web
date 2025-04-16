// Espera que cargue todo el DOM
document.addEventListener("DOMContentLoaded", () => {
    const tarjeta = document.getElementById("tarjeta-invitacion");
    const novios = document.querySelector(".imagen-novios");
    const anillos = document.querySelector(".imagen-anillos");
  
    // Aparece la tarjeta principal
    tarjeta.classList.add("mostrar");
  
    // Animación de la imagen de los novios
    setTimeout(() => {
      novios.classList.add("animar-novios");
    }, 500);
  
    // Animación de la imagen de las argollas
    setTimeout(() => {
      anillos.classList.add("animar-anillos");
    }, 1000);
  });
  