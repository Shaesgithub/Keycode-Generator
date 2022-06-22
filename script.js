const insertKey = document.getElementById("insertKey");


window.addEventListener("keydown", (e) => {
  console.log(e);
  const {code,key,which} = e;

  insertKey.innerHTML = `
  <div class="afterkey">${code} <p>event.code</p></div>
  <div class="afterkey">${e.key === " " ? "space" : key} <p>event.key</p></div>
  <div class="afterkey">${which} <p>event.which</p></div>
  `;
});