# Tester

## Testfall 1 - Stad

#### Test 1.1
Beskrivning: Diagram över väderdata visas om användaren anger en giltig stad.

Steg:
Ange "Stockholm" och klicka sedan på "Generate Diagram".

Förväntad utdata:
Diagram över väderdata visas.


#### Test 1.2
Beskrivning: Diagram över väderdata visas om namnet på staden är skrivet i versaler.

Steg: 
Ange "UPPSALA" och klicka sedan på "Generate Diagram".

Förväntad utdata:
Diagram över väderdata visas.


#### Test 1.3
Förkrav: Testfall 1, Test 1.1.

Beskrivning: Diagram över luftfuktighet och vindhastighet uppdateras om användaren anger en annan giltig stad.

Steg: Ange "Tokyo" och klicka sedan på "Generate Diagram".

Förväntad utdata:
Diagrammen uppdateras med ny väderdata.


## Testfall 2 - Layout

#### Test 2.1 
Beskrivning: Diagram för väderdata skapas per dag.

Steg:
Ange "Stockholm" och klicka sedan på "Generate Diagram"

Förväntad utdata:
En ljusblå ruta visas per dag och innehåller det aktuella datumet, diagram för luftfuktighet och diagram för vindhastighet.


#### Test 2.2 
Beskrivning: Diagram för väderdata skapas på en rad.

Steg: 
Ange "Stockholm" och klicka sedan på "Generate Diagram".

Förväntad utdata:
Diagram för luftfuktighet och diagram för vindhastighet visas på en rad.


#### Test 2.3
Beskrivning: Diagram för väderdata skapas med en titel ovanför.

Steg: 
Ange "Stockholm" och klicka sedan på "Generate Diagram".

Förväntad utdata: 
Väderdata visas med en titel ovanför respektive diagram.



## Testfall 3 - Lokal tid

#### Test 3.1
Beskrivning: Väderdata visas baserat på lokal tid i den stad som är vald.

Steg: 
Ange "Stockholm" och klicka sedan på "Generate Diagram".

Förväntad utdata:
Väderdata visas, baserat på den lokala tiden i Stockholm.


#### Test 3.2
Beskrivning: Värderdata visas baserat på lokal tid i den stad som är vald, när lokal tid är efter UTC.

Steg: 
Ange "Miami" och klicka sedan på "Generate Diagram".

Förväntad utdata:
Väderdata visas, baserat på den lokala tiden i Miami.


#### Test 3.3
Beskrivning: Väderdata visas baserat på lokal tid i den stad som är vald, när lokal tid är innan UTC.

Steg:
Ange "Tokyo" och klicka sedan på "Generate Diagram".

Förväntad utdata:
Väderdata visas, baserat på den lokala tiden i Tokyo.


## Testfall 4 - Felmeddelanden

#### Test 4.1
Beskrivning: Ett felmeddelande visas när en stad inte är giltig.

Steg: 
Ange "Stockhol" och klicka sedan på "Generate Diagram".

Förväntad utdata:
Ett meddelande "City not available"

#### Test 4.2
Beskrivning: Ett felmeddelande visas när det anges något annat än en stad.

Steg:
Ange "28574!" och klicka sedan på "Generate Diagram".

Förväntad utdata:
Ett meddelande "City not available"


#### Test 4.3
Beskrivning: Ett felmeddelande visas när input lämnas tomt.

Steg:
Fyll inte i input, men klicka på "Generate Diagram".

Förväntad utdata:
Ett meddelande "City not available"
