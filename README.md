# TP Arquitectura Web
* Nombre del grupo: Los panas
* Integrantes: Ariel Navarro (89672), Pablo Anania (90772)
* Negocio: Empresa requiere software que administre sus enlaces de red

# Entidades
## Proveedores
### Atributos
* Id : int
* Name : string
* Address : string
* Contacto : string
### Endpoints API
* GET : /proveedores
> Obtiene todas los proveedores
* GET : /proveedores/n
> Obtiene el proveedor con id n
* POST : /proveedores
> Crea el proveedor según los datos del body
* PUT : /proveedores/n
> Modifica el proveedores n segun los datos del body
> Preguntar a Diego si conviene /n o pasar el Id por Body
* DELETE : /proveedores/n
> Elimina el proveedor n

## Enlaces
### Atributos
* Id : int
* Referencia : string
* IdTipo : int
* VelocidadMbps : int
* Precio : float
* IdEstado : int
* IdLocacion : int
### Endpoints API
* GET : /enlaces
> Obtiene todos los enlaces
* GET : /enlaces/n
> Obtiene el enlace con id n
* POST : /enlaces
> Crea el enlace según los datos del body
* PUT : /enlaces/n
> Modifica el enlace n segun los datos del body
> Preguntar a Diego si conviene /n o pasar el Id por Body
* DELETE : /enlaces/n
> Elimina el enlace n

## Tipos_Enlaces
### Atributos
* Id : int
* Descripcion : string
### Endpoints API
* GET : /tipos_enlaces
> Obtiene los tipos de enlaces
* GET : /tipos_enlaces/n
> Obtiene el tipo con id n
* POST : /tipos_enlaces
> Crea el tipo según los datos del body
* PUT : /tipos_enlace/n
> Modifica el tipo n segun los datos del body
> Preguntar a Diego si conviene /n o pasar el Id por Body
* DELETE : /tipos_enlace/n
> Elimina el tipo n

## Estados_Enlaces
### Atributos
* Id : int
* Descripcion : string
### Endpoints API
* GET : /estados_enlaces
> Obtiene los estados de enlaces
* GET : /estados_enlaces/n
> Obtiene el estado de enlace con id n
* POST : /estados_enlaces
> Crea el estado según los datos del body
* PUT : /estados_enlaces/n
> Modifica el estado n segun los datos del body
> Preguntar a Diego si conviene /n o pasar el Id por Body
* DELETE : /estados_enlaces/n
> Elimina el estado n

## Sucursales
### Atributos
* Codigo : int
* Nombre : string
* Direccion : string
* GMapsLink : string
### Endpoints API
* GET : /sucursales
> Obtiene las sucursales
* GET : /sucursales/n
> Obtiene la sucursal con id n
* POST : /sucursales
> Crea la sucursal según los datos del body
* PUT : /sucursales/n
> Modifica la sucursal n segun los datos del body
> Preguntar a Diego si conviene /n o pasar el Id por Body
* DELETE : /sucursales/n
> Elimina la sucursal n
