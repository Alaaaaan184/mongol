/* ==========================================================================
   INTERACTIVIDAD - COMIDA ASIÁTICA MONGOL
   Vanilla JS puro (sin módulos ES) para máxima compatibilidad
   ========================================================================== */

// ─── BASE DE DATOS DEL MENÚ ─────────────────────────────────────────────────
var menuData = [
  // LO NUEVO
  { id: 'nue-1', name: 'Kanikama Roll (Natural)', price: 170, category: 'nuevo', description: 'Rollo natural, relleno de camarones tempura, philadelphia, pepino y aguacate, con alga por fuera, forrado de aguacate, coronado con kanikama spicy y cebollín.' },
  { id: 'nue-2', name: 'Tazón Mar y Tierra', price: 130, category: 'nuevo', description: 'Brócoli, cebolla, zanahoria y frijolillo, jugosa res y camarón, bañado en salsa especial. Arroz a elegir blanco o frito.' },

  // ENTRADAS
  { id: 'ent-1', name: 'Dedos de Queso (5 PZ)', price: 100, category: 'entradas', description: 'Cinco dedos de queso manchego empanizados, crujientes y listos para derretirse en tu boca.' },
  { id: 'ent-2', name: 'Orden Chiles Rellenos (3 PZAS)', price: 120, category: 'entradas', description: 'Empanizados, rellenos de philadelphia y camarón, bañados en aderezo spicy y salsa de anguila, acompañados de zanahoria y tampico.' },
  { id: 'ent-3', name: 'Boneless (BBQ / Búfalo / Mango Habanero)', price: 120, category: 'entradas', description: 'Deliciosos trozos de pechuga de pollo crujientes, bañados en la salsa de tu elección.' },
  { id: 'ent-4', name: 'Alitas (BBQ / Búfalo / Mango Habanero)', price: 130, category: 'entradas', description: 'Alitas de pollo doraditas y bañadas en tu salsa favorita.' },
  { id: 'ent-5', name: 'Orden Papas Sazonadas', price: 60, category: 'entradas', description: 'Papas fritas con sazonador especial de la casa.' },

  // SUSHIS NATURALES
  { id: 'nat-1', name: 'California Clásico', price: 95, category: 'naturales', description: 'Rollo natural, relleno de surimi, aguacate, philadelphia y pepino, forrado de ajonjolí.' },
  { id: 'nat-2', name: 'Philadelphia', price: 110, category: 'naturales', description: 'Rollo natural, relleno de surimi, philadelphia, pepino y aguacate, forrado de queso crema philadelphia.' },
  { id: 'nat-3', name: 'Aguacate', price: 110, category: 'naturales', description: 'Rollo natural, relleno de surimi, pepino y philadelphia, forrado de aguacate fresco.' },
  { id: 'nat-4', name: 'Chiliss Roll', price: 130, category: 'naturales', description: 'Rollo natural, relleno de camarón, tocino, philadelphia, pepino y aguacate, forrado de philadelphia, chile serrano y tocino.' },
  { id: 'nat-5', name: 'Arcoiris', price: 125, category: 'naturales', description: 'Rollo natural, relleno de surimi, aguacate, pepino y philadelphia, forrado de aguacate, camarón, surimi y philadelphia.' },

  // SUSHIS EMPANIZADOS
  { id: 'emp-1', name: 'Mar y Tierra', price: 110, category: 'empanizados', description: 'Rollo empanizado, relleno de camarón, jugosa res, aguacate, pepino y philadelphia.' },
  { id: 'emp-2', name: '3 Quesos', price: 110, category: 'empanizados', description: 'Rollo empanizado, relleno de res, aguacate, pepino, philadelphia, forrado de queso manchego, queso philadelphia y queso cheddar.' },
  { id: 'emp-3', name: 'Goloso Especial', price: 140, category: 'empanizados', description: 'Rollo empanizado, relleno de camarón, tocino, aguacate, pepino, philadelphia, forrado de tocino y rica res, bañado en salsa spicy.' },
  { id: 'emp-4', name: 'Bomba Mongol', price: 130, category: 'empanizados', description: 'Bola empanizada, rellena de philadelphia, tampico, jugosa res, camarón, tocino y aguacate, bañada en salsa de anguila.' },
  { id: 'emp-5', name: 'Sushi Boneless', price: 160, category: 'empanizados', description: 'Rollo empanizado, relleno de surimi, pepino, philadelphia y aguacate, forrado de boneless bañados en salsa (BBQ o BÚFALO).' },
  { id: 'emp-6', name: 'Guamuchilito', price: 130, category: 'empanizados', description: 'Rollo empanizado, relleno de camarón, philadelphia, pepino y aguacate, coronado de rico tampico, bañado en salsa de anguila y ajonjolí.' },
  { id: 'emp-7', name: 'Nevado Roll', price: 130, category: 'empanizados', description: 'Rollo empanizado, relleno de pollo, philadelphia, aguacate y pepino, forrado de rico tampico, aguacate y bañado en salsa de anguila.' },
  { id: 'emp-8', name: 'Hot Mongol', price: 150, category: 'empanizados', description: 'Rollo empanizado, relleno de camarón empanizado, philadelphia, chile caribe, pepino y aguacate, coronado con tampico, ricos camarones capeados, bañado en salsa spicy y salsa de anguila.' },
  { id: 'emp-9', name: 'Clásico Empanizado', price: 95, category: 'empanizados', description: 'Rollo empanizado, relleno de surimi, pepino y queso philadelphia.' },
  { id: 'emp-10', name: 'Capricho Roll', price: 130, category: 'empanizados', description: 'Rollo empanizado relleno de pepino, aguacate, camarón y tampico cremoso con un toque de picor, coronado con tres sabores diferentes (spicy, aguacate y sriracha).' },
  { id: 'emp-11', name: 'Mongol Especial', price: 140, category: 'empanizados', description: 'Rollo empanizado, relleno de camarón, philadelphia, pepino y aguacate, forrado de topping de pepino, tocino y salsa chipotle, gratinado con queso manchego y bañado en salsa de anguila.' },
  { id: 'emp-12', name: 'Plancha Mongol', price: 140, category: 'empanizados', description: 'Plancha de arroz empanizada, con camarón, tocino, jugosa res, aguacate, gratinada con queso manchego y queso philadelphia, bañada en salsa spicy y salsa de anguila.' },
  { id: 'emp-13', name: 'Chester Especial', price: 150, category: 'empanizados', description: 'Rollo empanizado, relleno de surimi empanizado, philadelphia, pepino y aguacate, coronado con bolitas de queso empanizadas, bañado en aderezo ranch.' },
  { id: 'emp-14', name: 'Super Sushi', price: 230, category: 'empanizados', description: 'Rollo empanizado, relleno de philadelphia, pepino, aguacate, dedos de queso, surimi empanizado, camarones empanizados y rico tocino, por fuera bañado con aderezo spicy, togarashi espolvoreado y salsa de anguila.' },
  { id: 'emp-15', name: 'Spicy Especial', price: 170, category: 'empanizados', description: 'Rollo empanizado, relleno de camarón, philadelphia, aguacate y pepino, coronado con topping de camarón, tampico, aderezo spicy y queso fundido, decorado con cubos de aguacate, salsa de anguila y togarashi.' },
  { id: 'emp-16', name: 'Bomba Carajillo', price: 170, category: 'empanizados', description: 'Bola empanizada, rellena de philadelphia, tampico, jugosa res, camarón, tocino y aguacate, bañada en 5 quesos fundidos, coronada con tocino y chile serrano.' },

  // SUSHIS HORNEADOS
  { id: 'hor-1', name: 'California Especial (Horneado)', price: 150, category: 'horneados', description: 'Rollo horneado, relleno de camarón, aguacate, pepino y philadelphia, forrado de tampico, camarón y gratinado con queso manchego, bañado en salsa chipotle y salsa de anguila.' },
  { id: 'hor-2', name: 'Camarón Especial (Horneado)', price: 150, category: 'horneados', description: 'Rollo horneado, relleno de philadelphia, pepino, tampico y aguacate, forrado de tampico, queso manchego gratinado y camarón empanizado, bañado en salsa de anguila.' },

  // TAZONES Y BOX
  { id: 'taz-1', name: 'Camarón Cantones', price: 130, category: 'tazones', description: 'Pimiento rojo, pimiento verde, calabaza y salsa cantones. Arroz a elegir blanco o frito.' },
  { id: 'taz-2', name: 'Pollo a la Naranja', price: 120, category: 'tazones', description: 'Zanahoria, naranja natural, salsa naranja especial. Arroz a elegir blanco o frito.' },
  { id: 'taz-3', name: 'Pollo Mongol', price: 120, category: 'tazones', description: 'Cebolla, zanahoria, calabaza, chile de árbol y salsa agridulce con un toque de picor. Arroz a elegir blanco o frito.' },
  { id: 'taz-4', name: 'Pollo a la Plancha', price: 120, category: 'tazones', description: 'Cebolla, pimiento verde, zanahoria y brócoli con salsa saladita de mantequilla. Arroz a elegir blanco o frito.' },
  { id: 'taz-5', name: 'Res con Brócoli', price: 120, category: 'tazones', description: 'Jugosa res bañada en salsa especial oriental acompañada con brócoli. Arroz a elegir blanco o frito.' },
  { id: 'taz-6', name: 'Camarones Enchilados', price: 145, category: 'tazones', description: 'Ricos camarones empanizados bañados en salsa especial picosa con mantequilla, guiso de chop suey, zanahorita y cebolla. Arroz a elegir.' },
  { id: 'taz-7', name: 'Pollo Enchilado', price: 135, category: 'tazones', description: 'Rico pollo empanizado bañado en salsa especial picosa con mantequilla, guiso de chop suey, zanahorita y cebolla. Arroz a elegir.' },
  { id: 'taz-8', name: 'Camarones Roca', price: 150, category: 'tazones', description: 'Ricos camarones empanizados bañados en salsa especial, acompañado con aguacate en cubos y salsa de anguila. Arroz a elegir blanco o frito.' },
  { id: 'taz-9', name: 'Yakimechi Mongol', price: 120, category: 'tazones', description: 'Arroz frito, camarón, philadelphia, pepino, res, tampico y aguacate, bañado en salsa de anguila.' },
  { id: 'taz-10', name: 'Camarones Tay', price: 130, category: 'tazones', description: 'Camarones salteados bañados en salsa especial tailandesa. Arroz a elegir blanco o frito.' },
  { id: 'taz-11', name: 'Gohan de Camarón', price: 170, category: 'tazones', description: 'Capa de tampico con un toque de picor, coronado con ricos camarones empanizados, philadelphia bañados en salsa de anguila, ajonjolí y cebollín. Arroz a elegir blanco o frito.' },
  { id: 'taz-12', name: 'Tazón de Alitas', price: 160, category: 'tazones', description: 'Ricas alitas crujientes bañadas en tu salsa preferida (BBQ o búfalo) acompañadas de arroz frito o blanco.' },
  { id: 'taz-13', name: 'Arrochito', price: 130, category: 'tazones', description: 'Arroz frito, camarón, jugosa res, tampico, pollo, aguacate, philadelphia, bañado en salsa spicy y salsa de anguila.' },
  { id: 'taz-14', name: 'Arrochito Especial', price: 150, category: 'tazones', description: 'Arroz frito, jugosa res, tampico, philadelphia, aguacate, coronado con camarones empanizados, queso crema, aguacate en cubos y boneless (BBQ, Búfalo o Mango Habanero).' },
  { id: 'taz-15', name: 'Yakimechi Clásico', price: 70, category: 'tazones', description: 'Arroz frito con tampico, aguacate, philadelphia, bañado en deliciosa salsa de anguila.' },
  { id: 'taz-16', name: 'Paquete Mix', price: 140, category: 'tazones', description: 'Torre de arroz frito con philadelphia y aguacate, bañada en salsa spicy y salsa de anguila. Acompañada con media orden de boneless (BBQ, búfalo o mango habanero).' },
  { id: 'taz-17', name: 'Teriyaki (Pollo / Res / Camarón / Mixto)', price: 140, category: 'tazones', description: 'Proteína bañada en salsa teriyaki, acompañada con verduras salteadas y pepinillos dulces. Arroz a elegir blanco o frito.' },

  // BEBIDAS
  { id: 'beb-1', name: 'Té de la Casa (1 Litro)', price: 35, category: 'bebidas', description: 'Té helado endulzado preparado de manera artesanal.' },
  { id: 'beb-2', name: 'Té de la Casa (1/2 Litro)', price: 20, category: 'bebidas', description: 'Té helado endulzado, porción de medio litro.' },
  { id: 'beb-3', name: 'Té de la Casa (Jarra)', price: 70, category: 'bebidas', description: 'Jarra de té helado perfecta para compartir en mesa.' },
  { id: 'beb-4', name: 'Refresco en Lata', price: 30, category: 'bebidas', description: 'Variedad de marcas y sabores fríos.' }
];

