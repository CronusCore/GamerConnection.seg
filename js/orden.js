var orden = [
    {
        "id": '1',
        "Nombre": "Mortal Kombat 11",
        "precio": "1400",
        "stock": "12",
        "imagen": "http://drive.google.com/uc?export=view&id=1pg_rddEzzjmW6nkj2qHVIvVmiAnZGA-0",
        "fecha": '19/sep/2022'

    },

    {
        "id": '2',
        "Nombre": "Minecraft",
        "precio": "700",
        "stock": "23",
        "imagen": "http://drive.google.com/uc?export=view&id=1VFhydqsDFcZ8c-p1MV6zET30hawyuyJm",
        "fecha": '19/sep/2022'
        
    },

    {
        "id": '3',
        "Nombre": "TLoZ: Breath of the Wild",
        "precio": "1600",
        "stock": "14",
        "imagen": "http://drive.google.com/uc?export=view&id=1XJNNjBaxZkGMujcB7-zHwnPpPxtPnOex",
        "fecha": '19/sep/2022'
    },


]

$(document).ready(function () {

    $('#orden').html(orden.map(orden => `
    <tr id="${orden.id}">
    <td><img src="${orden.imagen}" id="l3i"alt="" style="max-width: 100px;"></td>
    <td id="l3">${orden.Nombre}</td>
    <td id="l3p">${orden.precio}</td>
    <td id="l3s">${orden.stock}</td>
    <td>${orden.fecha}
    </td>
</tr>
    `),


    );
});