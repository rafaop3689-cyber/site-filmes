const apiKey = "SUA_API_KEY_AQUI";

function searchMovie() {
  const query = document.getElementById("search").value;
  const url = `https://api.themoviedb.org/3/search/multi?api_key=${apiKey}&language=pt-PT&query=${query}`;

  fetch(url)
    .then(res => res.json())
    .then(data => {
      const results = document.getElementById("results");
      results.innerHTML = "";

      data.results.forEach(item => {
        if (item.media_type === "movie" || item.media_type === "tv") {
          results.innerHTML += `
            <div class="movie">
              <h3>${item.title || item.name}</h3>
              <p>Ano: ${(item.release_date || item.first_air_date || "").slice(0,4)}</p>
              <p>Nota: ⭐ ${item.vote_average}</p>
            </div>
          `;
        }
      });
    });
}
