/* ==========================================
   LÓGICA JAVASCRIPT - CALCULADORA STEPPER HERO
   ========================================== */

document.addEventListener('DOMContentLoaded', () => {
  const TOTAL_STEPS = 5;
  let currentStep = 1;

  const budgetData = {
    unidad: "",
    evento: "",
    extras: [],
    origen: "",
    destino: "",
    paradas: [],
    personas: "",
    fecha: "",
    duracion: ""
  };

  const stepTitles = ["Unidad", "Evento", "Extras y Shows", "Recorrido", "Logística"];

  function updateStepperUI() {
    document.querySelectorAll('.stepper-step').forEach((step, index) => {
      const stepNum = index + 1;
      step.classList.remove('active', 'previous');
      
      if (stepNum === currentStep) {
        step.classList.add('active');
      } else if (stepNum < currentStep) {
        step.classList.add('previous');
      }
    });

    document.getElementById('stepper-progress-fill').style.width = `${(currentStep / TOTAL_STEPS) * 100}%`;
    document.getElementById('stepper-title').innerText = stepTitles[currentStep - 1];
    document.getElementById('stepper-indicator').innerText = `Paso ${currentStep} de ${TOTAL_STEPS}`;

    document.getElementById('btn-prev-step').disabled = currentStep === 1;
    const btnNext = document.getElementById('btn-next-step');
    
    if (currentStep === TOTAL_STEPS) {
      btnNext.innerText = "Cotizar 📲";
      btnNext.style.background = "#25D366";
      btnNext.style.boxShadow = "0 0 15px rgba(37, 211, 102, 0.4)";
      btnNext.classList.add('pulse-wa');
    } else {
      btnNext.innerText = "Siguiente";
      btnNext.style.background = "var(--accent, #88D1C4)";
      btnNext.style.boxShadow = "0 0 15px rgba(136, 209, 196, 0.4)";
      btnNext.classList.remove('pulse-wa');
    }
  }

  window.nextStep = function() {
    if (currentStep < TOTAL_STEPS) {
      currentStep++;
      updateStepperUI();
    } else {
      compileAndSendWhatsApp();
    }
  }

  window.prevStep = function() {
    if (currentStep > 1) {
      currentStep--;
      updateStepperUI();
    }
  }

  window.selectCard = function(element, key) {
    document.querySelectorAll('.unit-card').forEach(el => el.classList.remove('selected'));
    element.classList.add('selected');
    budgetData[key] = element.getAttribute('data-value');
  }

  window.selectOption = function(element, key) {
    document.querySelectorAll('.option-btn').forEach(el => el.classList.remove('selected'));
    element.classList.add('selected');
    budgetData[key] = element.getAttribute('data-value');
  }

  function compileAndSendWhatsApp() {
    budgetData.extras = [];
    document.querySelectorAll('input[name="extra"]:checked').forEach(cb => budgetData.extras.push(cb.value));
    
    budgetData.paradas = [];
    document.querySelectorAll('input[name="parada"]:checked').forEach(cb => budgetData.paradas.push(cb.value));

    budgetData.origen = document.getElementById('origen').value || "No especificado";
    budgetData.destino = document.getElementById('destino').value || "No especificado";
    budgetData.personas = document.getElementById('personas').value || "No especificado";
    budgetData.fecha = document.getElementById('fecha').value || "No especificada";
    budgetData.duracion = document.getElementById('duracion').value || "No especificada";

    let mensaje = `👋 ¡Hola MicrosParty! Quiero cotizar un evento espectacular con ustedes 🥳🚐💨%0A%0A`;
    mensaje += `*🚌 UNIDAD ELEGIDA:* ${budgetData.unidad || 'Sin definir'}%0A`;
    mensaje += `*🎉 TIPO DE EVENTO:* ${budgetData.evento || 'Sin definir'}%0A`;
    
    if(budgetData.extras.length > 0) {
      mensaje += `*✨ SHOWS EXTRAS:* ${budgetData.extras.join(', ')}%0A`;
    }
    
    mensaje += `*📍 RECORRIDO:* De ${budgetData.origen} hacia ${budgetData.destino} 🗺️%0A`;
    
    if(budgetData.paradas.length > 0) {
      mensaje += `*📸 PARADAS FOTOGRÁFICAS:* ${budgetData.paradas.join(', ')}%0A`;
    }
    
    mensaje += `*👥 CANTIDAD DE PASAJEROS:* ${budgetData.personas} 🕺💃%0A`;
    mensaje += `*📅 FECHA DEL EVENTO:* ${budgetData.fecha} 🗓️%0A`;
    mensaje += `*⏱️ DURACIÓN APROXIMADA:* ${budgetData.duracion} ⏳%0A%0A`;
    mensaje += `¡Espero su respuesta para reservar mi fecha! 🔥🥂🚀`;

    const numeroEmpresa = "5491135580896"; 
    const linkWhatsApp = `https://wa.me/${numeroEmpresa}?text=${mensaje}`;
    
    // Pantalla de Clímax UX
    const loader = document.getElementById('climax-loader');
    document.querySelector('.stepper-body').classList.add('dimmed');
    
    if(loader) {
      loader.style.display = 'flex';
      setTimeout(() => {
        window.open(linkWhatsApp, '_blank');
        loader.style.display = 'none';
        document.querySelector('.stepper-body').classList.remove('dimmed');
      }, 1500);
    } else {
      window.open(linkWhatsApp, '_blank');
      document.querySelector('.stepper-body').classList.remove('dimmed');
    }
  }

  // Manejo de botones de expansión de tarjeta
  window.toggleDetails = function(event, buttonElement) {
    event.stopPropagation(); // Evitar seleccionar la tarjeta entera al cliquear el botón
    const card = buttonElement.closest('.bus-card, .unit-card');
    card.classList.toggle('expanded');
    
    if (card.classList.contains('expanded')) {
      buttonElement.innerText = "Ocultar detalles ↑";
    } else {
      buttonElement.innerText = "Ver qué tiene ↓";
    }
  }

  // Navegación manual de fotos en las tarjetas de unidades
  window.changeImage = function(event, buttonElement, direction) {
    event.stopPropagation(); // Evitar que se seleccione la unidad al cambiar foto
    
    const gallery = buttonElement.closest('.unit-gallery');
    const imgs = gallery.querySelectorAll('img');
    if (imgs.length <= 1) return;
    
    let activeIndex = Array.from(imgs).findIndex(img => img.classList.contains('active'));
    imgs[activeIndex].classList.remove('active');
    
    let nextIndex = activeIndex + direction;
    
    if (nextIndex >= imgs.length) {
      nextIndex = 0;
    } else if (nextIndex < 0) {
      nextIndex = imgs.length - 1;
    }
    
    imgs[nextIndex].classList.add('active');
  }

  // Inicializar estado UI
  updateStepperUI();
});
