const btnContacto = document.getElementById("btnContacto");
const btnCV = document.getElementById("btnCV");
const mensaje = document.getElementById("mensaje");

btnContacto.addEventListener("click", () => {
 mensaje.innerHTML = "📧 nicolasmora0717@gmail.com<br> 📞+57 319 713 4014";

});

btnCV.addEventListener("click", () => {
  const enlace = document.createElement("a");
  enlace.href = "XDDDDDD.webp";
  enlace.download = "XDXDDXXXXXDXDDXDXD pene riquisimo.webp";
  enlace.click();
});