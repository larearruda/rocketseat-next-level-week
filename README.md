# Curso Rocket Seat - Next Level Week

## Anotações

### Configurar user github para pasta

### Instalação front-end
```
```

### Executar projeto
```
cd web/
nvm use v13
yarn install
yarn start
```


### Instalação back-end

Adicionar suporte typescript ao projeto & iniciar config
```
yarn add typescript -D
yarn tsc --init 
```

```
yarn add ts-node-dev -D
```
#### Configuraçao do package.json
- npm start
```javascript
"scripts": {
    "start" : "tsnd --transpile-only --ignore-watch node_modules --respawn src/server.ts"
  }
```

##### Parâmetros
- `"start" : "tsnd --transpile-only src/server.ts"`: Não verifica erros de código
- `--ignore-watch node_modules`: Não tentar converter os códigos
- `--respawn`: Fica escutando o server

