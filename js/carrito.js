var carritos = [
    {
        "id": '8',
        "Nombre": "GTA V",
        "precio": "547",
        "stock": "10",
        "descripcion": "En la ciudad de los Angeles, encarna a tres iconicos personajes y cumple cualquier mision.",
        'info': `Clasificación del juego: C Adultos +18 Años
        Grand Theft Auto V: Edición Premium —disponible para PS4, Xbox One y PC— incluye la trama completa de Grand Theft Auto V, el mundo en constante evolución de Grand Theft Auto Online y todas las as y contenidos existentes, como El Golpe del Fin del Mundo, Tráfico de armas, Contrabando, Motociclistas y mucho más.`,
        "imagen": "http://drive.google.com/uc?export=view&id=1mYSUgLIHvfaoFnPBipzYsjyBzDvBK9WT",
        "genero": "Accion",
        'eliminar': 'eliminar1()'

    },

    {
        "id": '9',
        "Nombre": "Super Mario Odyssey",
        "precio": "1400",
        "stock": "15",
        "descripcion": "Una nueva aventura de Mario, en donde nuevamente tendras que salvar a la princesa.",
        'info': `Clasificación del juego: B +12 Años
        Acompaña a Mario en una aventura en 3D enorme por todo el planeta usando sus nuevas habilidades para recoger lunas que servirán de combustible a tu aeronave, la Odyssey`,
        "imagen": "http://drive.google.com/uc?export=view&id=1wWK9NWS2y54Bzs6Fvddd4b0tUDMYLtkh",
        "genero": "Aventura",
        'eliminar': 'eliminar2()'

    },

    {
        "id": '10',
        "Nombre": "Killer Instinc",
        "precio": "550",
        "stock": "13",
        "descripcion": "El mejor juego de peleas de toda la historia. Juega contra tus amigos en un combate a muerte",
        'info': `Killer Instinct: Definitive Edition includes all 26 characters and 20 stages from Seasons 1-3, Killer Instinct Classic 1&2, Killer Instinct Original Soundtrack, and a bonus skin pack, Gold Gargos.
        Explore the lore, characters and music of Killer Instinct with exclusive behind-the-scenes videos, artwork and an original game soundtrack.`,
        "imagen": "http://drive.google.com/uc?export=view&id=1X_v-XKuZgsVepw6-Beaxme-UdtuwxFz-",
        "genero": "Pelea",

        'eliminar': 'eliminar3()'

    }
]


if (localStorage.getItem('carrito') == null) {
    localStorage.setItem('carrito', JSON.stringify(carritos))
 } else {
     
 }

carritoMod = localStorage.getItem('carrito')
carritoMod = JSON.parse(carritoMod)
console.log(carritoMod)


var subtotal = 0;
$(document).ready(function () {

    $('#objCard').html(carritoMod.map(carrito => `
    <div class="product" id='${carrito.id}'>
    <div  id="card3" class="row">
        <div class="col-md-3" style="margin:20px">
            <img class="img-fluid mx-auto d-block image" style="max-width: 150px; max-heigth:100px"src="${carrito.imagen}" id="l3i">
        </div>
        <div class="col-md-8">
            <div class="info">
                <div class="row">
                    <div class="col-md-5 product-name">
                        <div class="product-name">
                            <a href="#" id="c${carrito.id}">${carrito.Nombre}</a>
                            <div class="product-info">
                                <div>Precio: <span class="value" id="cp${carrito.id}">${carrito.precio}</span></div>
                                <div>Disponible: <span class="value" id="cs${carrito.id}">${carrito.stock}</span></div>
                                <div>Genero: <span class="value" id="cg${carrito.id}">${carrito.genero}</span></div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4 quantity">
                        <label for="quantity">Cantidad:</label>
                        <input id="cc${carrito.id}" type="number" min="1" max="${carrito.stock}"
                            class="form-control quantity-input">
                            <button type="button" class="btn btn-danger" style="wpidth: 130px;" onclick=${carrito.eliminar}>Eliminar</button>
                        
                    </div>
    
                </div>
            </div>
        </div>
    </div>
    </div>
    `),


    );
});


