// src/main.ts
import { series } from "./data.js";

const seriesTable: HTMLElement = document.getElementById("series-table")!;
const averageElm: HTMLElement = document.getElementById("average-seasons")!;

function renderSeries(): void {
  let totalSeasons: number = 0;
  let html: string = "";

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

  const average: number = totalSeasons / series.length;
  averageElm.innerHTML = `<p><b>Seasons average:</b> ${average.toFixed(2)}</p>`;
}

renderSeries();
