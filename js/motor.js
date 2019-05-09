$(document).ready(function() {
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();
        if (scroll > 10) {
            $(".black").css("boxShadow", "0 px - 5 px 13 px - 1 px rgba(214, 214, 214, 1)");
        } else {
            $(".black").css("background", "white");
        }
    });


// PISOS

   
/*

});
var pisos = [{
    "foto_grande": "img/4.jpg",
    "foto_pequena": "img/edf1.jpg",
    "info_titulo": "Travel and Leisure",
    "tipo": "Apartment",
    "precio": "130.000 €",
    "habitaciones": "4",
    "banos": "2",
},
{
    "titulo": "A unique balance of luxury life",
    "foto_grande": "img/4.jpg",
    "foto_pequena": "img/edf1.jpg",
    "info_titulo": "Travel and Leisure",
    "titulo2": "Premium leases availible",
    "tipo": "Apartment",
    "precio": "130.000 €",
    "habitaciones": "4",
    "banos": "2",
},
];

$('#master').load(function() {
    
    var plantilla= `
    <div class="apartamento"> 
        <div class="abajo">
            <div class="titulo">
                <h3>${pisos.titulo}</h3>
                <h5>${pisos.titulo2}</h5>
                <a href="#">for sale </a>
            </div>
            <div class="apart_info">
            <img id="img_p_1" class="img_peque" src="${pisos.foto_grande}" alt="">
            <div class="txt_info">
                <div class="txt_info_cap animated fast fadeIn">
                    <h4>${pisos.info_titulo}</h4>
                    <p>${pisos.tipo}</p>
                    <div>
                        <h3>${pisos.precio} €</h3>
                        <div class="texto_info_peque_p">
                            <p>${pisos.banos} baños</p>
                            <p>${pisos.habitaciones} habitaciones</p>
                        </div>
                    </div>
                </div>
                <div class="txt_info_cap_info animated fast fadeIn">
                    <a href="#">
                        Ver 
                    </a>
                </div>
            </div>
            <img id="img_g_1" class="img_grande" src="${pisos.foto_pequena}" alt="">
        </div>
    </div> 
    `;
     
  
     
    var master= document.getElementsByTagName("master");
   
    master.innerHTML=plantilla;
   
   
} );


$('#galeria').load(function() {


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
*/