function addMk() {
    alert('El producto se ha agregado correctamente')
    carritoMod = localStorage.getItem('carrito')
    carritoMod = JSON.parse(carritoMod)

    carritoMod.push({
        "id": '1',
        "Nombre": "Mortal Kombat 11",
        "precio": "1400",
        "stock": "12",
        "descripcion": "Pelea con tus personajes favoritos y obten la victoria.",
        'info': `Clasificación del juego: C Adultos +18 Años
        El nuevo modo de Variación de Personaje te da un control único para poder personalizar a los peleadores y hacerlos como a ti te gusta.
        El nuevo sistema de gráficos que exhíbe cada brutal y apantallante momento del juego, te hace experimentar las batallas tan de cerca que puedes casi sentirlas.
        Con una plantilla de personajes nuevos y Klásicos, el cinemático e incomparable Modo Historia continúa la épica saga de Mortal Kombat que lleva construyéndose desde hace más de 25 años.`,
        "imagen": "http://drive.google.com/uc?export=view&id=1pg_rddEzzjmW6nkj2qHVIvVmiAnZGA-0",
        "genero": "Pelea",
        'eliminar': 'eliminar4()'
    })

    localStorage.setItem('carrito', JSON.stringify(carritoMod))
    console.log(JSON.parse(localStorage.getItem('carrito')))

}


function addMine() {
    alert('El producto se ha agregado correctamente')
    carritoMod = localStorage.getItem('carrito')
    carritoMod = JSON.parse(carritoMod)


    carritoMod.push({
        "id": '2',
        "Nombre": "Minecraft",
        "precio": "700",
        "stock": "23",
        "descripcion": "Disfruta la vida en un mundo cuadrado, juega con tus amigos haciendo construcciones.",
        'info': `Clasificación del juego: B +12 Años
        Construye todo lo que puedas imaginar en el modo Creativo, o realiza grandes expediciones en Survival a través de tierras misteriosas y en las profundidades de sus propios mundos infinitos
        Descubre creaciones comunitarias y comparte la aventura con amigos en diferentes plataformas
        Mojang 2009-2018; "Minecraft" es una marca registrada de Mojang Synergies AB
        El modo multijugador en línea requiere una suscripción al servicio en línea (se vende por separado) y una conexión de red; el modo multijugador en línea será gratuito hasta que se inicie el servicio Nintendo Switch Online en 2018`,
        "imagen": "http://drive.google.com/uc?export=view&id=1VFhydqsDFcZ8c-p1MV6zET30hawyuyJm",
        "genero": "Aventura",
        'eliminar': 'eliminar5()'
    })

    localStorage.setItem('carrito', JSON.stringify(carritoMod))
    console.log(JSON.parse(localStorage.getItem('carrito')))
}

function addZelda() {
    alert('El producto se ha agregado correctamente')
    carritoMod = localStorage.getItem('carrito')
    carritoMod = JSON.parse(carritoMod)


    carritoMod.push({
        "id": '3',
        "Nombre": "TLoZ: Breath of the Wild",
        "precio": "1600",
        "stock": "14",
        "descripcion": "Defiende el mundo de Hyrule y rescata a la princesa Zelda",
        'info': `Clasificación del juego: B +12 Años
        Entra en un Mundo de Aventura
        Explora las tierras de Hyrule como mas te guste
        Mas de 100 santuarios que Descubrir y Explorar
        un nuevo juego de la aclamada serie que rompe con las convenciones`,
        "imagen": "http://drive.google.com/uc?export=view&id=1XJNNjBaxZkGMujcB7-zHwnPpPxtPnOex",
        "genero": "Aventura",
        'eliminar': 'eliminar6()'
    })

    localStorage.setItem('carrito', JSON.stringify(carritoMod))
    console.log(JSON.parse(localStorage.getItem('carrito')))
}

