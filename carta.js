class Carta {
    constructor(seme, valore, imgCarta){
        this.seme = seme
        this.valore = valore
        this.imgCarta = imgCarta
        this.x = 0
        this.y = 0
        this.w = 25
        this.h = 66
    }

    isOnMe(xclick, yclick){
        if(xclick > this.x && xclick < (this.x+w)){
            if(yclick > this.y && yclick < (this.y+h)){
                return tree
            }else{
                return false
            }
        }else{
            return false
        }
    }
}