// ─── IMÁGENES DE LA GALERÍA (nombres EXACTOS de los archivos) ──────────────
var galleryImages = [
  'WhatsApp Image 2026-06-22 at 8.01.13 PM.jpeg',
  'WhatsApp Image 2026-06-22 at 8.01.14 PM.jpeg',
  'WhatsApp Image 2026-06-22 at 8.01.14 PM (1).jpeg',
  'WhatsApp Image 2026-06-22 at 8.01.14 PM (2).jpeg',
  'WhatsApp Image 2026-06-22 at 8.01.14 PM (3).jpeg',
  'WhatsApp Image 2026-06-22 at 8.01.14 PM (4).jpeg',
  'WhatsApp Image 2026-06-22 at 8.01.14 PM (5).jpeg',
  'WhatsApp Image 2026-06-22 at 8.01.14 PM (6).jpeg',
  'WhatsApp Image 2026-06-22 at 8.01.14 PM (7).jpeg',
  'WhatsApp Image 2026-06-22 at 8.01.14 PM (8).jpeg',
  'WhatsApp Image 2026-06-22 at 8.01.08 PM (2).jpeg',
  'WhatsApp Image 2026-06-22 at 8.01.15 PM.jpeg',
  'WhatsApp Image 2026-06-22 at 8.01.15 PM (1).jpeg',
  'WhatsApp Image 2026-06-22 at 8.01.15 PM (2).jpeg',
  'WhatsApp Image 2026-06-22 at 8.01.15 PM (3).jpeg'
];

