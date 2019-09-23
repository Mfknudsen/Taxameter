class PricePool{
    constructor(){
        this.Name = "City Bilen";

        this.PPKM = 4.5;
        this.PPM = 7;
        this.BP = 75;
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