# Visualizador de Surebets en React (protobuf + Base64)

Este proyecto es una aplicación web frontend construida con **React**, **TypeScript** y **Vite**, diseñada para visualizar datos de "surebets" recibidos como cadenas Base64 que representan mensajes codificados en formato **Protocol Buffers (protobuf)**.

La aplicación decodifica estos datos, extrae la información relevante y la muestra en una tabla interactiva, permitiendo al usuario pegar cualquier cadena Base64 válida y ver los eventos deportivos con sus cuotas, ganancias, casas de apuestas, etc.

---

## 🎯 Objetivo del Proyecto

Implementar un visor sencillo pero robusto que:

- Reciba una cadena Base64 desde un textarea.
- La decodifique a bytes binarios.
- Use la librería generada de protobuf (`src/proto/surebet.js`) para deserializarla a un objeto `SurebetList`.
- Muestre los datos en una tabla HTML con columnas: **Evento**, **Deporte**, **Ganancia (%)**, **Casa**, **Cuota**.
- Maneje errores de forma amigable (Base64 inválido, protobuf corrupto, etc.) sin romper la app.
- Se actualice dinámicamente al pegar nuevos datos.

---

## 🧩 Tecnologías Utilizadas

- **Frontend**: React 18 + TypeScript
- **Build Tool**: Vite (rápido y moderno)
- **Protobuf**: Generado con `pbjs` / `pbts`
- **Estilos**: CSS nativo (sin frameworks adicionales)
- **Manejo de estado**: Hooks de React (`useState`, `useEffect`)
- **Decodificación Base64**: `atob` + `Uint8Array`

---

## 📁 Estructura del Proyecto

src/
├── App.tsx # Componente principal
├── main.tsx # Punto de entrada
├── index.css # Estilos globales
├── proto/
│ ├── surebet.d.ts # Tipos TypeScript generados
│ └── surebet.js # Implementación JS generada
└── components/
└── SurebetViewer.tsx # Componente que decodifica y muestra los datos


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
   - Usa `SurebetList.decode(bytes)` o `decodeDelimited()` según sea necesario.
   - Extrae `message.items` y los guarda en estado local.
4. **Renderizado**:
   - Muestra una tabla con las columnas solicitadas.
   - En caso de error, muestra un mensaje en rojo y limpia la tabla.
5. **Manejo de errores**:
   - Todo dentro de un `try/catch` en `useEffect`.
   - Errores capturados se muestran en UI sin romper la app.

---

## 📥 Datos de Entrada

La aplicación espera una cadena Base64 que representa un mensaje `SurebetList` serializado en protobuf. Ejemplo válido:

```text
bAqTAwoIbGl2ZTIwMjASBDAuNTAiCkJhc2tldGJhbGwqD1t3aXRoIG92ZXJ0aW1lXTIFNCBzZWM6B1N0YWtlQ09KFEJhcmNlbG9uYSAtIFBhcnRpemFuWhJFdXJvcGEuIEV1cm9sZWFndWViCVRVKDE1Ny41KWoERE9XTnIEMi4wMIoBEzIwMjYtMDEtMDkgMjA6Mzg6NTGSARMyMDI2LTAxLTA5IDIwOjM4OjUxmgEdYXJiXzE3Njc5OTExMzE5ODAzMDQyMzZfRTVwODiiAQlpZF85MTQ3MjCyAQVncmVlbroBBG51bGzCAQVmYWxzZcoBBGJldGfaAZsBL2JldHMvTVRVMU5URTVNVGt4T1h3eE9Td3hOVGN1TlN3dE1Td3dMREFzTUE/YWNjZXNzX3Rva2VuPTJlOWY0ZjAwZjZiOGYwZmIxYzY2MTBmZTZmN2MyOTIzJmlzX2xpdmU9MSZjbG9uZV9pZD03ODUmYXJiX2hhc2g9MDgwNTM3Mjg0ZTk1YzM3ZTcyYTY1N2VhNmU3M2NkZmMK...
```

## 🛠️ Configuración del Backend (Contexto)
⚠️ Nota importante: El backend ya existe y genera los datos en formato protobuf. Sólo se trabaja en el frontend.

Los datos provienen de un sistema que serializa objetos SurebetList (definidos en surebet.proto) y los entrega como Base64.

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
Cadena Base64 válida → muestra tabla con datos.
Cadena Base64 inválida → muestra error en rojo.
Cadena Base64 válida pero protobuf corrupto → muestra error en rojo.
Cambios en el textarea → se actualiza automáticamente gracias a useEffect.

## 📦 Dependencias Instaladas
npm install react react-dom
npm install vite @types/react @types/react-dom typescript
npm install protobufjs

## 🚀 Cómo Ejecutar el Proyecto
a. Clona el repositorio.
b. Instala dependencias: npm install
c. Inicia el servidor de desarrollo: npm run dev
d. Abre tu navegador en http://localhost:5173.

## 📝 Notas Adicionales
El componente SurebetViewer utiliza hooks de manera correcta: useState para gestionar items y error, y useEffect con dependencia [base64Data] para reaccionar a cambios.
El código está estructurado para ser legible y fácil de mantener.
Se priorizó la claridad sobre la optimización extrema, aunque se pueden hacer mejoras posteriores (como memorización o carga diferida).