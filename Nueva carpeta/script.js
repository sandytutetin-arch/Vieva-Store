const products=[
 {name:"Beauty Creations – Don't Be Jelly Lip Set",price:"$15.990",cat:"maquillaje",img:"1000271406.jpg"},
 {name:"Kevin & Coco – Set Carol Sweet",price:"$6.990",cat:"maquillaje",img:"1000271407.jpg"},
 {name:"Misucka – Acondicionador Fruit Candy Seboregulador",price:"$6.500",cat:"skincare",img:"1000271408.jpg"},
 {name:"Catrice – Shine Bomb Lip Lacquer",price:"$7.500",cat:"maquillaje",img:"1000271409.jpg"},
 {name:"Dolce Bella – Pincel para Labios",price:"$1.800",cat:"accesorios",img:"1000271410.jpg"},
 {name:"AMPLEN – Tónico Facial Ácido Hialurónico 220 ml",price:"$21.500",cat:"skincare",img:"1000271411.jpg"},
 {name:"Beauty Creations – Liquid Blush OK Coral",price:"$10.900",cat:"maquillaje",img:"1000271412.jpg"},
 {name:"AMPLEN – Protector Solar SPF50+ PA++++ con Color 40 ml",price:"$21.000",cat:"skincare",img:"1000271413.jpg"},
 {name:"Misucka – Skin Soft Cleansing Foam 200 ml",price:"$6.500",cat:"skincare",img:"1000271414.jpg"},
 {name:"Misucka – Skin Soft Deep Hydration Cream 50 g",price:"$6.500",cat:"skincare",img:"1000271415.jpg"},
 {name:"Dolce Bella – Paleta de 3 Sombras",price:"$3.500",cat:"maquillaje",img:"1000271416.jpg"},
 {name:"Misucka – Skin Soft Facial Cream 50 g",price:"$6.500",cat:"skincare",img:"1000271417.jpg"},
 {name:"Kevin & Coco – Labial Efecto Mousse Cotton",price:"$4.500",cat:"maquillaje",img:"1000271418.jpg"},
 {name:"Dolce Bella – Brocha Redonda PF103",price:"$4.500",cat:"accesorios",img:"1000271419.jpg"},
 {name:"Dolce Bella – Delineador Crayón Líquido",price:"$2.800",cat:"maquillaje",img:"1000271420.jpg"},
 {name:"Kevin & Coco – Set Rubor, Brocha e Iluminador Líquido",price:"$6.990",cat:"maquillaje",img:"1000271421.jpg"},
 {name:"Pegamento de Pestañas Salón Pro",price:"$3.900",cat:"accesorios",img:"1000271422.jpg"},
 {name:"BIELF – Mascarilla Facial Beil Peel Glow Colágeno & Vitaminas 70 ml",price:"$6.500",cat:"skincare",img:"1000271423.jpg"},
 {name:"Kevin & Coco – Set de Maquillaje 4 Piezas",price:"$6.990",cat:"maquillaje",img:"1000271424.jpg"}
];
const grid=document.querySelector('#product-grid');
const labels={maquillaje:'Maquillaje',skincare:'Skincare',accesorios:'Accesorios'};
function render(filter='todos'){
 const list=filter==='todos'?products:products.filter(p=>p.cat===filter);
 grid.innerHTML=list.map(p=>`<article class="product-card"><div class="product-image"><img loading="lazy" src="images/productos/${p.img}" alt="${p.name}"></div><div class="product-info"><span class="category">${labels[p.cat]}</span><h3>${p.name}</h3><span class="price">${p.price}</span><a class="ask" target="_blank" rel="noopener" href="https://wa.me/56953911282?text=${encodeURIComponent('Hola Vieva Store, quisiera consultar por: '+p.name)}">Consultar por WhatsApp</a></div></article>`).join('');
}
document.querySelectorAll('.filter').forEach(btn=>btn.addEventListener('click',()=>{document.querySelector('.filter.active').classList.remove('active');btn.classList.add('active');render(btn.dataset.filter)}));
const menu=document.querySelector('.menu-button');const nav=document.querySelector('.nav');menu.addEventListener('click',()=>{nav.classList.toggle('open');menu.setAttribute('aria-expanded',nav.classList.contains('open'))});nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));
render();