function addSmash() {
    alert('El producto se ha agregado correctamente')
    carritoMod = localStorage.getItem('carrito')
    carritoMod = JSON.parse(carritoMod)


    carritoMod.push({
        "id": '4',
        "Nombre": "Super Smash Brothers Ultimate",
        "precio": "1600",
        "stock": "21",
        "descripcion": "Pelea con tus personajes favoritos de Nintendo y obten la victoria contra tus amigos.",
        'info': `Clasificación del juego: B +12 Años
        ¡una nueva entrada en la serie Super Smash Bros. para el sistema Nintendo Switch !
        Nuevos luchadores, como Inkling de la serie Splatoon y Ridley de la serie Metroid, hacen su debut en la serie Super Smash Bros
        Combates rápidos, nuevos elementos, nuevos ataques, nuevas opciones defensivas y más mantendrán la batalla en rabia, ya sea que estés en casa o en movimiento`,
        "imagen": "http://drive.google.com/uc?export=view&id=1r8BJ78YZ4O0v3j_Ti33MOwXCyDRWu7CR",
        "genero": "Pelea",
        'eliminar': 'eliminar7()'
    })

    localStorage.setItem('carrito', JSON.stringify(carritoMod))
    console.log(JSON.parse(localStorage.getItem('carrito')))
}

function addSK() {
    alert('El producto se ha agregado correctamente')
    carritoMod = localStorage.getItem('carrito')
    carritoMod = JSON.parse(carritoMod)


    carritoMod.push({
        "id": '5',
        "Nombre": "Sekiro Shadows Die Twice",
        "precio": "1200",
        "stock": "11",
        "descripcion": "Como un buen maestro de la espada, elimina a todos tus enemigos.",
        'info': `Carve your own clever path to vengeance in an all-new adventure from developer fromsoftware;Take revenge. Restore your honor. Kill ingeniously;Explore late 1500S sengoku Japan, a brutal period of constant life and death conflict, as you come face to face with larger than life foes in a dark and twisted world
        Explore late 15S sengoku Japan, a brutal period of constant life and death conflict, as you come face to face with larger than life foes in a dark and twisted world
        Take revenge. Restore your honor. Kill ingeniously`,
        "imagen": "http://drive.google.com/uc?export=view&id=1XF1Y0o5RdjnXJr0ja79ggaQlT5pLjO67",
        "genero": "Aventura",
        'eliminar': 'eliminar8()'
    })

    localStorage.setItem('carrito', JSON.stringify(carritoMod))
    console.log(JSON.parse(localStorage.getItem('carrito')))
}


function addR() {
    alert('El producto se ha agregado correctamente')
    carritoMod = localStorage.getItem('carrito')
    carritoMod = JSON.parse(carritoMod)


    carritoMod.push({
        "id": '6',
        "Nombre": "Resident Evil 2",
        "precio": "700",
        "stock": "6",
        "descripcion": "Adentrate en el mundo de los zombies, trata de sobrevivir sin ser infectado.",
        'info': `A whole new perspective – New over-the-shoulder camera mode and modernized control scheme creates a more modern take on the survival horror experience and offers players a trip down memory lane with the original gameplay modes from the 1998 release.
        Terrifyingly realistic visuals – Built on Capcom’s proprietary RE Engine, Resident Evil 2 delivers breathtakingly photorealistic visuals in 4K whilst stunning lighting creates an up-close, intense and atmospheric experience as players roam the corridors of the Raccoon City Police Department (RPD).`,
        "imagen": "http://drive.google.com/uc?export=view&id=1HDGvMVjD2TRbT176g9G3uD7hQa1x9myr",
        "genero": "Horror",
        'eliminar': 'eliminar9()'
    })

    localStorage.setItem('carrito', JSON.stringify(carritoMod))
    console.log(JSON.parse(localStorage.getItem('carrito')))
}



