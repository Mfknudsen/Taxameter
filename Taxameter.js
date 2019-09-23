class Taxameter {
    
    constructor(s) {
        this.Prices = s;
        this.Name = Prices.n();
        this.EntPricePerKM = Prices.ppkm();
        this.EntPricePerMin = Prices.ppm();
        this.EntBasePrice = Prices.bp();
        this.KMReduction = Prices.kmr();
        
        this.Dist = 0.0;
        this.Date = undefined;
        this.min = 0.0;
    }

    StartTrip() {
        this.Date = new Date();
    }

    EndTrip() {
        this.Dist = 0.0;
        this.Date = undefined;
    }

    KMadd(deltaDist) {
        this.Dist += deltaDist;
    }

    CalcPrice() {
            const Price = (this.EntPricePerKM * this.Dist - this.KMReduction) + (this.EntPricePerMin * this.min) + (this.EntBasePrice);
            return Price;
    }
}