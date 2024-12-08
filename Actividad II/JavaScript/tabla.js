if (window.location.pathname.includes("tabla.html")) {
    const tabla = document.getElementById("tablaDatos");

    if (usuariosGuardados.size > 0) {
      usuariosGuardados.forEach((datos, id) => {
        const fila = `
          <tr>
            <td>${id}</td>
            <td>${datos.cedula}</td>
            <td>${datos.nombre}</td>
            <td>${datos.fecha}</td>
            <td>${datos.ciudad}</td>
          </tr>
        `;
        tabla.innerHTML += fila;
      });
    } else {
      alert("No hay datos registrados.");
    }
  }
