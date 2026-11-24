
// ================================
// REDES SOCIALES DE YMIAU
// ================================

const paginas = [

    {
        nombre: "YouTube",
        url: "https://www.youtube.com/@elminevaa",
        clase: "youtube",
        icono: "▶️"
    },

    {
        nombre: "Twitch",
        url: "https://www.twitch.tv/mineva224",
        clase: "twitch",
        icono: "🟣"
    },

    {
        nombre: "TikTok",
        url: "https://www.tiktok.com/@mineva224",
        clase: "tiktok",
        icono: "🎵"
    },

    {
        nombre: "Kick",
        url: "https://www.tiktok.com/@mineva224",
        clase: "kick",
        icono: "🟢"
    },

    {
        nombre: "Twitter / X",
        url: "https://x.com/mineva224",
        clase: "twitter",
        icono: "🐦"
    },

    {
        nombre: "Discord",
        url: "https://discord.gg/Dszc3haEHc",
        clase: "discord",
        icono: "💬"
    }

];


// ================================
// GENERAR LOS ENLACES
// ================================

const lista = document.getElementById("lista-redes");

paginas.forEach(pagina => {

    // Crear elemento li
    const elemento = document.createElement("li");

    // Crear enlace
    const enlace = document.createElement("a");

    // Configurar enlace
    enlace.href = pagina.url;
    enlace.target = "_blank";
    enlace.rel = "noopener noreferrer";

    // Agregar clase
    elemento.classList.add(pagina.clase);

    // Agregar contenido
    enlace.textContent = `${pagina.icono} ${pagina.nombre}`;

    // Introducir enlace dentro del li
    elemento.appendChild(enlace);

    // Agregar li a la lista
    lista.appendChild(elemento);

});
