class tramo {
  tblClienteNatural = {
    id: 0,
    nombre: " ",
    apellido: "",
    correo: " ",
    contrasena: " ",
    fechaNacimiento: " ",
    numeroTelefono: " ",
    fotoPerfil:0 
   }
   
  
  fnSetDatosTramoCliente(a, b, c, d, e, f, g,h) {
    this.tblClienteNatural.id = a;
    this.tblClienteNatural.nombre = b;
    this.tblClienteNatural.apellido = c;
    this.tblClienteNatural.correo = d;
    this.tblClienteNatural.contrasena = e;
    this.tblClienteNatural.fechaNacimiento = f;
    this.tblClienteNatural.numeroTelefono = g;
    this.tblClienteNatural.fotoPerfil=h;

    console.log(this.tblClienteNatural);
    console.table(this.tblClienteNatural);
    this.fnGetDatosTramo(a, b, c, d, e, f, g,h);
  }

  fnGetDatosTramo(a, b, c, d, e, f, g,h) {
    this.tblClienteNatural.id = a;
    this.tblClienteNatural.nombre = b;
    this.tblClienteNatural.apellido = c;
    this.tblClienteNatural.correo = d;
    this.tblClienteNatural.contrasena = e;
    this.tblClienteNatural.fechaNacimiento = f;
    this.tblClienteNatural.numeroTelefono = g;
    this.tblClienteNatural.fotoPerfil=h;
    this.fnOpciones(this.tblClienteNatural);
    console.table(this.tblClienteNatural);
  }
  fnOpciones(contenido) {
    const tabla = document.createElement("table");
    const thead = document.createElement("thead");
    const tbody = document.createElement("tbody");
    const tr = document.createElement("tr");
    tabla.className = "table table-dark bg-dark";

    console.log(contenido);

    [
      "identificacion",
      "Nombre ",
      "apellido",
      "Correo ",
      "contraseña",
      "Fecha nacimiento",
      "Telefono ",
      "foto-perfil",
    ].forEach(function (e) {
      var th = document.createElement("th");
      th.textContent = e;
      tabla.appendChild(thead);
      thead.appendChild(th);
    });
    tabla.appendChild(tbody);
    tbody.appendChild(tr);
    var i = 0;

    Object.entries(contenido).forEach(([key, value]) => {
      const td = document.createElement("td");
      td.textContent = value;
      tr.appendChild(td);
      tbody.appendChild(tr);
    });

    document.getElementById("tablas").appendChild(tabla);
  }
}

const instTramo = new tramo();
