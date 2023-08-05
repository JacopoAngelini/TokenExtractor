var tokenGiocatore;
var tokenMaster;
var blues = [];
var reds = [];
var total = [];
var numeroEstratto;

function info(){
    alert('1)Inserire il numero dei token in entrambi i campi\n2)Prima estrazione cliccare estrai\n3)Per estrazioni successive cliccare estrai di nuovo\n4)Per cambiare numero di token inserire i nuovi valori nei campi e cliccare estrai per ricominciare le estrazioni')
}

function estraiDiNuovo() {
    document.getElementById('risultato').innerHTML = '';
    numeroEstratto = Math.floor(Math.random() * total.length);

    if(numeroEstratto != undefined){
        valutazioneToken();
        console.log(total)
    }
    else{
        document.getElementById('risultato').innerHTML += '<p>inserisci i numeri nei campi predecendi e usa prima il bottone etrai</p>';
    }
  
}

function valutazioneToken() {

    if(total[numeroEstratto] == 'B') {
        document.getElementById('risultato').innerHTML += '<p style="color:blue; font-weight:700">Il token estratto è: blu</p>';
        blues.pop()
    }
    if(total[numeroEstratto] == 'R') {
        document.getElementById('risultato').innerHTML += '<p style="color:red; font-weight:700">Il token estratto è: rosso</p>';
        reds.pop()
    }
    if(total[numeroEstratto] == undefined){
        document.getElementById('risultato').innerHTML += '<p style="color:brown; font-weight:700">Riempire i campi precedenti</p>';
    }
    total.splice(numeroEstratto, 1);
    console.log('totale dopo estrazione ' + total)
    document.getElementById('risultato').innerHTML += '<p >Numero token rimanenti: '+ total.length +', di cui <span style="color:blue">'+ blues.length +' blu</span> e  <span style="color:red"> '+ reds.length +' rossi</span></p>'
   
}

function estraiToken () {
    document.getElementById('risultato').innerHTML = '';

    tokenGiocatore = document.getElementById('tokenGiocatore').value;
    tokenMaster = document.getElementById('tokenMaster').value;
    
    blues.length = 0;
    reds.length = 0;

    for (let i = 0; i < tokenGiocatore; i++) {
        blues.push('B')
    }
    for (let i = 0; i < tokenMaster; i++) {
        reds.push('R')
    }

    total = reds.concat(blues);
    numeroEstratto = Math.floor(Math.random() * total.length);

    console.log('totale prima dell estrazione ' + total)

    valutazioneToken()

}