// Imágenes para el slideshow del hero (subset de 6)
var heroSlideImages = [
  'WhatsApp Image 2026-06-22 at 8.01.13 PM.jpeg',
  'WhatsApp Image 2026-06-22 at 8.01.14 PM (2).jpeg',
  'WhatsApp Image 2026-06-22 at 8.01.14 PM (5).jpeg',
  'WhatsApp Image 2026-06-22 at 8.01.14 PM (8).jpeg',
  'WhatsApp Image 2026-06-22 at 8.01.15 PM (1).jpeg',
  'WhatsApp Image 2026-06-22 at 8.01.15 PM (3).jpeg'
];

// ─── ESTADO GLOBAL ───────────────────────────────────────────────────────────
var cart = [];
var activeCategory = 'todos';
var searchQuery = '';
var reviews = [];
var selectedRating = 5;
var currentHeroIndex = 0;
var currentLightboxIndex = 0;
var heroTimer = null;

// Sucursales
var branches = {
  payan:   { name: 'Sucursal Payán',   phone: '526871060183' },
  colosio: { name: 'Sucursal Colosio', phone: '526878788854' }
};

// ─── CATEGORÍAS - Etiquetas legibles ─────────────────────────────────────────
var categoryLabels = {
  nuevo:       '🔥 Lo Nuevo',
  entradas:    '🍜 Entradas',
  naturales:   '🥑 Sushi Natural',
  empanizados: '🍤 Sushi Empanizado',
  horneados:   '🧀 Sushi Horneado',
  tazones:     '🍚 Tazones y Boxes',
  bebidas:     '🥤 Bebidas'
};

