document.title = "NOT LIVE — " + document.title;

const el = document.createElement("span");

el.innerHTML = "NOT LIVE";
el.id = "env-label";
el.style.color = "deepskyblue";

document.body.appendChild(el);
