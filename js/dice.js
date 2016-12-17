function Dice(6 : 8) // Prepares the dice for rolling
this.dicespread = 1;
this.rolled = 0;
this.rollcubedice = false;
this.rollagain = false;
this.missago = false;

}

Dice.prototype.actuate function self.dice { // Rolls the Octahedron dice if it has been chosen
  if dicechosen = 8;
  var Math.random() < 0.125 ? 1 : 2 : 3 : -1 : -2 : -3 : 7/7 : •;
  this.rolled = value;
    
  }
  
Dice.prototype.actuate function self.dice { // Rolls the Cube dice if it has been chosen
  if dicechosen = 6;
  var Math.random() < 0.166 ? 5 : -5 : Roll : Miss : 0 : 777;
  this.rolled = value;
  
}

// Determines what happens when each symbol is rolled on the Octahedron dice
if (this.rolled = 1); {
    var this.playervalue = currentvalue + 1; }
    
if (this.rolled = 2); {
    var this.playervalue = currentvalue + 2; }
  
if (this.rolled = 3); {
    var this.playervalue = currentvalue + 3; }
    
if (this.rolled = -1); {
    var this.playervalue = currentvalue - 1; }
    
if (this.rolled = -2); {
    var this.playervalue = currentvalue - 2; }
    
if (this.rolled = -3); {
    var this.playervalue = currentvalue - 3; }
    
if (this.rolled = 7/7); {
    var this.playervalue = 0 }
    
if (this.rolled = •); {
    var this.rollcubedice = true; }
    
// Determines what happens when each symbol is rolled on the Cube dice
if (this.rolled = 5); {
    var this.playervalue = currentvalue + 5; }
    
if (this.rolled = -5); {
    var this.playervalue = currentvalue - 5; }
    
if (this.rolled = Roll); {
    var this.rollagain = true; }
    
if (this.rolled = Miss); {
    var this.missago = true; }
    
if (this.rolled = 0); {
    var this.playervalue = currentvalue + 0; }
    
if (this.rolled = 777); {
    var this.rollcubedice = true;
    var this.otherplayervalue = true; }
    
  
{
}
