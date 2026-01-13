# Visualizador de Surebets en React (protobuf + Base64)

Este proyecto es una aplicación web frontend construida con **React**, **TypeScript** y **Vite**, diseñada para visualizar datos de "surebets" recibidos como cadenas Base64 que representan mensajes codificados en formato **Protocol Buffers (protobuf)**.

La aplicación decodifica estos datos, extrae la información relevante y la muestra en un diseño visual moderno y agrupado por pares de casas de apuestas, permitiendo al usuario pegar cualquier cadena Base64 válida y ver los eventos deportivos con sus cuotas, ganancias, casas de apuestas, etc.

---

## 🎯 Objetivo del Proyecto

Implementar un visor sencillo pero robusto que:

**a** Reciba una cadena Base64 desde un `textarea`.
**b** La decodifique a bytes binarios.
**c** Use la librería generada de protobuf (`src/proto/surebet.js`) para deserializarla a un objeto `SurebetList`.
**d** Agrupe los resultados por
- `arbid` (identificador único de la surebet).
- `eventname` y `leaguename` (para evitar falsos positivos).
**e** Muestre los datos en bloques visuales con:
- Cabecera: Ganancia (%), Deporte, Tiempo.
- Cuerpo: 2 filas (**Casa**, **Evento**, **Outcome**, **Cuota** y **flechas** **↑/↓** según `directionodd`).
**f** Maneje errores de forma amigable (Base64 inválido, protobuf corrupto, etc.) sin romper la app.
**g** Se actualice dinámicamente al pegar nuevos datos.

---

## 🧩 Tecnologías Utilizadas

- **Frontend**: React 18 + TypeScript
- **Build Tool**: Vite
- **Protobuf**: Generado con `pbjs` / `pbts`
- **Estilos**: CSS / CSS nativo
- **Manejo de estado**: Hooks de React (`useState`, `useEffect`)
- **Decodificación Base64**: `atob` + `Uint8Array`
- **Iconos**: `react-icons`

---

## 📁 Estructura del Proyecto

src/
├── App.tsx                 # Componente principal
├── main.tsx                # Punto de entrada
├── index.css               # Estilos globales
├── types.ts                # Tipos compartidos
├── proto/
│   ├── surebet.d.ts        # Tipos TypeScript generados
│   ├── surebet.js          # Implementación JS generada
│   └── surebet.proto       # Definición original del mensaje protobuf
└── components/
    ├── SurebetViewer.tsx   # Componente principal: gestiona estado y agrupación
    ├── SurebetBlock.tsx    # Bloque visual: cabecera + cuerpo (2 filas)
    └── SurebetLegRow.tsx   # Fila individual de una casa de apuestas


---

## ⚙️ Cómo Funciona el Visor (`SurebetViewer.tsx`)

El componente `SurebetViewer` recibe una prop `base64Data: string`.

### Pasos clave:

1. **Validación inicial**: Si `base64Data` está vacío → muestra “No hay datos”.
2. **Decodificación Base64**:
   - Usa `atob(base64Data.trim())` para convertir a string binario.
   - Convierte ese string en `Uint8Array` usando `Uint8Array.from(...)`.
3. **Decodificación protobuf**:
   - Importa `proto.surebet.SurebetList`.
   - Usa `SurebetList.decode(bytes)` (el backend serializa con `Marshal`, no `encodeDelimited`).
   - Extrae `message.items` y los guarda en estado local.
4. **Agrupación por arbid**:
   - Crea una clave compuesta: `${arbid}|${eventname}|${leaguename}`.
   - Solo se consideran grupos con exactamente 2 elementos (una surebet completa).
5. **Renderizado**:
   - Para cada par válido, renderiza un `SurebetBlock`.
   - El bloque incluye cabecera con ganancia, deporte, tiempo y botón de eliminación.
   - El cuerpo usa `SurebetLegRow` para mostrar cada casa con íconos de dirección de las flechas.
5. **Manejo de errores**:
   - Todo dentro de un `try/catch` en `useEffect`.
   - Errores capturados se muestran en UI sin romper la app.

---

## 📥 Datos de Entrada

La aplicación espera una cadena Base64 que representa un mensaje `SurebetList` serializado en protobuf. El ejemplo válido se encuentra en el archivo `surebet.txt` dentro de la carpeta de `archivo_surebets`.

## 🛠️ Configuración del Backend (Contexto)
NOTA: El backend ya existe y genera los datos en formato protobuf. Sólo se trabaja en el frontend. Los datos provienen de Go que:
- Serializa objetos `SurebetList` con `proto.Marshal()`.
- Almacena el binario en Redis.
- Lo entrega como cadena Base64 estándar (sin saltos de línea).

Los datos provienen de un sistema que serializa objetos `SurebetList` (definidos en `surebet.proto`) y los entrega como Base64.

## 📐 Archivo .proto
Definición usada para generar el código protobuf:
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

## 🧪 Pruebas y Validación
La aplicación fue diseñada para ser robusta:

## ✅ Casos de prueba validados:

Cadena Base64 vacía → muestra “No hay datos”.
Cadena Base64 válida → muestra bloques de surebets.
Cadena Base64 inválida → muestra error en rojo.
Cadena Base64 válida pero protobuf corrupto → muestra error en rojo.
Cambios en el textarea → se actualiza automáticamente gracias a `useEffect`.

## 📦 Dependencias Instaladas
npm install react react-dom
npm install vite @types/react @types/react-dom typescript
npm install react-icons
npm install protobufjs
npx pbjs -t static-module -w es6 -o src/proto/surebet.js src/proto/surebet.proto
npx pbts -o src/proto/surebet.d.ts src/proto/surebet.js

## 🚀 Cómo Ejecutar el Proyecto
a. Clona el repositorio.
b. Instala dependencias: npm install
c. Inicia el servidor de desarrollo: npm run dev
d. Abre tu navegador en http://localhost:5173.

## 📝 Notas Adicionales
- El componente `SurebetViewer` utiliza hooks de manera correcta: `useState` para gestionar `items` y `error`, y useEffect con dependencia [base64Data] para reaccionar a cambios.
- El emparejamiento es seguro y preciso: se requiere coincidencia en `arbid`, `eventname` y `leaguename`.
- El código está estructurado en componentes modulares (`SurebetBlock`, `SurebetLegRow`) para facilitar la mantenibilidad.
- Se priorizó la claridad sobre la optimización extrema, aunque se pueden hacer mejoras posteriores (como memoización o integración con WebSocket).