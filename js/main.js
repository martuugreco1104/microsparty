/* ============================
       CARRUSELES DE INFRAESTRUCTURA
       ============================ */
    const infraImages = {
      sonido: ["Img/Fotos/Micros/webp/micros10_resultado.webp", "Img/Fotos/Micros/webp/micros2_resultado.webp", "Img/Fotos/Micros/webp/micros3_resultado.webp"],
      efectos: ["Img/Fotos/Micros/webp/micros12_resultado.webp", "Img/Fotos/Micros/webp/micros8_resultado.webp", "Img/Fotos/Micros/webp/micros16_resultado.webp"],
      pista: ["Img/Fotos/karaoke/karaoke1.mp4"]
    };

    function updateCarousel(type) {
      const wrapper = document.getElementById('car-' + type);
      const index = parseInt(wrapper.dataset.index);
      const src = infraImages[type][index];
      
      if(type === 'pista') {
        // En pista es video
        document.getElementById('media-pista').innerHTML = `<video src="${src}" autoplay loop muted playsinline style="width:100%; height:100%; object-fit:cover;"></video>`;
      } else {
        document.getElementById('img-' + type).src = src;
      }
    }

    function nextSlide(type) {
      const wrapper = document.getElementById('car-' + type);
      let idx = parseInt(wrapper.dataset.index);
      idx = (idx + 1) % infraImages[type].length;
      wrapper.dataset.index = idx;
      updateCarousel(type);
    }

    function prevSlide(type) {
      const wrapper = document.getElementById('car-' + type);
      let idx = parseInt(wrapper.dataset.index);
      idx = (idx - 1 + infraImages[type].length) % infraImages[type].length;
      wrapper.dataset.index = idx;
      updateCarousel(type);
    }

    /* ============================
       GALERÍAS Y MODALES GENERALES
       ============================ */
    const galleries = {
      // Paradas
      obelisco: [
        "Img/Fotos/Monumentos/webp/obelisco11_resultado.webp", "Img/Fotos/Monumentos/webp/obelisco1_resultado.webp", "Img/Fotos/Monumentos/webp/obelisco3_resultado.webp", "Img/Fotos/Monumentos/webp/obelisco20_resultado.webp", "Img/Fotos/Monumentos/webp/obelisco8_resultado.webp"
      ],
      planetario: [
        "Img/Fotos/Monumentos/webp/planetario3_resultado.webp", "Img/Fotos/Monumentos/webp/planetario1_resultado.webp", "Img/Fotos/Monumentos/webp/planetario7_resultado.webp", "Img/Fotos/Monumentos/webp/planetario10_resultado.webp"
      ],
      madero: [
        "Img/Fotos/Monumentos/webp/ptomadero_resultado.webp", "Img/Fotos/Monumentos/webp/ptomadero2_resultado.webp", "Img/Fotos/Monumentos/webp/puentedelamujer_resultado.webp"
      ],
      boca: [
        "Img/Fotos/Monumentos/webp/canchadeboca5_resultado.webp", "Img/Fotos/Monumentos/webp/canchadeboca4_resultado.webp", "Img/Fotos/Monumentos/webp/cancha boca_resultado.webp", "Img/Fotos/Monumentos/webp/cancha boca2_resultado.webp"
      ],
      river: [
        "Img/Fotos/Monumentos/webp/cancha river_resultado.webp"
      ],
      // Shows Extra
      mickey: ["Img/Fotos/Personajes/webp/mickey&sonic_resultado.webp", "Img/Fotos/Personajes/webp/mickey_resultado.webp", "Img/Fotos/Personajes/webp/messi&mickey_resultado.webp"],
      drag: ["Img/Fotos/Personajes/webp/drag1_resultado.webp", "Img/Fotos/Personajes/webp/spider&drag_resultado.webp", "Img/Fotos/Personajes/webp/spider&drag2_resultado.webp"],
      spider: ["Img/Fotos/Personajes/webp/spider&drag_resultado.webp", "Img/Fotos/Personajes/webp/spider&drag2_resultado.webp"],
      messi: ["Img/Fotos/Personajes/webp/messi1_resultado.webp", "Img/Fotos/Personajes/webp/messi2_resultado.webp", "Img/Fotos/Personajes/webp/messi3_resultado.webp", "Img/Fotos/Personajes/webp/messi4_resultado.webp", "Img/Fotos/Personajes/webp/messi&mickey_resultado.webp"],
      milei: ["Img/Fotos/Personajes/webp/milei_resultado.webp", "Img/Fotos/Personajes/webp/milei2_resultado.webp", "Img/Fotos/Personajes/webp/mileivideo.MOV"]
    };

    function openGallery(id) {
      const grid = document.getElementById('gallery-grid');
      grid.innerHTML = '';
      
      galleries[id].forEach(src => {
        const isVideo = src.toLowerCase().endsWith('.mp4') || src.toLowerCase().endsWith('.mov');
        if(isVideo) {
          grid.innerHTML += `<video src="${src}" autoplay loop muted playsinline></video>`;
        } else {
          grid.innerHTML += `<img src="${src}" alt="Imagen del evento">`;
        }
      });
      
      document.getElementById('gallery-modal').classList.add('active');
      document.body.style.overflow = 'hidden';
    }

    function closeModal(modalId) {
      document.getElementById(modalId).classList.remove('active');
      document.body.style.overflow = 'auto';
    }

    // Cerrar al clickear fondo negro
    document.querySelectorAll('.modal-overlay').forEach(el => {
      el.addEventListener('click', function(e) {
        if(e.target === this) closeModal(this.id);
      });
    });

    /* ============================
       MODALES DE EXPERIENCIA
       ============================ */
    const expData = {
      despedidas: {
        title: "Despedidas de Solteros/as",
        desc: "Juegos, prendas, disfraces y euforia total. Armamos el recorrido ideal para festejar el fin de la soltería con desafíos súper divertidos tanto arriba del micro como en las paradas.",
        gallery: ["Img/Fotos/Despedidas de soltero/webp/despedida2_resultado.webp", "Img/Fotos/Despedidas de soltero/despedida15.mp4", "Img/Fotos/Despedidas de soltero/webp/despedida10_resultado.webp"],
        features: ["Capacidad: Hasta 40 pasajeros", "Duración adaptable", "Juegos interactivos y coordinador"],
        extras: ["Show Drag Queen", "Bebidas liberadas", "Shows de personajes divertidos"]
      },
      adultos: {
        title: "Cumpleaños de Adultos & Jubilaciones",
        desc: "Nunca es tarde para subirse a la fiesta. Ideal para 40s, 50s o jubilaciones. Disfrutá de un paseo con tus seres queridos, pasarela de desfile, buena música y mucha emoción.",
        gallery: ["Img/Fotos/cumpleaños-recibidas/webp/cumple02_resultado.webp", "Img/Fotos/cumpleaños-recibidas/cumple60 video.mp4", "Img/Fotos/cumpleaños-recibidas/webp/cumple11_resultado.webp"],
        features: ["Capacidad: Hasta 40 pasajeros", "Música de la época que prefieran", "Clima familiar o modo boliche"],
        extras: ["Pista de baile retro", "Fotógrafo profesional"]
      },
      teens: {
        title: "Cumpleaños 15 Años & Teens",
        desc: "Una experiencia en movimiento con la mejor tecnología. Los chicos eligen la música, graban TikToks con luces de fondo y tienen su propio boliche rodante súper seguro.",
        gallery: ["Img/Fotos/teens/webp/teens1_resultado.webp", "Img/Fotos/teens/teens6.mp4", "Img/Fotos/teens/webp/teens2_resultado.webp"],
        features: ["Capacidad: Hasta 40 adolescentes", "Videos musicales y pantallas", "Desafíos de baile"],
        extras: ["Robot LED (muy recomendado)", "Maquillaje flúor (glitter bar)"]
      },
      kids: {
        title: "Cumpleaños Infantiles (Kids)",
        desc: "¡Los más chiquitos también tienen su lugar! Micro totalmente adaptado con burbujas, música infantil, karaoke fácil y la compañía de una coordinadora atenta a todo.",
        gallery: ["Img/Fotos/Kids/webp/kids14_resultado.webp", "Img/Fotos/Kids/kids10.mp4", "Img/Fotos/Kids/kids5.jpg"],
        features: ["Requiere adulto responsable a bordo", "Volumen moderado", "Micrófonos y Just Dance Kids"],
        extras: ["Show de Spiderman o Mickey", "Animación infantil especializada"]
      },
      egresados: {
        title: "Egresados & Murgas (10% OFF)",
        desc: "La previa definitiva de la Fiesta de Egresados (FDE) o el UPD. Hacemos el traslado al salón o al colegio a pura música y cánticos. Seguridad garantizada.",
        gallery: ["Img/Fotos/Egresados/webp/egresados6_resultado.webp", "Img/Fotos/Egresados/egresados4.mp4", "Img/Fotos/Egresados/webp/egresados15_resultado.webp"],
        features: ["Capacidad: Hasta 40 pasajeros (viaje seguro)", "Choferes habilitados VTV", "Habilitación GCBA al día", "10% OFF"],
        extras: ["Humo y luces potentes", "Traslados extendidos"]
      },
      recibidas: {
        title: "Recibidas Universitarias",
        desc: "Te acabás de recibir, salís de la facultad todo manchado/a y ahí estamos esperándote. Llenamos el micro con tu familia y amigos para seguir la caravana del éxito.",
        gallery: ["Img/Fotos/cumpleaños-recibidas/webp/recibidamedica2_resultado.webp", "Img/Fotos/cumpleaños-recibidas/recibidavideo.mp4", "Img/Fotos/cumpleaños-recibidas/webp/recibidacontadora2_resultado.webp"],
        features: ["Paradas fotográficas con la familia", "Música para celebrar la meta", "Súper flexible en horarios"],
        extras: ["Limpieza incluida post-festejo", "Show sorpresa"]
      }
    };

    function openExpDetails(type) {
      const data = expData[type];
      document.getElementById('exp-title').innerText = data.title;
      document.getElementById('exp-desc').innerText = data.desc;
      
      const gal = document.getElementById('exp-gallery');
      gal.innerHTML = '';
      data.gallery.forEach(src => {
        const isVideo = src.toLowerCase().endsWith('.mp4');
        if(isVideo) {
          gal.innerHTML += `<video src="${src}" autoplay loop muted playsinline></video>`;
        } else {
          gal.innerHTML += `<img src="${src}" alt="Detalle de experiencia">`;
        }
      });
      
      const featList = document.getElementById('exp-features');
      featList.innerHTML = '';
      data.features.forEach(f => featList.innerHTML += `<li>${f}</li>`);

      const extList = document.getElementById('exp-extras');
      extList.innerHTML = '';
      data.extras.forEach(e => extList.innerHTML += `<li>${e}</li>`);

      document.getElementById('exp-modal').classList.add('active');
      document.body.style.overflow = 'hidden';
    }

    /* ============================
       FORMULARIO A WHATSAPP
       ============================ */
    document.getElementById('presupuesto-form').addEventListener('submit', function(e) {
      e.preventDefault();
      const nombre = document.getElementById('nombre').value;
      const whatsapp = document.getElementById('whatsapp').value;
      const evento = document.getElementById('evento').value;
      const fecha = document.getElementById('fecha').value;
      const pasajeros = document.getElementById('pasajeros').value;

      const mensaje = `¡Hola MicrosParty! 🎉%0AQuiero solicitar un presupuesto:%0A%0A*👤 Nombre:* ${nombre}%0A*📱 WhatsApp:* ${whatsapp}%0A*🎊 Tipo de Evento:* ${evento}%0A*📅 Fecha:* ${fecha}%0A*👥 Pasajeros:* ${pasajeros}%0A%0A¿Me pueden pasar más info?`;
      
      const numeroOficial = "5491135580896";
      window.open(`https://wa.me/${numeroOficial}?text=${mensaje}`, '_blank');
    });

    // Universal Lightbox & Fullscreen Video
    document.addEventListener('click', function(e) {
      if (e.target.tagName === 'VIDEO' && !e.target.classList.contains('hero-video-bg')) {
        if (e.target.requestFullscreen) {
          e.target.requestFullscreen();
        } else if (e.target.webkitEnterFullscreen) {
          e.target.webkitEnterFullscreen();
        }
        return;
      }

      if (e.target.tagName === 'IMG' && 
          !e.target.closest('a.logo') && 
          !e.target.closest('.exp-card') && 
          !e.target.closest('.bento-item') && 
          !e.target.closest('.show-avatar')) {
        const lightbox = document.getElementById('universal-lightbox');
        const lightboxImg = document.getElementById('lightbox-img');
        lightboxImg.src = e.target.src;
        lightbox.style.display = 'flex';
      }
    });