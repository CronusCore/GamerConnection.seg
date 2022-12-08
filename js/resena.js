var resenas =[
    {
        'nombre':'Jose Emmanuel',
        'email':'emmanuel@gmail.com',
        'texto':'Me encanto este juego, no puedo parar de jugarlo'

    },
    {
        'nombre':'Cesar Alejandro',
        'email':'cesar@gmail.com',
        'texto':'Uno de mis juegos favoritos, es muy entretenido'

    },
    {
        'nombre':'Axel Giovanni',
        'email':'axel@gmail.com',
        'texto':'No esta tan divertido como dicen, me gusta mas jugar juegos de disparos'

    },
    {
        'nombre':'Ernesto Yael',
        'email':'ernesto@gmail.com',
        'texto':'He jugado mejores videojuegos a menor costo'

    }

]

let resena  = resenas.map(resena =>`
<br>
            <div class="bg-light" style="padding: 30px; border-radius: 10px; border: 5px;">
                <h4>Reseña escrita por ${resena.nombre}</H4>
                <p>Email: ${resena.email}</p>

                <p>${resena.texto}</p>
            </div>
`)
$(document).ready(function () {
    console.log(resena);
    $('#nav-home').html(resena);




});


//funcion de resema

function addResena(){
    let email = document.getElementById('email').value
    let nombre = document.getElementById('nombre').value
    let texto = document.getElementById('texto').value

    resenas.push({'nombre': nombre, 'email':email, 'texto': texto})

    console.log(resenas);

   let resena  = resenas.map(resena =>`
<br>
            <div class="bg-light" style="padding: 30px; border-radius: 10px; border: 5px;">
                <h4>Reseña escrita por ${resena.nombre}</H4>
                <p>Email: ${resena.email}</p>

                <p>${resena.texto}</p>
            </div>
`)
$(document).ready(function () {
    console.log(resena);
    $('#nav-home').html(resena);

    alert('La resena se ha ingresado correctamente')




});
}