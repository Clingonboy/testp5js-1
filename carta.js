class Carta {
  constructor(seme, valore, imgCarta) {
    this.seme = seme;
    this.valore = valore;
    this.imgCarta = imgCarta;
    this.x = 0;
    this.y = 0;
    this.w = 100;
    this.h = 260;
    this.dragging = false;
  }
  /**
   *Function that chack if input x y point is on the card
   *@param {number} xclick
   *@param {number} yclick
   */
  isOnMe(xclick, yclick) {
    if (xclick > this.x && xclick < this.x + this.w) {
      if (yclick > this.y && yclick < this.y + this.h) {
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  }
}
