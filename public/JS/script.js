document.addEventListener("DOMContentLoaded", () => {
    const formulario = document.getElementById("formularioProducto");
    const productosPublicados = document.getElementById("productosPublicados");
  
    // Productos iniciales
    const productosIniciales = [
      { nombre: "Funko Pop x2", imagen: "https://img.freepik.com/foto-gratis/dos-figuras-cosplay-sovietico-star-wars-ultima-cena_1057-45700.jpg?t=st=1736659146~exp=1736662746~hmac=596ace3640059ed2d6ea4ed05e47748e27f0d97924a8782d5cd0ddd72b30cde3&w=740", precio: 25 },
      { nombre: "Consola Nintendo Retro", imagen: "https://img.freepik.com/foto-gratis/vista-consola-juegos-antigua-tonos-cascara-nuez_23-2151208181.jpg?t=st=1736658307~exp=1736661907~hmac=1122b5765783c3765b2478bf8190864685609c97e216de9c65401685c3c2f6d6&w=1380", precio: 50 },
      { nombre: "Teclado Mecánico Retro", imagen: "https://img.freepik.com/foto-gratis/teclado-vieja-maquina-escribir-fondo-blanco-3d_1057-44909.jpg?t=st=1736658869~exp=1736662469~hmac=9801bebd3bd52c634d5467b2e3b878c5ae63332a83e7136a8d26592f6402c076&w=740", precio: 75 },
      { nombre: "Figura de Acción", imagen: "https://img.freepik.com/foto-gratis/renderizado-3d-astronauta_23-2151278955.jpg?t=st=1736658758~exp=1736662358~hmac=6402bb49a9764ca7b74071f212d20df5a024192272c5667b4a09b6c82c116e31&w=1380", precio: 30 },
      { nombre: "Cómic Edición Especial", imagen: "https://img.freepik.com/fotos-premium/raro-comic-buen-estado-portada-vibrante-sellada-plastico_1079150-310615.jpg?w=996", precio: 20 },
      { nombre: "Camiseta Vintage Gaming", imagen: "https://img.freepik.com/fotos-premium/diseno-camiseta-mandala_1291761-1433.jpg?w=740", precio: 18 },
      { nombre: "Póster Gamer", imagen: "https://img.freepik.com/vector-gratis/cartel-juegos-retro-dibujado-mano_52683-139137.jpg?t=st=1736660351~exp=1736663951~hmac=f6ca7f22082255d8e67e7b811c4c617c7b657ed45144e9d64b1f6096e3f32d26&w=740", precio: 12 },
      { nombre: "Lote de juegos de mesa", imagen: "https://img.freepik.com/foto-gratis/escena-realista-venta-patio-vecindario-articulos-diversos_23-2151238331.jpg?t=st=1736659268~exp=1736662868~hmac=62eb3e51d00458fcaae005711d3a68a558aa49490814932213fe25b1bb6650f2&w=1380", precio: 45 },
      { nombre: "Taza Gamer Deluxe", imagen: "https://img.freepik.com/fotos-premium/hay-copa-brillante-mensaje-digital-ella_1035450-18477.jpg?w=740", precio: 15 },
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
  