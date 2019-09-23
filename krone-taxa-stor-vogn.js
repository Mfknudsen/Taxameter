class PricePool{
    constructor(){
        this.Name = "Krone Taxa";

        this.PPKM = 12;
        this.PPM = 6.67;
        this.BP = 69;
        this.KMR = 0;
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