// ─── INICIO ───────────────────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', function() {
  initNavbar();
  initMobileMenu();
  initHeroSlider();
  initMenu();
  initGallery();
  initCart();
  initReviews();
});

// ═══════════════════════════════════════════════════════════════════
// A. NAVBAR
// ═══════════════════════════════════════════════════════════════════
function initNavbar() {
  var navbar = document.getElementById('main-navbar');
  window.addEventListener('scroll', function() {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });
}

function initMobileMenu() {
  var toggleBtn = document.getElementById('mobile-toggle');
  var navMenu   = document.getElementById('nav-menu');
  var navLinks  = document.querySelectorAll('.nav-link');

  if (!toggleBtn || !navMenu) return;

  toggleBtn.addEventListener('click', function() {
    navMenu.classList.toggle('open');
  });

  navLinks.forEach(function(link) {
    link.addEventListener('click', function() {
      navMenu.classList.remove('open');
      navLinks.forEach(function(l) { l.classList.remove('active'); });
      link.classList.add('active');
    });
  });
}

// ═══════════════════════════════════════════════════════════════════
// B. HERO SLIDER
// ═══════════════════════════════════════════════════════════════════
function initHeroSlider() {
  var sliderEl     = document.getElementById('hero-slider');
  var indicatorsEl = document.getElementById('slider-indicators');
  if (!sliderEl || !indicatorsEl) return;

  sliderEl.innerHTML     = '';
  indicatorsEl.innerHTML = '';

  heroSlideImages.forEach(function(filename, idx) {
    var slide = document.createElement('div');
    slide.className = 'hero-slide' + (idx === 0 ? ' active' : '');
    // encodeURIComponent codifica los espacios como %20
    slide.style.backgroundImage = "url('" + encodeURIComponent(filename) + "')";
    sliderEl.appendChild(slide);

    var dot = document.createElement('button');
    dot.className = 'indicator-dot' + (idx === 0 ? ' active' : '');
    dot.setAttribute('aria-label', 'Ir a diapositiva ' + (idx + 1));
    (function(i) {
      dot.addEventListener('click', function() { gotoSlide(i); });
    })(idx);
    indicatorsEl.appendChild(dot);
  });

  startHeroTimer();
}

function startHeroTimer() {
  if (heroTimer) clearInterval(heroTimer);
  heroTimer = setInterval(function() {
    gotoSlide((currentHeroIndex + 1) % heroSlideImages.length);
  }, 5000);
}

