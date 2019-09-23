class PricePool{
    constructor(){
        this.Name = "Krone Taxa";

        this.PPKM = 8.5;
        this.PPM = 6.25;
        this.BP = 39;
        this.KMR = 4
    }
    n(){
        return this.Name;
    }

    ppkm(){
        return this.PPKM;
    }

    ppm(){
        return this.PPM;
    }

    bp(){
        return this.BP;
    }

    kmr(){
        return this.KMR;
    }
}

var Prices = new PricePool();
start(new Taxameter(Prices));