# Taller de React Native
	
## Presentación  

- Chapa corporativa
- Por qué React Native?
- Qué es y qué no es RN?
- Componentes (método `render()`)
- Virtual DOM
- iOS / Android +/- Windows Mobile
- Instalación [Getting started de FB](https://facebook.github.io/react-native/docs/getting-started.html)


---


## Demo 1: Hello World

- `react-native init HelloWorld`
- ES2016 [doc](http://babeljs.io/docs/learn-es2015/)
- Explicación de los archivos del proyecto.
  -	package.json
  - ios
  -	android
- `render()`
- `this.props` / `this.state`
- Diseño de los componentes ([flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/))
- RevealApp


## Transparencias

- Ciclo de vida de un componente [doc](https://facebook.github.io/react/docs/component-specs.html)


---


## Demo 2: Tabla con _n_ celdas

- Crear proyecto con componente genérico compartido entre iOS / Android
- Insertar un ListView [doc](https://facebook.github.io/react-native/docs/listview.html#content)
- Añadir datasource
- `renderRow()` (texto + imagen)
- Hacer celdas pulsables [TouchableHighlight](http://facebook.github.io/react-native/docs/touchablehighlight.html#content)
- Convertir la tabla a un componente aislado
- Añadir navegación [Navigator](http://facebook.github.io/react-native/docs/navigator.html#content) (existen más métodos de navegación, pero este es transversal ([Navigator Comparation](http://facebook.github.io/react-native/docs/navigator-comparison.html#content))
- Crear componente de detalle de una ciudad
- Router ([github](https://github.com/patoroco/react-native-workshop/commit/2bd57689fb9e382d36f862ee1e985aa0ece977d6))
- Añadir barra de navegación ([navigationBar](http://facebook.github.io/react-native/docs/navigator.html#navigationbar) / [ToolbarAndroid](http://facebook.github.io/react-native/docs/toolbarandroid.html#content))
- Cargar wikipedia en el detalle ([Webview](http://facebook.github.io/react-native/docs/webview.html#content)) ([github](https://github.com/patoroco/react-native-workshop/commit/68d4f3c853f17aa2f8c2cb5f7822ebdf3900c998))
- Extra ball: [BackAndroid](http://facebook.github.io/react-native/docs/backandroid.html#content)


--- 


## Demo 3: Internet y third-party libraries
- APIClient ([github](https://github.com/patoroco/react-native-workshop/commit/74ffb7e3ca801c13b24ae833352bd2d1b49e4fa3))
- Show IP in screen with httpbin ([github](https://github.com/patoroco/react-native-workshop/commit/74ffb7e3ca801c13b24ae833352bd2d1b49e4fa3))
- Install [react-native-sounds](https://github.com/zmxv/react-native-sound) ([on android](https://github.com/patoroco/react-native-workshop/commit/91e9755796337d53d605e105907b871e33340bbd))
- Play local sound ([on iOS](https://github.com/patoroco/react-native-workshop/commit/3a59b18114c4ea1dfbc084fecd45174def78f463))
- [Fake 'API'](https://github.com/patoroco/react-native-workshop/blob/master/3Buttons/sounds.json)
- Load JSON ([github](https://github.com/patoroco/react-native-workshop/commit/bf92cdc0caf5c50cff53707291cc0c1f10f8176d))
- Install [react-native-fs](https://github.com/johanneslumpe/react-native-fs) ([install on android](https://github.com/patoroco/react-native-workshop/commit/91e9755796337d53d605e105907b871e33340bbd))


## Última parte

- Usar en dispositivo (ios / android)


---

# Transparencias

- Cosas que no se han visto aquí
- Experiencia general con react-native