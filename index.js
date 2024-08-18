
// function turnOn() {
//     return document.querySelector('img').src =
//         'https://media3.giphy.com/media/dAoHbGjH7k5ZTeQeBI/giphy.gif';
// }

// function turnOff() {
//     return document.querySelector('img').src =
//         'https://th.bing.com/th/id/OIP.3zDOMH-c_oORS9C7D2xe0QHaHa?rs=1&pid=ImgDetMain';
// }


    $(".turn-on").click(function () {
        $("img").attr("src", "https://media3.giphy.com/media/dAoHbGjH7k5ZTeQeBI/giphy.gif")
    })




    $(".turn-off").click(function () {
        $("img").attr("src", "https://th.bing.com/th/id/OIP.3zDOMH-c_oORS9C7D2xe0QHaHa?rs=1&pid=ImgDetMain")
    })


// $('#theDiv').prepend('<img id="theImg" src="theImg.png" />')
