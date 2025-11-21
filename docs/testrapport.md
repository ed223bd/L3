# Testrapport

## Testöversikt

### Testfall 1 - Stad

| Vad har testats? | Hur har det testats? | Testresultat |
|------------------|----------------------|------------------|
| Test 1.1 Diagram över väderdata visas om användaren anger en giltig stad. | Manuellt | ✅ |
| Test 1.2 Diagram över väderdata visas om namnet på staden är skrivet i versaler. | Manuellt | ✅ |
| Test 1.3 Diagram över luftfuktighet och vindhastighet uppdateras om användaren anger en annan giltig stad. | Manuellt | ✅ |


### Testfall 2 - Layout

| Vad har testats? | Hur har det testats? | Testresultat |
|------------------|----------------------|------------------|
| Test 2.1 Diagram för väderdata skapas per dag. | Manuellt | ✅ |
| Test 2.2 Diagram för väderdata skapas på en rad | Manuellt | ✅ |
| Test 2.3 Diagram för väderdata skapas med en titel ovanför. | Manuellt | ✅ |


### Testfall 3 - Lokal tid

| Vad har testats? | Hur har det testats? | Testresultat |
|------------------|----------------------|------------------|
| Test 3.1 Väderdata visas baserat på lokal tid i den stad som är vald. | Manuellt | ✅ |
| Test 3.2 Värderdata visas baserat på lokal tid i den stad som är vald, när lokal tid är efter UTC. | Manuellt | ✅ |
| Test 3.3 Väderdata visas baserat på lokal tid i den stad som är vald, när lokal tid är innan UTC. | Manuellt | ✅ |

### Testfall 4 - Felmeddelanden

| Vad har testats? | Hur har det testats? | Testresultat |
|------------------|----------------------|------------------|
| Test 4.1 Ett felmeddelande visas när en stad inte är giltig. | Manuellt | ✅ |
| Test 4.2 Ett felmeddelande visas när det anges något annat än en stad. | Manuellt | ✅ |
| Test 4.3 Ett felmeddelande visas när input lämnas tomt. | Manuellt | ✅ |