function gotoSlide(idx) {
  var slides = document.querySelectorAll('.hero-slide');
  var dots   = document.querySelectorAll('.indicator-dot');
  if (!slides.length) return;

  slides[currentHeroIndex].classList.remove('active');
  dots[currentHeroIndex].classList.remove('active');
  currentHeroIndex = idx;
  slides[currentHeroIndex].classList.add('active');
  dots[currentHeroIndex].classList.add('active');
}

// ═══════════════════════════════════════════════════════════════════
// C. MENÚ (Búsqueda + Filtros + Tarjetas)
// ═══════════════════════════════════════════════════════════════════
function initMenu() {
  var searchInput  = document.getElementById('menu-search');
  var clearBtn     = document.getElementById('clear-search');
  var filterBtns   = document.querySelectorAll('.filter-btn');

  renderMenu();

  if (searchInput) {
    searchInput.addEventListener('input', function() {
      searchQuery = searchInput.value.toLowerCase().trim();
      clearBtn.style.display = searchQuery.length > 0 ? 'flex' : 'none';
      renderMenu();
    });
  }

  if (clearBtn) {
    clearBtn.addEventListener('click', function() {
      searchInput.value = '';
      searchQuery = '';
      clearBtn.style.display = 'none';
      searchInput.focus();
      renderMenu();
    });
  }

  filterBtns.forEach(function(btn) {
    btn.addEventListener('click', function() {
      filterBtns.forEach(function(b) { b.classList.remove('active'); });
      btn.classList.add('active');
      activeCategory = btn.getAttribute('data-category');
      renderMenu();
    });
  });
}

function renderMenu() {
  var grid = document.getElementById('menu-grid');
  if (!grid) return;
  grid.innerHTML = '';

  var filtered = menuData.filter(function(item) {
    var matchCat    = (activeCategory === 'todos') || (item.category === activeCategory);
    var matchSearch = !searchQuery ||
                      item.name.toLowerCase().indexOf(searchQuery) !== -1 ||
                      item.description.toLowerCase().indexOf(searchQuery) !== -1;
    return matchCat && matchSearch;
  });

  if (filtered.length === 0) {
    grid.innerHTML =
      '<div class="no-results">' +
        '<i class="fa-solid fa-face-frown"></i>' +
        '<p>No encontramos platillos que coincidan.</p>' +
        '<small>Intenta buscar: Pollo, Sushi, Arroz, Camarón...</small>' +
      '</div>';
    return;
  }

  filtered.forEach(function(item) {
    var card = document.createElement('article');
    card.className = 'menu-card';
    card.setAttribute('data-id', item.id);
    card.innerHTML =
      '<div class="menu-card-top">' +
        '<div class="menu-card-header">' +
          '<h3 class="menu-item-name">' + item.name + '</h3>' +
          '<span class="menu-item-price">$' + item.price + '</span>' +
        '</div>' +
        '<p class="menu-item-desc">' + item.description + '</p>' +
      '</div>' +
      '<div class="menu-card-footer">' +
        '<span class="menu-item-category">' + (categoryLabels[item.category] || item.category) + '</span>' +
        '<button class="btn-add-cart" onclick="addToCart(\'' + item.id + '\')" aria-label="Agregar al carrito">' +
          '<i class="fa-solid fa-plus"></i>' +
        '</button>' +
      '</div>';
    grid.appendChild(card);
  });
}

// ═══════════════════════════════════════════════════════════════════
// D. GALERÍA + LIGHTBOX
// ═══════════════════════════════════════════════════════════════════
function initGallery() {
  var grid     = document.getElementById('gallery-grid');
  var lightbox = document.getElementById('lightbox');
  var lbImg    = document.getElementById('lightbox-img');
  var lbCap    = document.getElementById('lightbox-caption');
  var lbClose  = document.getElementById('lightbox-close');
  var lbPrev   = document.getElementById('lightbox-prev');
  var lbNext   = document.getElementById('lightbox-next');

  if (!grid) return;
  grid.innerHTML = '';

  galleryImages.forEach(function(filename, idx) {
    var item = document.createElement('div');
    item.className = 'gallery-item';

    var img = document.createElement('img');
    // Usar encodeURIComponent para manejar espacios y paréntesis en el nombre
    img.src     = encodeURIComponent(filename);
    img.alt     = 'Platillo de la casa #' + (idx + 1);
    img.loading = 'lazy';

    var overlay = document.createElement('div');
    overlay.className = 'gallery-overlay';
    overlay.innerHTML = '<div class="gallery-icon-view"><i class="fa-solid fa-maximize"></i></div>';

    item.appendChild(img);
    item.appendChild(overlay);

    (function(i) {
      item.addEventListener('click', function() { openLightbox(i); });
    })(idx);

    grid.appendChild(item);
  });

  // Controles del lightbox
  if (lbClose) lbClose.addEventListener('click', closeLightbox);
  if (lbPrev)  lbPrev.addEventListener('click', showPrevImg);
  if (lbNext)  lbNext.addEventListener('click', showNextImg);

  if (lightbox) {
    lightbox.addEventListener('click', function(e) {
      if (e.target === lightbox) closeLightbox();
    });
  }

  document.addEventListener('keydown', function(e) {
    if (!lightbox || lightbox.style.display !== 'flex') return;
    if (e.key === 'Escape')      closeLightbox();
    if (e.key === 'ArrowLeft')   showPrevImg();
    if (e.key === 'ArrowRight')  showNextImg();
  });
}

