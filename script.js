var tokenGiocatore;
var tokenMaster;
var blues = [];
var reds = [];
var total = [];
var numeroEstratto;
var numDaEstrarre;
var tokenEstratti = [];

function inserisciToken() {
  document.getElementById("risultato").innerHTML = "";

  tokenGiocatore = document.getElementById("tokenGiocatore").value;
  tokenMaster = document.getElementById("tokenMaster").value;

  blues.length = 0;
  reds.length = 0;

  for (let i = 0; i < tokenGiocatore; i++) {
    blues.push("B");
  }
  for (let i = 0; i < tokenMaster; i++) {
    reds.push("R");
  }

  total = reds.concat(blues);
  document.getElementById("divNumTokenEstrarre").classList.remove("d-none")
}

function plus() {
  numDaEstrarre = Number(document.getElementById("NumTokenEstrarre").innerHTML);
  if (numDaEstrarre >= total.length) {
    document.getElementById("NumTokenEstrarre").innerHTML = numDaEstrarre;
  } else {
    document.getElementById("NumTokenEstrarre").innerHTML = numDaEstrarre + 1;
  }
}

function minus() {
  numDaEstrarre = Number(document.getElementById("NumTokenEstrarre").innerHTML);
  if (numDaEstrarre <= 0) {
    document.getElementById("NumTokenEstrarre").innerHTML = 0;
  } else {
    document.getElementById("NumTokenEstrarre").innerHTML = numDaEstrarre - 1;
  }
}

function estrai() {
    numDaEstrarre = Number(document.getElementById("NumTokenEstrarre").innerHTML);
    for (let i = 0; i < numDaEstrarre; i++) {
        numeroEstratto = Math.floor(Math.random() * total.length);

        console.log("totale prima dell estrazione " + total);
      
        valutazioneToken(); 
    }
    tokenEstratti.length = 0;
}


function valutazioneToken() {
    if (total[numeroEstratto] == "B") {
      tokenEstratti.push('<span style="color:blue">Blu</span>')
      blues.pop();
    }
    if (total[numeroEstratto] == "R") {
      tokenEstratti.push('<span style="color:red">Rosso</span>')
      reds.pop();
    }
    document.getElementById("risultato").innerHTML = "<p>"+ tokenEstratti +"</p>";
    total.splice(numeroEstratto, 1);
    console.log("totale dopo estrazione " + total);
    document.getElementById("risultato").innerHTML +=
      "<p >Numero token rimanenti: " +
      total.length +
      ', di cui <span style="color:blue">' +
      blues.length +
      ' blu</span> e  <span style="color:red"> ' +
      reds.length +
      " rossi</span></p>";
  }
