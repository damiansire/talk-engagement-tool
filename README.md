Recien empece a crear esto ayer, todavia no hay readme.

Por si sos ansioso y queres usarlo:

Primero:

npm install

Luego, en el directorio principal del proyecto (Donde esta el package.json, la carpeta src, el .gitignore, etc) debes de crear una carpeta llamada enviorements y dentro de esa carpeta un archivo llamado enviorements.ts

En ese archivo debes de colocar:

export const environment = {
production: false,
githubToken: 'aca_tu_github_token',
};

Luego de eso, simplemente poner

npm start

y listo xD

Escuchame, aun no tengo un readme decente porque recien estoy empezando a crear el proyecto, si necesitas usarlo por alguna razon, podes escribirme a @damiansire en instagram, twitter o linkedin y te ayudo