function addSP() {
    alert('El producto se ha agregado correctamente')
    carritoMod = localStorage.getItem('carrito')
    carritoMod = JSON.parse(carritoMod)


    carritoMod.push({

        "id": '7',
        "Nombre": "Spider-Man",
        "precio": "1200",
        "stock": "6",
        "descripcion": "Jega como tu heroe favorito y buen vecino, Spider-man, salvando a todo el mundo.",
        'info': `Clasificación del juego: B15 +15 Años
        Una auténtica aventura de Spider-Man. Sony Interactive Entertainment, Insomniac Games y Marvel se han unido para crear una auténtica aventura de Spider-Man. Este no es el Hombre Araña que conocías o que habías visto antes. Este es un experimentado Peter Parker quien es extraordinario en la lucha contra el crimen en la Nueva York de Marvel. Quien, al mismo tiempo, está luchando por equilibrar su caótica vida personal y su carrera mientras el destino de millones de neoyorquinos descansa sobre sus hombros.`,
        "imagen": "http://drive.google.com/uc?export=view&id=13uvwCDmQXrhSAngfctAyOeY_JBvmfUhL",
        "genero": "Accion",
        'eliminar': 'eliminar10()'
    })

    localStorage.setItem('carrito', JSON.stringify(carritoMod))
    console.log(JSON.parse(localStorage.getItem('carrito')))
}

function addGTA() {
    alert('El producto se ha agregado correctamente')
    carritoMod = localStorage.getItem('carrito')
    carritoMod = JSON.parse(carritoMod)


    carritoMod.push({

        "id": '8',
        "Nombre": "GTA V",
        "precio": "547",
        "stock": "10",
        "descripcion": "En la ciudad de los Angeles, encarna a tres iconicos personajes y cumple cualquier mision.",
        'info': `Clasificación del juego: C Adultos +18 Años
        Grand Theft Auto V: Edición Premium —disponible para PS4, Xbox One y PC— incluye la trama completa de Grand Theft Auto V, el mundo en constante evolución de Grand Theft Auto Online y todas las as y contenidos existentes, como El Golpe del Fin del Mundo, Tráfico de armas, Contrabando, Motociclistas y mucho más.`,
        "imagen": "http://drive.google.com/uc?export=view&id=1mYSUgLIHvfaoFnPBipzYsjyBzDvBK9WT",
        "genero": "Accion",
        'eliminar': 'eliminar1()'
    })

    localStorage.setItem('carrito', JSON.stringify(carritoMod))
    console.log(JSON.parse(localStorage.getItem('carrito')))
}

function addMario() {
    alert('El producto se ha agregado correctamente')
    carritoMod = localStorage.getItem('carrito')
    carritoMod = JSON.parse(carritoMod)


    carritoMod.push({

        "id": '9',
        "Nombre": "Super Mario Odyssey",
        "precio": "1400",
        "stock": "15",
        "descripcion": "Una nueva aventura de Mario, en donde nuevamente tendras que salvar a la princesa.",
        'info': `Clasificación del juego: B +12 Años
        Acompaña a Mario en una aventura en 3D enorme por todo el planeta usando sus nuevas habilidades para recoger lunas que servirán de combustible a tu aeronave, la Odyssey`,
        "imagen": "http://drive.google.com/uc?export=view&id=1wWK9NWS2y54Bzs6Fvddd4b0tUDMYLtkh",
        "genero": "Aventura",
        'eliminar': 'eliminar2()'
    })

    localStorage.setItem('carrito', JSON.stringify(carritoMod))
    console.log(JSON.parse(localStorage.getItem('carrito')))
}

function addKiller() {
    alert('El producto se ha agregado correctamente')
    carritoMod = localStorage.getItem('carrito')
    carritoMod = JSON.parse(carritoMod)


    carritoMod.push({

        "id": '10',
        "Nombre": "Killer Instinc",
        "precio": "550",
        "stock": "13",
        "descripcion": "El mejor juego de peleas de toda la historia. Juega contra tus amigos en un combate a muerte",
        'info': `Killer Instinct: Definitive Edition includes all 26 characters and 20 stages from Seasons 1-3, Killer Instinct Classic 1&2, Killer Instinct Original Soundtrack, and a bonus skin pack, Gold Gargos.
        Explore the lore, characters and music of Killer Instinct with exclusive behind-the-scenes videos, artwork and an original game soundtrack.`,
        "imagen": "http://drive.google.com/uc?export=view&id=1X_v-XKuZgsVepw6-Beaxme-UdtuwxFz-",
        "genero": "Pelea",

        'eliminar': 'eliminar3()'
    })

    localStorage.setItem('carrito', JSON.stringify(carritoMod))
    console.log(JSON.parse(localStorage.getItem('carrito')))
}


