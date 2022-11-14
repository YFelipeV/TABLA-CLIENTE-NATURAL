class tramo {
  tblClienteNatural = {
    id: 0,
    nombre: " ",
    apellido: "",
    correo: " ",
    contrasena: " ",
    fechaNacimiento: " ",
    numeroTelefono: 0,
    fotoPerfil:0 
 }

 agregarClienteNatural(id, nombre, apellido, correo, contrasena, fechanacimiento, numerotelefono,fotoperfil){

  if( id== 0 , nombre=="", apellido==" ", correo==" ", contrasena=="", fechanacimiento== "", numerotelefono=== 0, fotoperfil== 0){
    alert("Ingrese todos los campos")
  }else{
    this.tblClienteNatural.id = id;
    this.tblClienteNatural.nombre = nombre;
    this.tblClienteNatural.apellido = apellido;
    this.tblClienteNatural.correo = correo;
    this.tblClienteNatural.contrasena = contrasena;
    this.tblClienteNatural.fechaNacimiento = fechanacimiento;
    this.tblClienteNatural.numeroTelefono = numerotelefono;
    this.tblClienteNatural.fotoPerfil=fotoperfil;
    console.table(this.getcliente);
  }
 }
 get getcliente(){
  return this.tblClienteNatural
 }
  
}

const instTramo = new tramo();