function openLightbox(idx) {
  var lightbox = document.getElementById('lightbox');
  var lbImg    = document.getElementById('lightbox-img');
  var lbCap    = document.getElementById('lightbox-caption');
  if (!lightbox) return;

  currentLightboxIndex = idx;
  lbImg.src = encodeURIComponent(galleryImages[idx]);
  if (lbCap) lbCap.textContent = 'Foto de Cocina Mongol #' + (idx + 1);
  lightbox.style.display = 'flex';
  document.body.style.overflow = 'hidden';
}

function closeLightbox() {
  var lightbox = document.getElementById('lightbox');
  if (lightbox) lightbox.style.display = 'none';
  document.body.style.overflow = '';
}

function showPrevImg() {
  var prev = currentLightboxIndex - 1;
  if (prev < 0) prev = galleryImages.length - 1;
  openLightbox(prev);
}

function showNextImg() {
  openLightbox((currentLightboxIndex + 1) % galleryImages.length);
}

// ═══════════════════════════════════════════════════════════════════
// E. CARRITO DE COMPRAS
// ═══════════════════════════════════════════════════════════════════
function initCart() {
  var trigger   = document.getElementById('cart-trigger');
  var closeBtn  = document.getElementById('close-cart');
  var drawer    = document.getElementById('cart-drawer');
  var overlay   = document.getElementById('cart-drawer-overlay');
  var sendBtn   = document.getElementById('btn-send-order');

  if (trigger)  trigger.addEventListener('click', function() { drawer.classList.add('open'); });
  if (closeBtn) closeBtn.addEventListener('click', function() { drawer.classList.remove('open'); });
  if (overlay)  overlay.addEventListener('click', function() { drawer.classList.remove('open'); });
  if (sendBtn)  sendBtn.addEventListener('click', sendOrderToWhatsApp);

  renderCart();
}

function addToCart(productId) {
  var product = null;
  for (var i = 0; i < menuData.length; i++) {
    if (menuData[i].id === productId) { product = menuData[i]; break; }
  }
  if (!product) return;

  var existing = null;
  for (var j = 0; j < cart.length; j++) {
    if (cart[j].id === productId) { existing = cart[j]; break; }
  }

  if (existing) {
    existing.qty++;
  } else {
    cart.push({ id: product.id, name: product.name, price: product.price, qty: 1 });
  }

  // Feedback visual en el botón
  var card = document.querySelector('.menu-card[data-id="' + productId + '"]');
  if (card) {
    var btn = card.querySelector('.btn-add-cart');
    if (btn) {
      var origHtml = btn.innerHTML;
      btn.innerHTML = '<i class="fa-solid fa-check"></i>';
      btn.style.background = '#25D366';
      setTimeout(function() {
        btn.innerHTML = origHtml;
        btn.style.background = '';
      }, 900);
    }
  }

  renderCart();
}

function changeQty(productId, delta) {
  for (var i = 0; i < cart.length; i++) {
    if (cart[i].id === productId) {
      cart[i].qty += delta;
      if (cart[i].qty <= 0) {
        cart.splice(i, 1);
      }
      break;
    }
  }
  renderCart();
}

function removeFromCart(productId) {
  cart = cart.filter(function(item) { return item.id !== productId; });
  renderCart();
}

