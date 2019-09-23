class PricePool{
    constructor(){
        this.Name = "Elin Rejser";

        this.PPKM = 1000.0;
        this.PPM = 1000.0;
        this.BP = 1000.0;
        this.KMR = 0.0;

        this.COMPppkm = [8.50, 12, 4.5];
        this.COMPppm = [6.25, 6.67, 7];
        this.COMPbp = [39, 69, 75];
        this.COMPkmr = [0, 0, 4];
    }

    n(){
        return this.Name;
    }

    ppkm(){
        let a = this.PPKM;

        for (var i = 0; i < this.COMPppkm.length; i++){
            if(this.COMPppkm[i] < a){
                a = this.COMPppkm[i] - 1;
            }
        }

        this.PPKM = a;

        return this.PPKM;
    }

    ppm(){
        let a = this.PPM;

        for (var i = 0; i < this.COMPppm.length; i++){
            if(this.COMPppm[i] < a){
                a = this.COMPppm[i] - 1;
            }
        }

        this.PPM = a;

        return this.PPM;
    }

    bp(){
        let a = this.BP;

        for (var i = 0; i < this.COMPbp.length; i++){
            if(this.COMPbp[i] < a){
                a = this.COMPbp[i] - 1;
            }
        }

        this.BP = a;

        return this.BP;
    }

    kmr(){
        let a = this.KMR;

        for (var i = 0; i < this.COMPkmr.length; i++){
            if(this.COMPkmr[i] > a){
                a = this.COMPkmr[i] + 1;
            }
        }

        this.KMR = a;

        return this.KMR;
    }
}

var Prices = new PricePool();
start(new Taxameter(Prices));