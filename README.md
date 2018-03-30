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
* GMapsLink : string

## Vinculos
### Atributos
* Id : int
* Referencia : string
* IdTipo : int
* VelocidadMbps : int
* Precio : float
* IdEstado: int

## Tipos
### Atributos
* Id : int
* Descripcion : string

## Estados
### Atributos
* Id : int
* Descripcion : string

## Enlace
### Atributos
* 
### Metodos
* 

# Endpoints API
## Empresa
* GET : /empresas
> Obtiene todas las empresas
* GET : /empresas/n
> Obtiene la empresa con id n
* POST : /empresas
> Crea la empresa según los datos del body
* PUT : /empresas/n
> Modifica la empresa n segun los datos del body
* DELETE : /empresas/n
> Elimina la empresa n


# Pasos para instalar
1. Descargar Visual Studio Code
2. Descargar e instalar Git (seguir el link desde Visual Studio Code)
3. Ojo al configurarlo en la instalación (modifique primero CMD pero luego le dejé el Bash de Git)
4. Abrir el Git BASH
5. Crear una carpeta donde va a ir el proyecto
6. $ git init
7. $ git config --global user.email "you@example.com"
8. $ git config --global user.name "Your Name"
9. $ git remote add origin https://github.com/pabloanania/tparqweb.git
10. $ git push -u origin master
