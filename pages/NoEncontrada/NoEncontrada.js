import "./NoEncontrada.css";

export const NoEncontrada = () => {
  const main = document.querySelector("main");
  main.innerHTML = `
    <section class="no-encontrada">
        <h2>Error 404</h2>
        <p>La página que buscas no existe</p>
        <a href="/tienda" class="btn primary">Seguir comprando</a>
    </section>`;
};
