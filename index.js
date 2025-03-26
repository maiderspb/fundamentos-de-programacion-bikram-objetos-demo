const Coche = {
  marca: "Mercedes",
  modelo: "CLA",
  matricula: "8888MMM",
};

const Casa = {
  codPostal: "48000",
  calle: "elcano",
  portal: "3",
  piso: "2",
};

const FullStackDeveloper = {
  lenguajes: ["HTML", "CSS", "JavasCript"],
  proyectos: ["clon instagram"],
};

const Perro = {
  nombre: "Jakin",
  raza: "Caniche",
  color: "Marron",
  edad: "1 año",
  ladrar: function () {
    console.log("Guau");
  },
  popo: function () {
    return Math.random() * 3;
  },
};

const marcaPortatil = Portatil.marca;
const marcaPortatil2 = Portatil["marca"];
const grupos = Concierto.grupos;
const RGB = [Led.rojo, Led.verde, Led.azul];
Portatil.modelo = "P345";
Concierto.cartelera.push("Guns N' Roses");
Concierto.fecha = new Date();
Impresora.imprimiendo = {
  nombreArchivo: "index.docx",
  copias: 8,
  numPaginas: 100,
};
const Noticia = {
  titular: "The Bridge",
  cuerpo: "Full Stack",
};

const Persona = {
  nombre: "Maider",
  apellidos: "San Pedro",
  edad: "34",
};

const Avion = {
  numPasajeros: 300,
  despegar: () => console.log("despegando"),
  volar: () => console.log("llegando al destino"),
  aterrizar: () => console.log("aterrizando"),
};
const Paquete = { contenido: [] };
const Pais = {
  numHabitantes: "100.000.000",
  continente: "Europa",
  gentilicio: "Europeos",
};
const codError = O_Error.codigo;
const integrantes = Grupo.integrantes;
const nivelesTinta = Impresora.tinta;
const pixeles = Pantalla.pixeles;
const especificaciones = Movil["especificaciones"];
Grupo.numIntegrantes = 5;
Pantalla.dimensiones = "1920x1080";
Led.encendido = !Led.encendido;
Movil.temperatura = "20º";
