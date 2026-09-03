const products=[
 {name:"Set Don't Be Jelly",category:"maquillaje",image:"set-dont-be-jelly.jpg",description:"Set de tintes para labios y mejillas en tonos alegres."},
 {name:"Set de maquillaje Sweet",category:"maquillaje",image:"set-sweet.jpg",description:"Set con sombras, labial y delineador en un diseño adorable."},
 {name:"Acondicionador Candy",category:"capilar",image:"acondicionador-candy.jpg",description:"Acondicionador hidratante para complementar tu rutina capilar."},
 {name:"Gloss Shine Bomb",category:"maquillaje",image:"gloss-shine-bomb.jpg",description:"Brillo labial intenso con una sensación ligera."},
 {name:"Pincel de precisión",category:"maquillaje",image:"pincel-labial.jpg",description:"Pincel práctico para aplicar productos con mayor precisión."},
 {name:"Tónico Hyaluron Shot",category:"skincare",image:"tonico-hyaluron.jpg",description:"Tónico facial hidratante que refresca y equilibra la piel."},
 {name:"Rubor líquido coral",category:"maquillaje",image:"rubor-liquido.jpg",description:"Rubor líquido Beauty Creations para un efecto fresco y natural."},
 {name:"Protector solar Peach SPF 50+",category:"skincare",image:"protector-solar.jpg",description:"Protector solar facial con color y alta protección UV."},
 {name:"Espuma limpiadora Skin Soft",category:"skincare",image:"espuma-limpiadora.jpg",description:"Espuma de limpieza facial con extracto de centella asiática."},
 {name:"Crema hidratante Skin Soft",category:"skincare",image:"crema-hidratante.jpg",description:"Crema de hidratación profunda para el cuidado facial diario."},
 {name:"Paleta Dolce Bella 3 tonos",category:"maquillaje",image:"paleta-tres-tonos.jpg",description:"Paleta compacta y práctica con tres tonos y aplicador."},
 {name:"Crema facial de centella",category:"skincare",image:"crema-facial-centella.jpg",description:"Crema facial nutritiva con extracto de centella asiática."},
 {name:"Labial llavero Glitter",category:"maquillaje",image:"labial-llavero-rosa.jpg",description:"Labial tipo mousse con llavero y accesorio de pulsera."},
 {name:"Brillo labial llavero de osito",category:"maquillaje",image:"brillo-llavero-oso.jpg",description:"Brillo labial con un adorable llavero de osito."},
 {name:"Set de maquillaje Meow",category:"maquillaje",image:"set-meow.jpg",description:"Set gatito con iluminador, rubor y aceite labial."},
 {name:"Paleta de maquillaje Quesito",category:"maquillaje",image:"paleta-quesito.jpg",description:"Mini set de maquillaje completo, adorable y fácil de llevar."}
];
const grid=document.querySelector("#productGrid"),search=document.querySelector("#search"),empty=document.querySelector("#empty");let filter="todos";
function render(){const q=search.value.toLowerCase().trim();const visible=products.filter(p=>(filter==="todos"||p.category===filter)&&(`${p.name} ${p.description}`.toLowerCase().includes(q)));grid.innerHTML=visible.map(p=>`<article class="product"><div class="product-image"><img src="imagenes/${p.image}" alt="${p.name}" loading="lazy"><span class="tag">${p.category}</span></div><div class="product-info"><h3>${p.name}</h3><p>${p.description}</p><div class="product-bottom"><span class="price">Precio a consultar</span><a class="ask" target="_blank" rel="noopener" href="https://wa.me/56953911282?text=${encodeURIComponent(`Hola Vieva Store, quisiera consultar por ${p.name}`)}">Consultar</a></div></div></article>`).join("");empty.hidden=visible.length!==0}
document.querySelectorAll("[data-filter]").forEach(btn=>btn.addEventListener("click",()=>{document.querySelector("[data-filter].active").classList.remove("active");btn.classList.add("active");filter=btn.dataset.filter;render()}));search.addEventListener("input",render);document.querySelector(".menu").addEventListener("click",e=>{const links=document.querySelector(".links");links.classList.toggle("open");e.currentTarget.setAttribute("aria-expanded",links.classList.contains("open"))});document.querySelectorAll(".links a").forEach(a=>a.addEventListener("click",()=>document.querySelector(".links").classList.remove("open")));document.querySelector("#year").textContent=new Date().getFullYear();render();
