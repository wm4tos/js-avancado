let campos = [
  document.querySelector("#data"),
  document.querySelector("#quantidade"),
  document.querySelector("#valor")
];
let tbody = document.querySelector("tbody");

console.log(campos);

document.querySelector(".form").addEventListener("submit", (event) => {
  event.preventDefault();

  let tr = document.createElement("tr");

  campos.forEach((campo) => {
    let td = document.createElement("td");
    td.textContent = campo.value;
    tr.appendChild(td);
  });
  let tdVolume = document.createElement("td");
  tdVolume.textContent = campos[1].value * campos[2].value;

  tr.appendChild(tdVolume);
  tbody.appendChild(tr);

  campos[0].value = "";
  campos[1].value = 1;
  campos[2].value = 0;

  campos[0].focus();  

})