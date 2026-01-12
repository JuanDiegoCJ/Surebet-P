# Ejercicio para practicante: visor de Surebets en React (protobuf + Base64)

## Objetivo

Implementar un pequeño visor en React que:

1. Reciba una cadena Base64 que representa un mensaje protobuf `SurebetList`.
2. Decodifique ese binario usando la librería generada de protobuf.
3. Muestre una tabla con las surebets (`evento`, `deporte`, `ganancia`, `casa`, `cuota`).

El backend ya existe. Tú solo trabajarás en el **frontend**.


## Contexto ya preparado

### 1. Definición `.proto`

```proto
syntax = "proto3";
package surebet;

message SurebetItem {
  string typesurebet = 1;
  string arbprofit = 2;
  string middle = 3;
  string sportname = 4;
  string fulltime = 5;
  string arbgenerationtime = 6;
  string bookmaker = 7;
  string currentscore = 8;
  string eventname = 9;
  string eventstarttime = 10;
  string leaguename = 11;
  string arboutcome = 12;
  string directionodd = 13;
  string odd = 14;
  string gamescore = 15;
  string currencyodd = 16;
  string created = 17;
  string createddate = 18;
  string arbid = 19;
  string eventid = 20;
  string section = 21;
  string color = 22;
  string wrongitem = 23;
  string clon = 24;
  string origen = 25;
  string tipo = 26;
  string link = 27;
  string funds = 28;
}

message SurebetList {
  repeated SurebetItem items = 1;
  int32 totalcount = 2;
}
```

### 2. Ficheros generados en el frontend

Tienes ya generados (con `pbjs`/`pbts` u otra herramienta):

```ts
// src/proto/surebet.d.ts
export namespace surebet {
  interface ISurebetItem { /* ... */ }
  interface ISurebetList { items?: ISurebetItem[] | null; totalcount?: number | null; }

  class SurebetItem implements ISurebetItem { /* ... */ }

  class SurebetList implements ISurebetList {
    public items: ISurebetItem[];
    public totalcount: number;

    public static decode(reader: (Uint8Array | $protobuf.Reader)): SurebetList;
    public static decodeDelimited(reader: (Uint8Array | $protobuf.Reader)): SurebetList;
  }
}
```

Y el `surebet.js` correspondiente.

### 3. App ya cableada

En `App.tsx` ya existe algo así:

```tsx
import { useState } from 'react';
import SurebetViewer from './components/SurebetViewer';

function App() {
  const [input, setInput] = useState('');

  return (
    <div>
      <h1>Visualizador de Surebets</h1>
      <textarea
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />

      <SurebetViewer base64Data={input} />
    </div>
  );
}

export default App;
```

Tu trabajo está en `src/components/SurebetViewer.tsx`.


## Enunciado

Implementa el componente `SurebetViewer` que cumpla los siguientes requisitos:

1. Recibe una prop `base64Data: string`.
2. Si `base64Data` está vacío, debe mostrar simplemente el texto **"No hay datos"**.
3. Si `base64Data` tiene contenido:
   - Convierte la cadena Base64 a `Uint8Array` de bytes.
   - Usa la librería de protobuf (`proto.surebet.SurebetList`) para decodificar esos bytes a un objeto `SurebetList`.
   - Guarda `message.items` en un estado local (`useState`).
4. Dibuja una tabla HTML con al menos estas columnas:
   - `Evento` (`eventname`)
   - `Deporte` (`sportname`)
   - `Ganancia (%)` (`arbprofit`)
   - `Casa` (`bookmaker`)
   - `Cuota` (`odd`)
5. Si se produce cualquier error al decodificar (Base64 inválido o protobuf inválido):
   - Muestra un mensaje de error en rojo
   - No debe romper la app (sin errores uncaught en consola).


## Pistas técnicas

### Pista 1: Hooks

- Vas a necesitar al menos:
  - `const [items, setItems] = useState<proto.surebet.SurebetItem[]>([]);`
  - `const [error, setError] = useState<string | null>(null);`
- Usa `useEffect(() => { ... }, [base64Data])` para reaccionar cuando el usuario pega un nuevo valor en el `<textarea>`.


### Pista 2: Base64 → string binario → bytes

- `atob` convierte de Base64 a un **string binario**, donde cada carácter representa un byte.
- Para pasar de ese string a `Uint8Array`, puedes usar algo como:

```ts
const binaryString = atob(base64Data.trim());
const bytes = Uint8Array.from(binaryString, c => c.charCodeAt(0));
```

- Considera envolver esto en `try/catch` para capturar `InvalidCharacterError`.


### Pista 3: Decodificar con protobuf

- Importa el módulo generado:

```ts
import * as proto from '../proto/surebet';
```

- El tipo que quieres es `proto.surebet.SurebetList`.
- Hay dos formas principales de decodificar:
  - `SurebetList.decode(bytes)`
  - `SurebetList.decodeDelimited(bytes)`
- Según cómo haya serializado el backend, una de las dos será la correcta. Si con una tienes errores de tipo "wire type" al principio, prueba la otra.


### Pista 4: Manejo de errores

- Usa `try/catch` alrededor de toda la lógica del `useEffect`.
- Si algo falla:
  - `setError('Mensaje de error descriptivo');`
  - `setItems([]);`
- Si todo va bien:
  - `setItems(message.items || []);`
  - `setError(null);`

En el JSX, si `error` no es `null`, muestra algo como:

```tsx
if (error) {
  return <div style={{ color: 'red' }}>{error}</div>;
}
```


### Pista 5: Construcción de la tabla

- Una tabla mínima puede ser:

```tsx
<table>
  <thead>
    <tr>
      <th>Evento</th>
      <th>Deporte</th>
      <th>Ganancia (%)</th>
      <th>Casa</th>
      <th>Cuota</th>
    </tr>
  </thead>
  <tbody>
    {items.map((item, idx) => (
      <tr key={idx}>
        <td>{item.eventname || '—'}</td>
        <td>{item.sportname || '—'}</td>
        <td>{item.arbprofit || '—'}</td>
        <td>{item.bookmaker || '—'}</td>
        <td>{item.odd || '—'}</td>
      </tr>
    ))}
  </tbody>
</table>
```


## Criterios de evaluación

1. **Funcionalidad**
   - Pegar una cadena Base64 válida → se muestran filas con datos.
   - Pegar una cadena inválida → se muestra un mensaje de error en rojo, la app no se rompe.
   - Dejar el textarea vacío → muestra "No hay datos".

2. **Uso de hooks**
   - `useEffect` depende de `base64Data` (no se ejecuta en bucle infinito).
   - El estado (`items`, `error`) se gestiona correctamente.

3. **Claridad del código**
   - Lógica de decodificación claramente separada.
   - Manejo de errores explícito y legible.

---

> Sugerencia para el practicante: implementa primero una versión muy simple (sin manejar todos los casos raros de Base64), y una vez que funcione, la puedes ir endureciendo si hace falta.
