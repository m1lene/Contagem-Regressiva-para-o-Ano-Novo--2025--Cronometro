const diasItens = document.getElementById("dias");
const horasItens = document.getElementById("horas");
const minutosItens = document.getElementById("minutos");
const segundosItens = document.getElementById("segundos");

const anoNovo = "1 Jan 2025";

function contador() {
    const anoNovoDia = new Date(anoNovo);
    const dataHoje = new Date();

    const totalSecundos = (anoNovoDia - dataHoje) / 1000;

    const dias = Math.floor(totalSecundos / 3600 / 24);
    const horas = Math.floor(totalSecundos / 3600) % 24;
    const minutos = Math.floor(totalSecundos / 60) % 60;
    const segundos = Math.floor(totalSecundos) % 60;

    diasItens.innerHTML = dias;
    horasItens.innerHTML = formatarHoras(horas);
    minutosItens.innerHTML = formatarHoras(minutos);
    segundosItens.innerHTML = formatarHoras(segundos);
}

function formatarHoras(time) {
    return time < 10 ? `0${time}` : time;
}

// Corrigir o nome da função para 'contador'
contador();

// Corrigir 'setIntervalo' para 'setInterval'
setInterval(contador, 1000);
