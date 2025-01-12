document.addEventListener("DOMContentLoaded", () => {
    const formulario = document.getElementById("formularioProducto");
    const productosPublicados = document.getElementById("productosPublicados");
  
    // Productos iniciales
    const productosIniciales = [
      { nombre: "Funko Pop", imagen: "https://picsum.photos/150?random=1", precio: 25 },
      { nombre: "Mouse RGB", imagen: "https://picsum.photos/150?random=2", precio: 50 },
      { nombre: "Teclado Mecánico", imagen: "https://picsum.photos/150?random=3", precio: 75 },
      { nombre: "Figura de Acción", imagen: "https://picsum.photos/150?random=4", precio: 30 },
      { nombre: "Cómic Edición Especial", imagen: "https://picsum.photos/150?random=5", precio: 20 },
      { nombre: "Camiseta Geek", imagen: "https://picsum.photos/150?random=6", precio: 18 },
      { nombre: "Póster Decorativo", imagen: "https://picsum.photos/150?random=7", precio: 12 },
      { nombre: "Juego de Mesa", imagen: "https://picsum.photos/150?random=8", precio: 45 },
      { nombre: "Taza Personalizada", imagen: "https://picsum.photos/150?random=9", precio: 15 },
    ];
  
    // Función para cargar productos en el DOM
    const cargarProductos = () => {
      productosPublicados.innerHTML = "";
      productosIniciales.forEach((producto, index) => {
        const card = document.createElement("div");
        card.className = "card";
        card.innerHTML = `
          <img src="${producto.imagen}" alt="${producto.nombre}">
          <h3>${producto.nombre}</h3>
          <p class="price">$${producto.precio}</p>
          <button data-index="${index}" class="eliminarProducto">Eliminar</button>
        `;
        productosPublicados.appendChild(card);
      });
    };
  
    // Cargar productos iniciales al inicio
    cargarProductos();
  
    // Agregar producto nuevo
    document.getElementById("publicarProducto").addEventListener("click", () => {
      const nombre = formulario.nombreProducto.value;
      const imagen = formulario.imagenProducto.value;
      const precio = formulario.precioProducto.value;
  
      if (nombre && imagen && precio) {
        productosIniciales.push({ nombre, imagen, precio });
        cargarProductos();
        formulario.reset();
      } else {
        alert("Por favor completa todos los campos.");
      }
    });
  
    // Eliminar producto
    productosPublicados.addEventListener("click", (e) => {
      if (e.target.classList.contains("eliminarProducto")) {
        const index = e.target.getAttribute("data-index");
        productosIniciales.splice(index, 1);
        cargarProductos();
      }
    });
  });
  