function renderCart() {
  var countEl    = document.getElementById('cart-count');
  var container  = document.getElementById('cart-items-container');
  var formCard   = document.getElementById('cart-checkout-form');
  var footerCard = document.getElementById('cart-drawer-footer');
  var totalEl    = document.getElementById('cart-total-price');

  if (!container) return;

  var totalQty = cart.reduce(function(acc, item) { return acc + item.qty; }, 0);
  if (countEl) countEl.textContent = totalQty;

  if (cart.length === 0) {
    container.innerHTML =
      '<div class="empty-cart-message">' +
        '<i class="fa-solid fa-cookie-bite"></i>' +
        '<p>Tu carrito está vacío.</p>' +
        '<a href="#menu" class="btn btn-primary" onclick="document.getElementById(\'cart-drawer\').classList.remove(\'open\')">Explorar Menú</a>' +
      '</div>';
    if (formCard)   formCard.style.display   = 'none';
    if (footerCard) footerCard.style.display = 'none';
    return;
  }

  container.innerHTML = '';
  var total = 0;

  cart.forEach(function(item) {
    var subtotal = item.price * item.qty;
    total += subtotal;

    var el = document.createElement('div');
    el.className = 'cart-item';
    el.innerHTML =
      '<div class="cart-item-info">' +
        '<h4 class="cart-item-title">' + item.name + '</h4>' +
        '<span class="cart-item-price">$' + item.price + ' c/u — Subtotal: $' + subtotal + '</span>' +
      '</div>' +
      '<div class="cart-item-qty">' +
        '<button class="qty-btn" onclick="changeQty(\'' + item.id + '\',-1)" aria-label="Restar"><i class="fa-solid fa-minus"></i></button>' +
        '<span class="qty-val">' + item.qty + '</span>' +
        '<button class="qty-btn" onclick="changeQty(\'' + item.id + '\',1)" aria-label="Sumar"><i class="fa-solid fa-plus"></i></button>' +
      '</div>' +
      '<button class="cart-item-remove" onclick="removeFromCart(\'' + item.id + '\')" aria-label="Eliminar">' +
        '<i class="fa-solid fa-trash-can"></i>' +
      '</button>';
    container.appendChild(el);
  });

  if (totalEl)    totalEl.textContent      = '$' + total.toFixed(2);
  if (formCard)   formCard.style.display   = 'block';
  if (footerCard) footerCard.style.display = 'block';
}

function sendOrderToWhatsApp() {
  var nameInput   = document.getElementById('checkout-name');
  var branchSel   = document.getElementById('checkout-branch');
  var name        = nameInput ? nameInput.value.trim() : '';
  var branchKey   = branchSel ? branchSel.value : '';

  if (!name) {
    alert('Por favor ingresa tu nombre completo para continuar.');
    if (nameInput) nameInput.focus();
    return;
  }
  if (!branchKey) {
    alert('Por favor selecciona la sucursal donde recogerás tu pedido.');
    if (branchSel) branchSel.focus();
    return;
  }

  var branch = branches[branchKey];
  var total  = cart.reduce(function(acc, item) { return acc + (item.price * item.qty); }, 0);

  var msg = '🍜🥢 *PEDIDO MONGOL - PARA RECOGER* 🥢🍜\n';
  msg += '═══════════════════════════\n';
  msg += '👤 *Cliente:* ' + name + '\n';
  msg += '📍 *Sucursal:* ' + branch.name + '\n';
  msg += '═══════════════════════════\n\n';
  msg += '🛒 *Detalle del Pedido:*\n';

  cart.forEach(function(item) {
    msg += '• *' + item.qty + 'x ' + item.name + '* = $' + (item.price * item.qty) + '\n';
  });

  msg += '\n═══════════════════════════\n';
  msg += '💰 *TOTAL: $' + total.toFixed(2) + '*\n';
  msg += '═══════════════════════════\n\n';
  msg += '¡Ya voy en camino a recoger mi pedido! 🙌';

  var waUrl = 'https://wa.me/' + branch.phone + '?text=' + encodeURIComponent(msg);

  // Limpiar carrito y cerrar
  cart = [];
  if (nameInput) nameInput.value = '';
  if (branchSel) branchSel.value = '';
  renderCart();
  var drawer = document.getElementById('cart-drawer');
  if (drawer) drawer.classList.remove('open');

  window.open(waUrl, '_blank', 'noopener,noreferrer');
}

// ═══════════════════════════════════════════════════════════════════
// F. RESEÑAS (persistentes con localStorage)
// ═══════════════════════════════════════════════════════════════════
function initReviews() {
  var form        = document.getElementById('add-review-form');
  var starBtns    = document.querySelectorAll('.star-rating-input .star-btn');
  var ratingInput = document.getElementById('selected-rating');
  var starWrapper = document.getElementById('star-rating-input');

  // Estrellas predeterminadas (5)
  setStarDisplay(5);

  starBtns.forEach(function(btn) {
    btn.addEventListener('click', function() {
      selectedRating = parseInt(btn.getAttribute('data-rating'));
      if (ratingInput) ratingInput.value = selectedRating;
      setStarDisplay(selectedRating);
    });
    btn.addEventListener('mouseenter', function() {
      setStarDisplay(parseInt(btn.getAttribute('data-rating')));
    });
  });

  if (starWrapper) {
    starWrapper.addEventListener('mouseleave', function() {
      setStarDisplay(selectedRating);
    });
  }

  if (form) {
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      var name    = document.getElementById('review-name').value.trim();
      var comment = document.getElementById('review-comment').value.trim();
      if (!name || !comment) return;

      var review = {
        id:      'rv-' + Date.now(),
        name:    name,
        rating:  selectedRating,
        comment: comment,
        date:    new Date().toLocaleDateString('es-MX', { day: 'numeric', month: 'short', year: 'numeric' })
      };

      reviews.unshift(review);
      localStorage.setItem('mongol_reviews', JSON.stringify(reviews));
      form.reset();
      selectedRating = 5;
      setStarDisplay(5);
      renderReviews();
    });
  }

  loadReviews();
}

