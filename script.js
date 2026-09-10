const products = [
  {
    name: "Beauty Creations – Don't Be Jelly Lip Set",
    price: "$15.990",
    cat: "maquillaje",
    img: "jelly.jpg"
  },
  {
    name: "Kevin & Coco – Set Carol Sweet",
    price: "$6.990",
    cat: "maquillaje",
    img: "set-sweet.jpg"
  },
  {
    name: "Misucka – Acondicionador Fruit Candy",
    price: "$6.500",
    cat: "skincare",
    img: "acondicionador-candy.jpg"
  },
  {
    name: "Catrice – Shine Bomb Lip Lacquer",
    price: "$7.500",
    cat: "maquillaje",
    img: "bomba-brillo.jpg"
  },
  {
    name: "Dolce Bella – Pincel para Labios",
    price: "$1.800",
    cat: "accesorios",
    img: "pincel-labial.jpg"
  },
  {
    name: "AMPLEN – Tónico Facial Ácido Hialurónico",
    price: "$21.500",
    cat: "skincare",
    img: "tonico-hialuron.jpg"
  },
  {
    name: "Beauty Creations – Liquid Blush OK Coral",
    price: "$10.900",
    cat: "maquillaje",
    img: "rubor.jpg"
  },
  {
    name: "AMPLEN – Protector Solar SPF50+",
    price: "$21.000",
    cat: "skincare",
    img: "protector-solar.jpg"
  },
  {
    name: "Misucka – Espuma Limpiadora Facial",
    price: "$6.500",
    cat: "skincare",
    img: "espuma-limpiadora.jpg"
  },
  {
    name: "Misucka – Crema Hidratante",
    price: "$6.500",
    cat: "skincare",
    img: "crema-hidratante.jpg"
  },
  {
    name: "Dolce Bella – Paleta de Tres Tonos",
    price: "$3.500",
    cat: "maquillaje",
    img: "paleta-tres-tonos.jpg"
  },
  {
    name: "Crema Facial Centella",
    price: "$6.500",
    cat: "skincare",
    img: "crema-facial-centella.jpg"
  },
  {
    name: "Brillo Llavero Osito",
    price: "$4.500",
    cat: "maquillaje",
    img: "brillo-llavero-oso.jpg"
  },
  {
    name: "Labial Llavero Rosa",
    price: "$4.500",
    cat: "maquillaje",
    img: "labial-llavero-rosa.jpg"
  },
  {
    name: "Paleta Quesito",
    price: "$3.500",
    cat: "maquillaje",
    img: "paleta-quesito.jpg"
  },
  {
    name: "Kevin & Coco – Set Meow",
    price: "$6.990",
    cat: "maquillaje",
    img: "set-meow.jpg"
  }
];

const labels = {
  maquillaje: "Maquillaje",
  skincare: "Skincare",
  accesorios: "Accesorios"
};

document.addEventListener("DOMContentLoaded", function () {
  const grid = document.getElementById("product-grid");
  const menu = document.querySelector(".menu-button");
  const nav = document.querySelector(".nav");

  if (!grid) {
    console.error("No se encontró product-grid");
    return;
  }

  function renderProducts(filter = "todos") {
    const filteredProducts =
      filter === "todos"
        ? products
        : products.filter(function (product) {
            return product.cat === filter;
          });

    grid.innerHTML = filteredProducts
      .map(function (product) {
        const imagePath = encodeURI("/Vieva-Store/imagenes/" + product.img);
        const message = encodeURIComponent(
          "Hola Vieva Store, quisiera consultar por: " + product.name
        );

        return `
          <article class="product-card">
            <div class="product-image">
              <img
                src="${imagePath}"
                alt="${product.name}"
                loading="lazy"
              >
            </div>

            <div class="product-info">
              <span class="category">
                ${labels[product.cat]}
              </span>

              <h3>${product.name}</h3>

              <span class="price">
                ${product.price}
              </span>

              <a
                class="ask"
                href="https://wa.me/56953911282?text=${message}"
                target="_blank"
                rel="noopener"
              >
                Consultar por WhatsApp
              </a>
            </div>
          </article>
        `;
      })
      .join("");
  }

  document.querySelectorAll(".filter").forEach(function (button) {
    button.addEventListener("click", function () {
      const activeButton = document.querySelector(".filter.active");

      if (activeButton) {
        activeButton.classList.remove("active");
      }

      button.classList.add("active");
      renderProducts(button.dataset.filter);
    });
  });

  if (menu && nav) {
    menu.addEventListener("click", function () {
      nav.classList.toggle("open");

      menu.setAttribute(
        "aria-expanded",
        String(nav.classList.contains("open"))
      );
    });

    nav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        nav.classList.remove("open");
      });
    });
  }

  renderProducts();
});
/* Corrección del banner en celulares */
@media (max-width: 760px) {
  .hero {
    min-height: 0;
    padding: 0 0 28px;
    overflow: visible;
    background: #fff3f7;
  }

  .hero-banner {
    position: relative;
    inset: auto;
    display: block;
    width: 100%;
    height: auto;
    aspect-ratio: 1860 / 846;
    object-fit: contain;
    object-position: center;
  }

  .hero-copy {
    position: relative;
    left: auto;
    right: auto;
    bottom: auto;
    width: auto;
    max-width: none;
    margin: 16px 16px 0;
    padding: 22px;
  }

  .hero h1 {
    font-size: clamp(2rem, 10vw, 2.8rem);
    line-height: 1.05;
  }

  .hero-actions {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 10px;
  }

  .hero-actions .button {
    width: 100%;
    padding: 13px 10px;
    text-align: center;
  }

  .whatsapp-float {
    right: 14px;
    bottom: 14px;
    width: 52px;
    height: 52px;
  }
}

@media (max-width: 390px) {
  .hero-actions {
    grid-template-columns: 1fr;
  }
}
