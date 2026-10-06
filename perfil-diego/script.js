/*
    Seleccionamos todos los botones
    que pertenecen a las pestañas.
*/
const tabs = document.querySelectorAll(".tab");

/*
    Seleccionamos todas las secciones
    que contienen la información.
*/
const sections = document.querySelectorAll(".tab-content");

/* Recorremos cada botón. */

tabs.forEach(tab => {

    tab.addEventListener("click", () => {

        /*
            Obtenemos el nombre de la sección
            que queremos mostrar.
        */
        const sectionId = tab.dataset.section;

        /*
            Quitamos la clase active
            de todos los botones.
        */
        tabs.forEach(item => {

            item.classList.remove("active");

        });

        /*
            Activamos el botón seleccionado.
        */
        tab.classList.add("active");

        /*
            Quitamos la clase active
            de todas las secciones.
        */
        sections.forEach(section => {

            section.classList.remove("active");

        });

        /*
            Buscamos la sección correspondiente
            al botón seleccionado.
        */
        const selectedSection = document.getElementById(sectionId);

        /*
            Mostramos la sección seleccionada.
        */
        if (selectedSection) {

            selectedSection.classList.add("active");

        }

    });

});