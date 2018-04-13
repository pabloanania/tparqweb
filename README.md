# TP Arquitectura Web
* Nombre del grupo: Los panas
* Integrantes: Ariel Navarro (89672), Pablo Anania (90772)
* Negocio: Empresa requiere software que administre sus enlaces de red.

# Entidades
## Carriers
### Atributos
* Id : int
* Name : string
* Address : string
* Contacto : string
### Endpoints API
* GET : /carriers
> Obtiene todas los Carriers
* GET : /carriers/n
> Obtiene el carrier con id n
* POST : /carriers
> Crea el carrier según los datos del body
* PUT : /carriers/n
> Modifica el carriers n segun los datos del body
> Preguntar a Diego si conviene /n o pasar el Id por Body
* DELETE : /carriers/n
> Elimina el carrier n

## Links
### Atributos
* Id : int
* Referencia : string
* IdTipo : int
* VelocidadMbps : int
* Precio : float
* IdEstado : int
* IdLocacion : int
### Endpoints API
* GET : /links
> Obtiene todos los link
* GET : /links/n
> Obtiene el link con id n
* POST : /links
> Crea el link según los datos del body
* PUT : /links/n
> Modifica el link n segun los datos del body
> Preguntar a Diego si conviene /n o pasar el Id por Body
* DELETE : /links/n
> Elimina el link n

## Subentidad de Links: Types
### Atributos
* Id : int
* Descripcion : string
### Endpoints API
* GET : /links/types
> Obtiene los types de links
* GET : /links/types/n
> Obtiene el type con id n
* POST : /links/types
> Crea el type según los datos del body
* PUT : /links/types/n
> Modifica el type n segun los datos del body
> Preguntar a Diego si conviene /n o pasar el Id por Body
* DELETE : /links/types/n
> Elimina el type n

## Subentidad de Links: States
### Atributos
* Id : int
* Descripcion : string
### Endpoints API
* GET : /links/states
> Obtiene los states de links
* GET : /links/states/n
> Obtiene el state de links con id n
* POST : /links/states
> Crea el state según los datos del body
* PUT : /links/states/n
> Modifica el state n segun los datos del body
> Preguntar a Diego si conviene /n o pasar el Id por Body
* DELETE : /links/states/n
> Elimina el states n

## Branches
### Atributos
* Codigo : int
* Nombre : string
* Direccion : string
* GMapsLink : string
### Endpoints API
* GET : /branches
> Obtiene las branches offices
* GET : /branches/n
> Obtiene la branch con id n
* POST : /branches
> Crea la branch según los datos del body
* PUT : /branches/n
> Modifica la branch n segun los datos del body
> Preguntar a Diego si conviene /n o pasar el Id por Body
* DELETE : /branches/n
> Elimina la branch n
