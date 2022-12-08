let usuarios = [
    {
        'id':'1',
        'nombre': 'Emmanuel',
        'Apellidos': 'Jimenez Ortiz',
        'email': 'jose@gmail.com',
        'password': '12345678',
        'tel': '4491234567'

    },
    {
        'id':'2',
        'nombre': 'Cesar',
        'Apellidos': 'Martinez Rodriguez',
        'email': 'cesar@gmail.com',
        'password': '12345678',
        'tel': '4491234567'

    },
    {
        'id':'3',
        'nombre': 'Axel',
        'Apellidos': 'Martinez Aleman',
        'email': 'axel@gmail.com',
        'password': '12345678',
        'tel': '4491234567'

    },
    {
        'id':'4',
        'nombre': 'Ernesto',
        'Apellidos': 'Ponce Gomez',
        'email': 'ernesto@gmail.com',
        'password': '12345678',
        'tel': '4491234567'

    }
]
 
if (localStorage.getItem('usuario') == null) {
    localStorage.setItem('usuario', JSON.stringify(usuarios))
 } else {
     
 }
localStorage.setItem('usuario', JSON.stringify(usuarios))
usuarios = localStorage.getItem('usuario')
usuarios = JSON.parse(usuarios)


$(document).ready(function () {

    
    crud = usuarios.map(usuario=>
        `
        <tr >
           
         <th scope="row">${usuario.id}</th>
        <td>${usuario.nombre}</td>
        <td>${usuario.Apellidos}</td>
        <td>${usuario.email}</td>
        <td>${usuario.password}</td>
        <td>${usuario.tel}</td>
        
        </tr>`)
    
    $('#crudU').html(crud)


});




function login() {
    console.log('Hola')
    console.log(document.getElementById('loginemail').value)

    usuarios.map(usuario => {
        if (usuario.email == document.getElementById('loginemail').value && usuario.password == document.getElementById('loginpassword').value) {

            console.log(usuario.nombre)
            if (document.getElementById('loginemail').value == 'jose@gmail.com') {
                location.href = 'Admin.html'
            } else {


                localStorage.setItem('name', usuario.nombre)
                localStorage.setItem('email', usuario.email)
                localStorage.setItem('password', usuario.password)
                localStorage.setItem('tel', usuario.tel)
                localStorage.setItem('apellido', usuario.Apellidos)


                location.href = "Main.html";


            }
        }
    },

    )


}
usuarios = localStorage.getItem('usuario')
usuarios = JSON.parse(usuarios)


function registrar() {
    usuarios = localStorage.getItem('usuario')
    usuarios = JSON.parse(usuarios)
    usuarios.push(
        {
            'nombre': document.getElementById('registrarName').value,
            'Apellidos': document.getElementById('registrarApe').value,
            'email': document.getElementById('registrarEmail').value,
            'password': document.getElementById('registrarPass').value,
            'tel': document.getElementById('tele').value
        }
    )
    localStorage.setItem('usuario', JSON.stringify(usuarios))
    console.log(JSON.parse(localStorage.getItem('usuario')))

        location.href = 'Main.html'
}
