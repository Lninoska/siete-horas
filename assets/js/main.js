function mostrarhorachile() {
    let hora = new Date ()

    let horachilena = hora.toLocaleTimeString('es-CL',{
        timeZone:'America/Santiago',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
    })
    document.getElementsByClassName("hora-chilena")[0].innerHTML = `${horachilena}`;    
}
function mostrarhorafrancia (){
    let hora = new Date ()

    let horafrancia = hora.toLocaleTimeString('es-CL',{
        timeZone:'Europe/Paris',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
    })
    document.getElementsByClassName("hora-francia")[0].innerHTML = `${horafrancia}`;
}
function mostrarhoraUK(){
    let hora = new Date()

    let londres = hora.toLocaleTimeString('es-CL', {
        timeZone:'Europe/London',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
    })
    document.getElementsByClassName('hora-londres')[0].innerHTML =`${londres}`
}
function mostrarhoraNY(){
    let hora = new Date()

    let newyork = hora.toLocaleTimeString('es-CL', {
        timeZone:'America/New_York',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
    })
    document.getElementsByClassName('hora-ny')[0].innerHTML =`${newyork}`
}

function mostrarhoraSP(){
    let hora = new Date()

    let rusia = hora.toLocaleTimeString('es-CL', {
        timeZone:'Europe/Moscow',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
    })
    document.getElementsByClassName('hora-SP')[0].innerHTML =`${rusia}`
}
function mostrarhorachina(){
    let hora = new Date()

    let china = hora.toLocaleTimeString('es-CL', {
        timeZone:'Asia/Shanghai',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
    })
    document.getElementsByClassName('hora-china')[0].innerHTML =`${china}`
}
function mostrarhoracoreana(){
    let hora = new Date()

    let horacoreana = hora.toLocaleTimeString('es-CL', {
        timeZone:'Asia/Seoul',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
    })
    document.getElementsByClassName('hora-coreana')[0].innerHTML =`${horacoreana}`
}


setTimeout(mostrarhorachile, 1000);
setTimeout(() => setInterval(mostrarhorafrancia, 1000), 4000);
setTimeout(() => setInterval(mostrarhoraUK, 1000), 8000);
setTimeout(() => setInterval(mostrarhoraNY, 1000), 12000);
setTimeout(() => setInterval(mostrarhoraSP, 1000), 16000);
setTimeout(() => setInterval(mostrarhorachina, 1000), 20000);
setTimeout(() => setInterval(mostrarhoracoreana, 1000), 24000);