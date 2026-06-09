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

    function scrollBuses(dir) {
      const grid = document.getElementById('busesGrid');
      const scrollAmount = grid.clientWidth * 0.8;
      grid.scrollBy({ left: dir * scrollAmount, behavior: 'smooth' });
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
      mickey: ["Img/Fotos/Personajes/webp/mickey_resultado.webp", "Img/Fotos/Personajes/webp/messi&mickey_resultado.webp"],
      sonic: ["Img/Fotos/Personajes/webp/mickey&sonic_resultado.webp"],
      drag: ["Img/Fotos/Personajes/webp/drag1_resultado.webp", "Img/Fotos/Personajes/webp/spider&drag_resultado.webp", "Img/Fotos/Personajes/webp/spider&drag2_resultado.webp"],
      spider: ["Img/Fotos/Personajes/webp/spider&drag_resultado.webp", "Img/Fotos/Personajes/webp/spider&drag2_resultado.webp"],
      messi: ["Img/Fotos/Personajes/webp/messi1_resultado.webp", "Img/Fotos/Personajes/webp/messi2_resultado.webp", "Img/Fotos/Personajes/webp/messi3_resultado.webp", "Img/Fotos/Personajes/webp/messi4_resultado.webp", "Img/Fotos/Personajes/webp/messi&mickey_resultado.webp"],
      milei: ["Img/Fotos/Personajes/webp/milei_resultado.webp", "Img/Fotos/Personajes/webp/milei2_resultado.webp", "Img/Fotos/Personajes/webp/mileivideo.MOV"],
      robot: ["Img/Fotos/Personajes/webp/robot_resultado.webp", "Img/Fotos/Personajes/webp/robot2.mp4"]
    };

    function openGallery(id) {
      if (!galleries[id] || galleries[id].length === 0) return;
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
        gallery: [
          "Img/Fotos/Despedidas de soltero/webp/Despedida portada_resultado.webp",
          "Img/Fotos/Despedidas de soltero/webp/despedida marqueisna2_resultado.webp",
          "Img/Fotos/Despedidas de soltero/webp/despedida marquesina_resultado.webp",
          "Img/Fotos/Despedidas de soltero/webp/despedida10_resultado.webp",
          "Img/Fotos/Despedidas de soltero/webp/despedida11_resultado.webp",
          "Img/Fotos/Despedidas de soltero/webp/despedida12_resultado.webp",
          "Img/Fotos/Despedidas de soltero/webp/despedida13_resultado.webp",
          "Img/Fotos/Despedidas de soltero/webp/despedida14_resultado.webp",
          "Img/Fotos/Despedidas de soltero/webp/despedida15.mp4",
          "Img/Fotos/Despedidas de soltero/webp/despedida16.mp4",
          "Img/Fotos/Despedidas de soltero/webp/despedida17_resultado.webp",
          "Img/Fotos/Despedidas de soltero/webp/despedida18_resultado.webp",
          "Img/Fotos/Despedidas de soltero/webp/despedida1_resultado.webp",
          "Img/Fotos/Despedidas de soltero/webp/despedida20_resultado.webp",
          "Img/Fotos/Despedidas de soltero/webp/despedida21_resultado.webp",
          "Img/Fotos/Despedidas de soltero/webp/despedida22_resultado.webp",
          "Img/Fotos/Despedidas de soltero/webp/despedida23_resultado.webp",
          "Img/Fotos/Despedidas de soltero/webp/despedida24.mp4",
          "Img/Fotos/Despedidas de soltero/webp/despedida25_resultado.webp",
          "Img/Fotos/Despedidas de soltero/webp/despedida26_resultado.webp",
          "Img/Fotos/Despedidas de soltero/webp/despedida27_resultado.webp",
          "Img/Fotos/Despedidas de soltero/webp/despedida28_resultado.webp",
          "Img/Fotos/Despedidas de soltero/webp/despedida29_resultado.webp",
          "Img/Fotos/Despedidas de soltero/webp/despedida2_resultado.webp",
          "Img/Fotos/Despedidas de soltero/webp/despedida30.mp4",
          "Img/Fotos/Despedidas de soltero/webp/despedida31_resultado.webp",
          "Img/Fotos/Despedidas de soltero/webp/despedida32.mp4",
          "Img/Fotos/Despedidas de soltero/webp/despedida33_resultado.webp",
          "Img/Fotos/Despedidas de soltero/webp/despedida34_resultado.webp",
          "Img/Fotos/Despedidas de soltero/webp/despedida35_resultado.webp",
          "Img/Fotos/Despedidas de soltero/webp/despedida36_resultado.webp",
          "Img/Fotos/Despedidas de soltero/webp/despedida37_resultado.webp",
          "Img/Fotos/Despedidas de soltero/webp/despedida38_resultado.webp",
          "Img/Fotos/Despedidas de soltero/webp/despedida4_resultado.webp",
          "Img/Fotos/Despedidas de soltero/webp/despedida6_resultado.webp",
          "Img/Fotos/Despedidas de soltero/webp/despedida9_resultado.webp",
          "Img/Fotos/Despedidas de soltero/webp/despedida_resultado_resultado.webp",
          "Img/Fotos/Despedidas de soltero/webp/despedidaportada2_resultado.webp",
          "Img/Fotos/Despedidas de soltero/webp/despedidaportada_resultado.webp"
        ],
        features: ["Capacidad: Hasta 40 pasajeros", "Duración adaptable", "Juegos interactivos y coordinador"],
        extras: ["Show Drag Queen", "Bebidas liberadas", "Shows de personajes divertidos"]
      },
      adultos: {
        title: "Cumpleaños de Adultos",
        desc: "Nunca es tarde para subirse a la fiesta. Disfrutá de un paseo con tus seres queridos, pasarela de desfile, buena música y mucha emoción.",
        gallery: [
          "Img/Fotos/cumple adultos/cumple adultos portada_resultado.webp",
          "Img/Fotos/cumple adultos/cumple adultos_resultado.webp",
          "Img/Fotos/cumple adultos/cumple video07.mp4",
          "Img/Fotos/cumple adultos/cumple01_resultado.webp",
          "Img/Fotos/cumple adultos/cumple02_resultado.webp",
          "Img/Fotos/cumple adultos/cumple02_resultado_resultado.webp",
          "Img/Fotos/cumple adultos/cumple03_resultado.webp",
          "Img/Fotos/cumple adultos/cumple04_resultado.webp",
          "Img/Fotos/cumple adultos/cumple05_resultado.webp",
          "Img/Fotos/cumple adultos/cumple06_resultado.webp",
          "Img/Fotos/cumple adultos/cumple09_resultado.webp",
          "Img/Fotos/cumple adultos/cumple10_resultado.webp",
          "Img/Fotos/cumple adultos/cumple11_resultado_resultado.webp",
          "Img/Fotos/cumple adultos/cumple12_resultado.webp",
          "Img/Fotos/cumple adultos/cumple18.mp4",
          "Img/Fotos/cumple adultos/cumple18baile.mp4",
          "Img/Fotos/cumple adultos/cumple31video.mp4",
          "Img/Fotos/cumple adultos/cumple50_resultado.webp",
          "Img/Fotos/cumple adultos/cumple60 video.mp4",
          "Img/Fotos/cumple adultos/cumple60_resultado.webp",
          "Img/Fotos/cumple adultos/cumpleadultos_resultado.webp",
          "Img/Fotos/cumple adultos/cumpleaños.mp4"
        ],
        features: ["Capacidad: Hasta 40 pasajeros", "Música de la época que prefieran", "Clima familiar o modo boliche"],
        extras: ["Pista de baile retro", "Fotógrafo profesional"]
      },
      jubilacion: {
        title: "Jubilaciones",
        desc: "Celebrá esta nueva etapa en un entorno inigualable lleno de alegría, música y un recorrido que homenajea todos tus años de trabajo.",
        gallery: [
          "Img/Fotos/jubilacion/jubilacion_resultado_portada.webp",
          "Img/Fotos/jubilacion/jubilacion.webp"
        ],
        features: ["Capacidad: Hasta 40 pasajeros", "Música personalizada", "Viaje tranquilo y alegre"],
        extras: ["Fotógrafo profesional", "Coordinador animador"]
      },
      xv: {
        title: "Cumpleaños 15",
        desc: "Una noche soñada. El mejor boliche rodante para entrar a tu fiesta a puro glamour o hacer un festejo diferente.",
        gallery: [
          "Img/Fotos/XV/quince portada.webp",
          "Img/Fotos/XV/cumple15_resultado.webp",
          "Img/Fotos/XV/quince.webp",
          "Img/Fotos/XV/quince video.mp4"
        ],
        features: ["Alfombra roja virtual", "Música de entrada", "Pantallas gigantes"],
        extras: ["Robot LED", "Glitter Bar"]
      },
      teens: {
        title: "Cumpleaños Teens",
        desc: "Una experiencia en movimiento con la mejor tecnología. Los chicos eligen la música, graban TikToks con luces de fondo y tienen su propio boliche rodante súper seguro.",
        gallery: [
          "Img/Fotos/teens/webp/teens1_portada.webp",
          "Img/Fotos/teens/webp/teens2_resultado.webp"
        ],
        features: ["Capacidad: Hasta 40 adolescentes", "Videos musicales y pantallas", "Desafíos de baile"],
        extras: ["Robot LED (muy recomendado)", "Maquillaje flúor (glitter bar)"]
      },
      kids: {
        title: "Cumpleaños Infantiles (Kids)",
        desc: "¡Los más chiquitos también tienen su lugar! Micro totalmente adaptado con burbujas, música infantil, karaoke fácil y la compañía de una coordinadora atenta a todo.",
        gallery: [
          "Img/Fotos/Kids/kids16_portada.webp",
          "Img/Fotos/Kids/kids1_resultado.webp",
          "Img/Fotos/Kids/kids2_resultado.webp",
          "Img/Fotos/Kids/kids5_resultado.webp",
          "Img/Fotos/Kids/kids6_resultado.webp",
          "Img/Fotos/Kids/kids7_resultado.webp",
          "Img/Fotos/Kids/kids11_resultado.webp",
          "Img/Fotos/Kids/kids10.mp4"
        ],
        features: ["Requiere adulto responsable a bordo", "Volumen moderado", "Micrófonos y Just Dance Kids"],
        extras: ["Show de Spiderman o Mickey", "Animación infantil especializada"]
      },
      egresados_infantiles: {
        title: "Egresados Jardín & Primaria",
        desc: "Paseo súper cuidado con coordinación para celebrar el fin de ciclo a pura sonrisa. Juegos, canciones y mucha diversión segura.",
        gallery: [
          "Img/Fotos/Egresados Jardin & Primaria/Egresados_Kids_Portada.webp",
          "Img/Fotos/Egresados Jardin & Primaria/Egresados_Kids1.webp",
          "Img/Fotos/Egresados Jardin & Primaria/Egresados_Kids2.webp",
          "Img/Fotos/Egresados Jardin & Primaria/Egresados_Kids3.webp",
          "Img/Fotos/Egresados Jardin & Primaria/Egresados_Kids4.webp",
          "Img/Fotos/Egresados Jardin & Primaria/Egresados_Kids5.webp"
        ],
        features: ["Viaje a baja velocidad", "Juegos adaptados", "Animación en todo momento"],
        extras: ["Personajes (Mickey, Spiderman)", "Burbujas extra"]
      },
      egresados: {
        title: "Egresados Secundarios & Murgas (10% OFF)",
        desc: "La previa definitiva de la Fiesta de Egresados (FDE) o el UPD. Hacemos el traslado al salón o al colegio a pura música y cánticos. Seguridad garantizada.",
        gallery: [
          "Img/Fotos/Egresados/egresados16portada.jpg",
          "Img/Fotos/Egresados/egresadas_resultado.webp",
          "Img/Fotos/Egresados/egresados10_resultado.webp",
          "Img/Fotos/Egresados/egresados11_resultado.webp",
          "Img/Fotos/Egresados/egresados12_resultado.webp",
          "Img/Fotos/Egresados/egresados13_resultado.webp",
          "Img/Fotos/Egresados/egresados14_resultado.webp",
          "Img/Fotos/Egresados/egresados15_resultado.webp",
          "Img/Fotos/Egresados/egresados2_resultado.webp",
          "Img/Fotos/Egresados/egresados3_resultado.webp",
          "Img/Fotos/Egresados/egresados5_resultado.webp",
          "Img/Fotos/Egresados/egresados6_resultado.webp",
          "Img/Fotos/Egresados/egresados8_resultado.webp",
          "Img/Fotos/Egresados/egresados9_resultado.webp",
          "Img/Fotos/Egresados/egresados1.mp4",
          "Img/Fotos/Egresados/egresados4.mp4",
          "Img/Fotos/Egresados/egresados7.mp4",
          "Img/Fotos/Egresados/egresados17.mp4",
          "Img/Fotos/Egresados/egresados19.mp4"
        ],
        features: ["Capacidad: Hasta 40 pasajeros (viaje seguro)", "Choferes habilitados VTV", "Habilitación GCBA al día", "10% OFF"],
        extras: ["Humo y luces potentes", "Traslados extendidos"]
      },
      recibidas: {
        title: "Recibidas Universitarias",
        desc: "Te acabás de recibir, salís de la facultad todo manchado/a y ahí estamos esperándote. Llenamos el micro con tu familia y amigos para seguir la caravana del éxito.",
        gallery: [
          "Img/Fotos/recibidas/portada recibida_resultado.webp",
          "Img/Fotos/recibidas/recibidacontadora03_resultado.webp",
          "Img/Fotos/recibidas/recibidacontadora2_resultado.webp",
          "Img/Fotos/recibidas/recibidamedica2_resultado.webp",
          "Img/Fotos/recibidas/recibidacontadora.mp4",
          "Img/Fotos/recibidas/recibidamedica.mp4",
          "Img/Fotos/recibidas/recibidavideo.mp4",
          "Img/Fotos/recibidas/reel recibida.mp4"
        ],
        features: ["Paradas fotográficas con la familia", "Música para celebrar la meta", "Súper flexible en horarios"],
        extras: ["Limpieza incluida post-festejo", "Show sorpresa"]
      },
      campeones: {
        title: "Festejo de Campeones",
        desc: "Un paseo épico con banderas, cantos y festejos descontrolados para el plantel campeón de tu club. La caravana que tu equipo merece.",
        gallery: [
          "Img/Fotos/campeones/campeones2_portada.webp",
          "Img/Fotos/campeones/campeones3_resultado.webp",
          "Img/Fotos/campeones/campeones_resultado.webp"
        ],
        features: ["Micrófono para cantos", "Recorrido por el club", "Máximo volumen de festejos"],
        extras: ["Humo de colores del club", "Fotógrafo deportivo"]
      },
      previa: {
        title: "La Previa",
        desc: "Arrancá la noche con nosotros antes de ir al boliche. La mejor música y clima fiestero para ir entrando en calor con todos tus amigos.",
        gallery: [
          "Img/Fotos/previa/previa portada_resultado.webp",
          "Img/Fotos/previa/previa_resultado.webp"
        ],
        features: ["Paradas estratégicas", "Luces de boliche", "Tragos permitidos"],
        extras: ["Show de Strippers", "Entrada directa al boliche (sujeto a disponibilidad)"]
      },
      aeroparque: {
        title: "Traslado Aeroparque / Ezeiza",
        desc: "Empezá tus vacaciones o tu viaje de egresados desde que salís de tu casa hasta el aeropuerto. Viajá cantando, bailando y con toda la energía.",
        gallery: [
          "Img/Fotos/translado aeroparque/transladoaeroparque_resultado.webp"
        ],
        features: ["Puntualidad garantizada", "Amplio espacio para pasajeros", "Música para el viaje"],
        extras: ["Parada intermedia"]
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


    // Delegación de Eventos para Tarjetas y Avatares
    function handleInteractiveClick(target) {
      const bento = target.closest('.bento-item');
      if (bento) return openGallery(bento.dataset.gallery);

      const avatar = target.closest('.show-avatar');
      if (avatar) return openGallery(avatar.dataset.gallery);

      const exp = target.closest('.exp-card');
      if (exp) return openExpDetails(exp.dataset.exp);
    }

    // Cerrar Universal Lightbox
    function closeUniversalLightbox() {
      const lightbox = document.getElementById('universal-lightbox');
      if (lightbox) {
        lightbox.style.display = 'none';
        const content = document.getElementById('lightbox-content');
        if (content) content.innerHTML = '';
      }
    }

    document.addEventListener('click', function(e) {
      // Cerrar Lightbox si se hace clic en él (y no en el contenido directamente)
      if (e.target.id === 'universal-lightbox' || e.target.classList.contains('close-lightbox')) {
        return closeUniversalLightbox();
      }

      // Delegación de interacciones de tarjetas
      if (e.target.closest('.bento-item') || e.target.closest('.show-avatar') || e.target.closest('.exp-card')) {
        if (e.target.closest('.show-avatar-checkbox')) {
          return; // Permitir que el checkbox se tilde sin abrir el modal
        }
        return handleInteractiveClick(e.target);
      }

      if (e.target.tagName === 'VIDEO' && !e.target.classList.contains('hero-video-bg')) {
        if (e.target.requestFullscreen) {
          e.target.requestFullscreen();
        } else if (e.target.webkitEnterFullscreen) {
          e.target.webkitEnterFullscreen();
        }
        return;
      }

      // Interceptar clics en imágenes para abrirlas en pantalla grande
      if (e.target.tagName === 'IMG' && 
          !e.target.closest('a.logo') && 
          !e.target.closest('.show-avatar') &&
          !e.target.closest('.show-avatar-checkbox')) {
        e.stopPropagation();
        e.preventDefault();
        const lightbox = document.getElementById('universal-lightbox');
        const content = document.getElementById('lightbox-content');
        if (!lightbox || !content) return;
        
        content.innerHTML = `<img loading="lazy" src="${e.target.src}" alt="Fullscreen" style="max-width: 90%; max-height: 90vh; object-fit: contain; border-radius: 8px;">`;
        lightbox.style.display = 'flex';
      }
    });

    // Accesibilidad por teclado
    document.addEventListener('keydown', function(e) {
      // Cerrar modales con Escape
      if (e.key === 'Escape') {
        closeUniversalLightbox();
        document.querySelectorAll('.modal-overlay.active').forEach(modal => closeModal(modal.id));
      }

      // Enter o Spacebar en elementos interactivos enfocados
      if (e.key === 'Enter' || e.key === ' ') {
        if (document.activeElement && 
           (document.activeElement.classList.contains('bento-item') || 
            document.activeElement.classList.contains('show-avatar') || 
            document.activeElement.classList.contains('exp-card'))) {
          e.preventDefault();
          handleInteractiveClick(document.activeElement);
        }
      }
    });