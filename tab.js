$(document).ready(function () {
    // Manejar clic en los enlaces de la barra lateral
    $('.nav-link').click(function (e) {
        e.preventDefault(); // Evitar que el navegador siga el enlace
        // Quitar la clase 'active' de todos los enlaces
        $('.nav-link').removeClass('active');

        // Agregar la clase 'active' al enlace seleccionado
        if ($(this).hasClass('not-a-tab')) {
            $(this).addClass('active');
        }
    });

    // Manejar clic en los enlaces con subnavegación
    $('.has-subnav').click(function (e) {
        e.preventDefault(); // Evitar que el navegador siga el enlace
        // Quitar la clase 'active' de todos los enlaces
        $('.has-subnav').removeClass('active');

        // Agregar la clase 'active' al enlace seleccionado
        if ($(this).hasClass('not-a-tab')) {
            $(this).addClass('active');
        }
    });

    // Ocultar todos los contenidos inicialmente
    $('.content').hide();

    // Mostrar el contenido del primer paso
    $('#sistemas-objetivo-content').show();

    // Manejar clics en los círculos
    $('.progressbar li').click(function () {
        // Ocultar todos los contenidos
        $('.content').hide();

        // Obtener el ID del paso seleccionado
        var id = $(this).attr('id');

        // Mostrar el contenido correspondiente al paso seleccionado
        $('#' + id + '-content').show();
    });

    var currentStep = 1; // Inicia en el primer paso

    // Función para actualizar la visualización del stepper
    function updateStepper() {
      $(".progressbar li").removeClass("active");
      $(".progressbar li:nth-child(" + currentStep + ")").addClass("active");
    }

    // Función para mostrar el paso deseado
    function showStep(step) {
      $(".content").hide(); // Oculta todos los pasos
      $("#" + step + "-content").fadeIn(); // Muestra el paso deseado
      currentStep = step; // Actualiza el paso actual
      updateStepper(); // Actualiza la visualización del stepper
    }

    // Botón "Siguiente"
    $("#btn-next").click(function (e) {
        e.preventDefault(); // Evitar que el navegador siga el enlace
      if (currentStep < 4) {
        showStep(currentStep + 1);
      }
    });

    // Botón "Volver"
    $("#btn-prev").click(function (e) {
        e.preventDefault(); // Evitar que el navegador siga el enlace
      if (currentStep > 1) {
        showStep(currentStep - 1);
      }
    });

    // Inicialización
    updateStepper(); // Asegura que el stepper refleje el estado inicial
});

