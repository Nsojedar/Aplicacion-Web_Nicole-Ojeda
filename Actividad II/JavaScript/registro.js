const usuarios = new Map();

document.getElementById("btnRegistrar")?.addEventListener("click", () => {
  const id = document.getElementById("id").value;
  const cedula = document.getElementById("cedula").value;
  const nombre = document.getElementById("nombre").value;
  const fecha = document.getElementById("fecha").value;
  const ciudad = document.getElementById("ciudad").value;

  if (id && cedula && nombre && fecha && ciudad) {
    usuarios.set(id, { cedula, nombre, fecha, ciudad });

    window.location.href = "tabla.html"; 
  } else {
    alert("Por favor, complete todos los campos.");
  }
});
