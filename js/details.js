import { BASE_URL, ACCESS_TOKEN } from "./config.js";
const container = document.getElementById("detailsContainer");
const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");
const type = urlParams.get("type");
async function fetchDetails() {
  const res = await fetch(`${BASE_URL}/${type}/${id}`, {
    headers: { Authorization: `Bearer ${ACCESS_TOKEN}`, accept: "application/json" }
  });
  const data = await res.json();
  renderDetails(data);
}
function renderDetails(item) {
  container.innerHTML = `
    <div class="card">
      <img src="https://image.tmdb.org/t/p/w500${item.poster_path}" class="card-img-top" alt="${item.title}">
      <div class="card-body">
        <h3 class="card-title">${item.title}</h3>
        <p class="card-text">${item.overview}</p>
        <span class="badge bg-primary">Rating: ${item.vote_average}</span>
      </div>
    </div>`;
}
fetchDetails();