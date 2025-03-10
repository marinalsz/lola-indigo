import "./Videos.css";
import { iterator } from "../../utils/iterator.js";
import data from "../../data/data.js";

const { video_links } = data;

export const Videos = () => {
  const main = document.querySelector("main");
  main.innerHTML = `
    <section class="videos">
        <h2>Vídeos</h2>
        <section class="video-container">
          ${iterator(video_links, "video")}
        </section>
    </section>`;
};
