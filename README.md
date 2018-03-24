# TP Arquitectura Web
* Nombre del grupo: Los panas
* Integrantes: Ariel Navarro (89672), Pablo Anania (90772)
* Negocio: Empresa requiere software que administre sus enlaces de red

# Entidades
## Empresas
### Atributos
* ID : int
* Name : string
* Address : string
* GMapsLink : string
### Metodos
* constructor : Empresas(name : string, address : string, gmapslink : string)
* void UpdateEmpresas(id : int, name : string, address : string, gmapslink : string)
* void DeleteEmpresas(id : int)
* Empresas GetEmpresas(id : int)
* List<Empresas> GetEmpresas()

## Enlace
* 

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