function setStarDisplay(rating) {
  var btns = document.querySelectorAll('.star-rating-input .star-btn');
  btns.forEach(function(btn, idx) {
    var icon = btn.querySelector('i');
    if (!icon) return;
    icon.className = idx < rating ? 'fa-solid fa-star' : 'fa-regular fa-star';
  });
}

function loadReviews() {
  var saved = localStorage.getItem('mongol_reviews');
  if (saved) {
    try { reviews = JSON.parse(saved); } catch(e) { reviews = []; }
  }

  if (!reviews || reviews.length === 0) {
    // Reseñas semilla
    reviews = [
      { id: 's1', name: 'Valeria López',       rating: 5, comment: '¡La mejor comida asiática de Guasave! El Pollo Mongol tiene un sabor agridulce exquisito y la porción es generosísima. 100% recomendado.',           date: '15 jun 2026' },
      { id: 's2', name: 'Carlos Mendoza',       rating: 5, comment: 'Los sushis empanizados son increíbles, el Guamuchilito y el Hot Mongol son mis favoritos. El topping de tampico está riquísimo.',                       date: '10 jun 2026' },
      { id: 's3', name: 'Ana Laura Gaxiola',    rating: 4, comment: 'Muy rico todo y preparado al momento. El Yakimechi Mongol es espectacular, viene muy bien servido. Regreso pronto.',                                     date: '2 jun 2026'  },
      { id: 's4', name: 'Jesús Roberto Solís',  rating: 5, comment: 'Hice el pedido por WhatsApp a la sucursal Payán y en 25 minutos pasé a recogerlo. Super práctico, calientito y delicioso.',                              date: '28 may 2026' },
      { id: 's5', name: 'Sofía Romero',         rating: 5, comment: 'El Gohan de Camarón es una experiencia única. Cada visita me sorprende más. El ambiente del lugar también es muy agradable.',                             date: '14 may 2026' }
    ];
    localStorage.setItem('mongol_reviews', JSON.stringify(reviews));
  }

  renderReviews();
}

function renderReviews() {
  var list     = document.getElementById('reviews-list');
  var avgEl    = document.getElementById('avg-rating');
  var starsEl  = document.getElementById('avg-stars');
  var countEl  = document.getElementById('total-reviews-count');

  if (!list) return;
  list.innerHTML = '';

  if (!reviews.length) {
    list.innerHTML = '<p style="color:#888;text-align:center;padding:20px">Sé el primero en opinar.</p>';
    if (avgEl)   avgEl.textContent   = '0.0';
    if (countEl) countEl.textContent = 'Sin calificaciones';
    return;
  }

  // Promedio
  var total = reviews.reduce(function(acc, r) { return acc + r.rating; }, 0);
  var avg   = (total / reviews.length).toFixed(1);

  if (avgEl)   avgEl.textContent   = avg;
  if (countEl) countEl.textContent = 'Basado en ' + reviews.length + ' ' + (reviews.length === 1 ? 'opinión' : 'opiniones');

  // Render estrellas promedio
  if (starsEl) {
    starsEl.innerHTML = '';
    var full    = Math.floor(avg);
    var hasHalf = (avg - full) >= 0.5;
    for (var i = 1; i <= 5; i++) {
      var s = document.createElement('i');
      if (i <= full)               s.className = 'fa-solid fa-star';
      else if (i === full+1 && hasHalf) s.className = 'fa-solid fa-star-half-stroke';
      else                         s.className = 'fa-regular fa-star';
      starsEl.appendChild(s);
    }
  }

  // Lista de reseñas
  reviews.forEach(function(review) {
    var starsHtml = '';
    for (var i = 1; i <= 5; i++) {
      starsHtml += '<i class="' + (i <= review.rating ? 'fa-solid' : 'fa-regular') + ' fa-star"></i>';
    }

    var card = document.createElement('div');
    card.className = 'review-card-item';
    card.innerHTML =
      '<div class="review-card-header">' +
        '<h4 class="review-user-name">' + review.name + '</h4>' +
        '<div class="review-stars">' + starsHtml + '</div>' +
      '</div>' +
      '<small class="review-date">Publicado el ' + review.date + '</small>' +
      '<p class="review-text">' + review.comment + '</p>';
    list.appendChild(card);
  });
}
