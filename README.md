# Taxameter.js
## En opgave i Strategy Pattern

### Opgave 1
    //KroneTaxa skal have udviklet et nyt stykke software til at beregne prisen på en taxa tur, og har bedt dig om hjælp. De har allerede et gammelt system til at vise data'en og interagere med systemet - altså skal de bare have hjælp til en lille del af systemet.

    //Deres prismodel er rimelig simpel: 8,50 kr/km + 6,25 kr/min + 39 kr

    //Implementér (dvs. færdiggør, udfyld de tomme funktioner) klassen Taxameter.js, herunder KroneTaxas prismodel.

Løsning:

I js filen "Taxameter" færdiggjorde jeg de nødvendige funktioner, så km og tid vil gå op og stoppe, samt indsat en funktion som vil udregne prisen når den bliver kaldt. Den bruger km og tid, samt pris per km, pris per tid og base pris.
Den får de forskellige pris værdier fra "krone-taxa", som giver den en funktion kaldet "PricePool" når den starter en ny "Taxameter". 

### Opgave 2
    //KroneTaxa vil også gerne bruge systemet til deres store vogne. Her er prisen: 12 kr/km + 6,67 kr/min + 69 kr.

    //Lav filerne krone-taxa-stor-vogn.js og krone-taxa-stor-vogn.html, og lav Taxameter.js om så den kan genbruges til både normale og store vogne. (Hint: Strategy Pattern. )

Løsning:

Jeg har lavet "krone-taxa-stor-vogn.js" og "krone-taxa-stor-vogn.html".
"krone-taxa-stor-vogn.html" matcher "krone-taxa.html", men har dog ændret det kaldet js script i "krone-taxa-stor-vogn.html" fra "krone-taxa.js" til "krone-taxa-stor-vogn.js"
"krone-taxa-stor-vogn.js" mathcer "krone-taxa.js", men har dog ændret priser til hver værdi til de givet priser i opgaven.

### Opgave 3
    //KroneTaxas konkurrent CityBilen vil gerne købe dit system. De bruger samme brugergrænseflade, så det er lige til at sætte i deres biler. Dog er deres priser en smule anderledes: 4,50 kr pr. påbegyndt km + 7 kr pr. minut, og der er en minimumspris på 75 kr.

    //Lav filerne city-bilen.js og city-bilen.html, og lav Taxameter.js om så den kan genbruges til alle 3 systemer.

Løsning:
Jeg har lavet "city-bilen.js" og "city-bilen.html".
"city-bilen.html" matcher "krone-taxa.html", men har dog ændret det kaldet js script i "city-bilen.html" fra "krone-taxa.js" til "city-bilen.js"
"city-bilen.js" mathcer "krone-taxa.js", men har dog ændret priser til hver værdi til at stemme overens med de givet priser i opgaven.


### Opgave 4
    //KroneTaxas vil gerne være mere konkurrencedygtige på korte ture med normale vogn, og vil gerne ændre deres km pris til:
    //5 kr for den første km, derefter 9 kr/km.

    //Lav de nødvendige ændringer i krone-taxa.js

Løsning:

Har indsat en rabat pris i "krone-taxa.js", som svare til 9-5 og ændret "Taxameter.js" CalcPrice til at udregne prisen for en normal tur og så sige minus rabat prisen.

### Bonus opgave 1 (overkommelig)
    //Udvid Taxameter.js med et firmanavn og en tekstbeskrivelse af prismodellen. Dette kræver at start.js bliver ændret en smule.

Løsning:

I "Taxameter.js" har jeg tilføjet en værdi af "Name", som får en værdi af "Name" fra den "PricePool" som bliver brugt til at skabe den. I "start.js" har jeg tilføjet et nyt element i constanten "elementer" kaldet "name", som lige efter elementer får dens "innerText" til at være det samme som værdien af "Name" fra "Taxameter.js"

Jeg har også opsat en alert som bliver kaldt når man trykker på start, som har den brugte beregningsmodel beskrivet, samt hvorvidt der er en rabat.

### Bonus opgave 2 (svær)
    //Elin Rejser har fået adgang til alle prismodellerne, og deres prismodel er altid den billigste af de andre modeller.

    //Lav filerne elin-rejser.js og elin-rejser.html og genbrug så meget som mulig kode fra de andre systemer uden at have duplikeret kode.

Løsning:

Jeg har lavet "elin-rejser.js" og "elin-rejser.html".
"elin-rejser.html" matcher "krone-taxa.html", men har dog ændret det kaldet js script i "elin-rejser.html" fra "krone-taxa.js" til "elin-rejser.js"
"elin-rejser.js" mathcer "krone-taxa.js", men har dog ændret priser til hver værdi til at stemme overens med de givet priser i opgaven. Har også tilføjet fire arrays som indholder de forskellige priser som "konkurrenterne" bruger. Når hver pris bliver kaldt fra "Taxameter.js" vil den se om en af "konkurrenternes" priser er lavere og hvis det er vil den nye pris være den mindste minus en. Hvis det er rabat, vil det være den størtes plus en.