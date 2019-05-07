var perfiles = [{
        "foto": "img/4.jpg",
        "edificio": "img/edf1.jpg",
        "nombre": "Baño",
    },
    {
        "foto": "img/5.jpg",
        "edificio": "img/edf2.jpg",
        "nombre": "Cocina",
    },
    {
        "foto": "img/6.jpg",
        "edificio": "img/edf3.png",
        "nombre": "Salon",
    }
];


$('#galeria').load(function() {

    var x = 0;
    var foto = document.getElementsByClassName("cajita");
    var fotoin = document.getElementsByClassName("cajita2");

    document.write("<section id='galeria'>");
    document.write("<div id='contenedorI'>");
    for (x = 0; x < perfiles.length; x++) {
        document.write("<div id='jk1' class='cajita'>");
        foto[x].style.backgroundImage = "url('" + perfiles[x].foto + "')";
        document.write("<div id='jk2' class='cajita2'>");
        fotoin[x].style.backgroundImage = "url('" + perfiles[x].edificio + "')";
        document.write("</div>");
        document.write("</div>");
    }
    document.write("</div>");
    document.write("</section>");
});