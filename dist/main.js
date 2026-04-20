// src/main.ts
import { series } from "./data.js";
const seriesTable = document.getElementById("series-table");
const averageElm = document.getElementById("average-seasons");
function renderSeries() {
    let totalSeasons = 0;
    let html = "";
    series.forEach(s => {
        html += `<tr>
      <td>${s.id}</td>
      <td><a href="${s.link}" target="_blank">${s.name}</a></td>
      <td>${s.channel}</td>
      <td>${s.seasons}</td>
    </tr>`;
        totalSeasons += s.seasons;
    });
    seriesTable.innerHTML = html;
    const average = totalSeasons / series.length;
    averageElm.innerHTML = `<p><b>Seasons average:</b> ${average.toFixed(2)}</p>`;
}
renderSeries();
