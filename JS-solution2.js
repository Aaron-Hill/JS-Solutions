

var alp = 1;
var bet = 2;
var gam = 0;
var tote = 0;

while (alp < 4000000) {

  if(alp % 2 === 0) {
    sum += alp;
  }
  gam = alp + bet;
  alp = bet;
  bet = gam;

}