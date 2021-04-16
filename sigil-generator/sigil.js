
var sigils = [
    '<img src="./sigil/img/sigil-01.png">', 
    '<img src="./sigil/img/sigil-02.png">',
    '<img src="./sigil/img/sigil-03.png">',
    '<img src="./sigil/img/sigil-04.png">',
    '<img src="./sigil/img/sigil-05.png">', 
    '<img src="./sigil/img/sigil-06.png">',
    '<img src="./sigil/img/sigil-07.png">',
    '<img src="./sigil/img/sigil-08.png">',
    '<img src="./sigil/img/sigil-09.png">',
    '<img src="./sigil/img/sigil-10.png">',
    '<img src="./sigil/img/sigil-11.png">',
    '<img src="./sigil/img/sigil-12.png">',
    '<img src="./sigil/img/sigil-13.png">',
    '<img src="./sigil/img/sigil-14.png">',
    '<img src="./sigil/img/sigil-15.png">',
    '<img src="./sigil/img/sigil-16.png">',
    '<img src="./sigil/img/sigil-17.png">',
    '<img src="./sigil/img/sigil-18.png">',
    '<img src="./sigil/img/sigil-19.png">',
    '<img src="./sigil/img/sigil-20.png">',
    '<img src="./sigil/img/sigil-21.png">',
    '<img src="./sigil/img/sigil-22.png">',
    '<img src="./sigil/img/sigil-23.png">',
    '<img src="./sigil/img/sigil-24.png">',
    '<img src="./sigil/img/sigil-25.png">',
    '<img src="./sigil/img/sigil-26.png">',
    '<img src="./sigil/img/sigil-27.png">',
    '<img src="./sigil/img/sigil-28.png">',
    '<img src="./sigil/img/sigil-29.png">',
    '<img src="./sigil/img/sigil-30.png">',
]
// var sigils = new Array(); 
//     sigils[0] = new Image();
//     sigils[0].src = './sigil/img/sigil1.png';
//     sigils[1] = new Image();
//     sigils[1].src = './sigil/img/sigil2.png';
//     sigils[2] = new Image();
//     sigils[2].src = './sigil/img/sigil3.png';
//     sigils[3] = new Image();
//     sigils[3].src = './sigil/img/sigil4.png';
//     sigils[4] = new Image();
//     sigils[4].src = './sigil/img/sigil5.png';
//     sigils[5] = new Image();
//     sigils[5].src = './sigil/img/sigil6.png';
//     sigils[6] = new Image();
//     sigils[6].src = './sigil/img/sigil7.png';
//     sigils[7] = new Image();
//     sigils[7].src = './sigil/img/sigil8.png';
//     sigils[8] = new Image();
//     sigils[8].src = './sigil/img/sigil9.png';
//     sigils[9] = new Image();
//     sigils[9].src = './sigil/img/sigil10.png';
//     sigils[10] = new Image();
//     sigils[10].src = '/sigil/img/sigil11.png';
//     sigils[11] = new Image();
//     sigils[11].src = '/sigil/img/sigil12.png';
//     sigils[12] = new Image();
//     sigils[12].src = '/sigil/img/sigil13.png';
//     sigils[13] = new Image();
//     sigils[13].src = '/sigil/img/sigil14.png';
//     sigils[14] = new Image();
//     sigils[14].src = '/sigil/img/sigil15.png';
//     sigils[15] = new Image();
//     sigils[15].src = '/sigil/img/sigil16.png';
//     sigils[16] = new Image();
//     sigils[16].src = '/sigil/img/sigil17.png';
//     sigils[17] = new Image();
//     sigils[17].src = '/sigil/img/sigil18.png';
//     sigils[18] = new Image();
//     sigils[18].src = '/sigil/img/sigil19.png';
//     sigils[19] = new Image();
//     sigils[19].src = '/sigil/img/sigil20.png';
//     sigils[20] = new Image();
//     sigils[20].src = '/sigil/img/sigil21.png';
//     sigils[21] = new Image();
//     sigils[21].src = '/sigil/img/sigil22.png';
//     sigils[22] = new Image();
//     sigils[22].src = '/sigil/img/sigil23.png';
//     sigils[23] = new Image();
//     sigils[23].src = '/sigil/img/sigil24.png';
//     sigils[24] = new Image();
//     sigils[24].src = '/sigil/img/sigil25.png';
//     sigils[25] = new Image();
//     sigils[25].src = '/sigil/img/sigil26.png';

function newSigil() {
    let sigil = "";
    var randUmNumber = Math.ceil(Math.random() * 6);
    for (let i=0; i<randUmNumber; i++ ){
        var randomNumber = Math.floor(Math.random() * (sigils.length));
        sigil = sigil + sigils[randomNumber];
    }
    document.getElementById('sigilDisplay').innerHTML = sigil;
    console.log(randUmNumber);
}

// module.exports = function(){
//   return emojis[Math.floor(Math.random() * emojis.length)];
// };