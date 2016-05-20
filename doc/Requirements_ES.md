# Requisitos del taller

- Mac o PC con Windows / Linux.
- `npm` instalado.
- `react-native-cli` instalado
- `android SDK`.
- simulador de android (personalmente utilizo [Genymotion](https://www.genymotion.com/thank-you-freemium/)).
- `Xcode` para iOS (sólo en Mac OS X).
- IDE / editor de código (Sublime Text, Atom, Vim... pero que os sintáis cómodos).


# Instalación del entorno
- [Getting Started with React Native](https://facebook.github.io/react-native/docs/getting-started.html).  
En esta web se puede elegir iOS / Android, así como los tres sistemas operativos con soporte (Mac / Windows / Linux).
  
Aún así, si surge cualquier problema con la instalación, mi correo es patoroco@gmail.com para poder llevarlo todo listo al taller.


# Primera prueba
Para asegurarnos de que está todo correcto, crearemos un proyecto nuevo (no hace falta entender nada, simplemente que compile) ejecutando en una terminal:
```
react-native init HelloWorld
```

Después de que se genere todo el scaffolding del proyecto, podremos entrar dentro de la carpeta:
```
cd HelloWorld
```
Y ejecutar por un lado la app de android (hay que tener el simulador encendido):
```
react-native run-android
```


En el caso de iOS (únicamente posible desde Mac OS X), abrir el archivo `ios/HelloWorld.xcodeproj` con doble click, y pulsar sobre el botón de play de arriba a la izquierda.


# Links interesantes

- [Components lifecycle](https://facebook.github.io/react/docs/component-specs.html)
- [Reusable components](https://facebook.github.io/react/docs/reusable-components.html)
- [Learn ES2015](http://babeljs.io/docs/learn-es2015/)
- [Flexbox guide](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