function eliminar1() {
    carritoMod = localStorage.getItem('carrito')
    carritoMod = JSON.parse(carritoMod)

    console.log(carritoMod)

    carritoMod = carritoMod.filter((item) => item.id != 8)

    console.log(carritoMod)

    localStorage.setItem('carrito', JSON.stringify(carritoMod))
    console.log(JSON.parse(localStorage.getItem('carrito')))

}
function eliminar2() {
    carritoMod = localStorage.getItem('carrito')
    carritoMod = JSON.parse(carritoMod)

    console.log(carritoMod)

    carritoMod = carritoMod.filter((item) => item.id != 9)

    console.log(carritoMod)

    localStorage.setItem('carrito', JSON.stringify(carritoMod))
    console.log(JSON.parse(localStorage.getItem('carrito')))



}

function eliminar3() {
    carritoMod = localStorage.getItem('carrito')
    carritoMod = JSON.parse(carritoMod)

    console.log(carritoMod)

    carritoMod = carritoMod.filter((item) => item.id != 10)

    console.log(carritoMod)

    localStorage.setItem('carrito', JSON.stringify(carritoMod))
    console.log(JSON.parse(localStorage.getItem('carrito')))

}
function eliminar4() {
    carritoMod = localStorage.getItem('carrito')
    carritoMod = JSON.parse(carritoMod)

    console.log(carritoMod)

    carritoMod = carritoMod.filter((item) => item.id != 1)

    console.log(carritoMod)

    localStorage.setItem('carrito', JSON.stringify(carritoMod))
    console.log(JSON.parse(localStorage.getItem('carrito')))

}
function eliminar5() {
    carritoMod = localStorage.getItem('carrito')
    carritoMod = JSON.parse(carritoMod)

    console.log(carritoMod)

    carritoMod = carritoMod.filter((item) => item.id != 2)

    console.log(carritoMod)

    localStorage.setItem('carrito', JSON.stringify(carritoMod))
    console.log(JSON.parse(localStorage.getItem('carrito')))

}
function eliminar6() {
    carritoMod = localStorage.getItem('carrito')
    carritoMod = JSON.parse(carritoMod)

    console.log(carritoMod)

    carritoMod = carritoMod.filter((item) => item.id != 3)

    console.log(carritoMod)

    localStorage.setItem('carrito', JSON.stringify(carritoMod))
    console.log(JSON.parse(localStorage.getItem('carrito')))

}
function eliminar7() {
    carritoMod = localStorage.getItem('carrito')
    carritoMod = JSON.parse(carritoMod)

    console.log(carritoMod)

    carritoMod = carritoMod.filter((item) => item.id != 4)

    console.log(carritoMod)

    localStorage.setItem('carrito', JSON.stringify(carritoMod))
    console.log(JSON.parse(localStorage.getItem('carrito')))

}
function eliminar8() {
    carritoMod = localStorage.getItem('carrito')
    carritoMod = JSON.parse(carritoMod)

    console.log(carritoMod)

    carritoMod = carritoMod.filter((item) => item.id != 5)

    console.log(carritoMod)

    localStorage.setItem('carrito', JSON.stringify(carritoMod))
    console.log(JSON.parse(localStorage.getItem('carrito')))

}
function eliminar9() {
    carritoMod = localStorage.getItem('carrito')
    carritoMod = JSON.parse(carritoMod)

    console.log(carritoMod)

    carritoMod = carritoMod.filter((item) => item.id != 6)

    console.log(carritoMod)

    localStorage.setItem('carrito', JSON.stringify(carritoMod))
    console.log(JSON.parse(localStorage.getItem('carrito')))

}
function eliminar10() {
    carritoMod = localStorage.getItem('carrito')
    carritoMod = JSON.parse(carritoMod)

    console.log(carritoMod)

    carritoMod = carritoMod.filter((item) => item.id != 7)

    console.log(carritoMod)

    localStorage.setItem('carrito', JSON.stringify(carritoMod))
    console.log(JSON.parse(localStorage.getItem('carrito')))

}













