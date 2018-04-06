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
> Obtiene todos los proveedores
* GET : /proveedores/n
> Obtiene el proveedor con id n
* POST : /proveedores
> Crea el proveedor según los datos del body
* PUT : /proveedores/n
> Modifica el proveedor n segun los datos del body
* DELETE : /proveedores/n
> Elimina el proveedor n


## Vinculos
### Atributos
* Id : int
* Referencia : string
* IdTipo : int
* VelocidadMbps : int
* Precio : float
* IdEstado: int

### Endpoints API
* GET : /vinculos
> Obtiene todos los vinculos
* GET : /vinculos/n
> Obtiene el vinculo con id n
* POST : /vinculos
> Crea el vinculo según los datos del body
* PUT : /vinculos/n
> Modifica el vinculo n segun los datos del body
* DELETE : /vinculos/n
> Elimina el vinculo n


## Tipos_Vinculos
### Atributos
* Id : int
* Descripcion : string

### Endpoints API
* GET : /tipos_vinculos
> Obtiene todos los tipos
* GET : /tipos_vinculos/n
> Obtiene el tipo con id n
* POST : /tipos_vinculos
> Crea el tipos según los datos del body
* PUT : /tipos_vinculos/n
> Modifica el tipo n segun los datos del body
* DELETE : /tipos_vinculos/n
> Elimina el tipo n


## Estados_vinculos
### Atributos
* Id : int
* Descripcion : string

### Endpoints API
* GET : /estados_vinculos
> Obtiene todos los estados de vinculos
* GET : /estados_vinculos/n
> Obtiene el estado de vinculo con id n
* POST : /estados_vinculos
> Crea el estado de vinculo según los datos del body
* PUT : /estados_vinculos/n
> Modifica el estado de vinculo n segun los datos del body
* DELETE : /estados_vinculos/n
> Elimina el estado de vinculo n


## Suursales
### Atributos
* Id : int
* Name : string
* Address : string
* GMapsLink : string

### Endpoints API
* GET : /sucursales
> Obtiene todas las sucursales
* GET : /sucursales/n
> Obtiene la sucursal con id n
* POST : /sucursales
> Crea la sucursal según los datos del body
* PUT : /sucursales/n
> Modifica la sucursal n segun los datos del body
* DELETE : /sucursales/n
> Elimina la sucursal n
