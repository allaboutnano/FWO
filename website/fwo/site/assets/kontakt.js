// Setzt die E-Mail-Adresse erst im Browser zusammen, damit sie nicht im HTML steht.
// Einzutragen in data-mail-name (Teil vor dem @) und data-mail-domain (Teil danach).
document.querySelectorAll("[data-mail-name]").forEach(function (el) {
  var name = el.getAttribute("data-mail-name");
  var domain = el.getAttribute("data-mail-domain");
  if (!name || !domain || name.indexOf("{{") > -1 || domain.indexOf("{{") > -1) return;
  var adresse = name + "@" + domain;
  var link = document.createElement("a");
  link.href = "mai" + "lto:" + adresse;
  link.textContent = adresse;
  el.textContent = "";
  el.appendChild(link);
});
