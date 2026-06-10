# projeto-front

Front-end estático (HTML/CSS/JS) servido por **Nginx** em container **Docker**,
publicado na **Vercel**. Consome a API do back-end publicada no **Render**.
Projeto Segundo Bimestre — Parte 2 (Conteinerização, Nginx e Integração Final).

## Estrutura

```
projeto-front/
  public/
    index.html
    script.js
  Dockerfile
  .dockerignore
  package.json
  vercel.json
```

## Integração com a API

O arquivo `public/script.js` chama a rota `/v1` da API no Render.
Atualize a constante `API_URL` com a sua URL do Render:

```js
const API_URL = "https://SUA-API.onrender.com"
```

## Rodar com Docker / Nginx (Codespaces)

```bash
docker build -t projeto-front .
docker run -p 8080:80 projeto-front
```

No Codespaces, abra a porta **8080** encaminhada (aba **PORTS**) para ver o
front servido pelo Nginx consumindo a API.

> Observação: para o front no Codespaces (porta 8080) conseguir consumir a API,
> a URL `https://...-8080.app.github.dev` precisa estar liberada no CORS do back-end.

## Deploy (Vercel)

- Framework Preset: **Other**
- O `vercel.json` define `outputDirectory: "public"`, então a Vercel serve
  os arquivos de `public/` na raiz do site.

## Versão

`v1.1.0` — evolução da Parte 1 com conteinerização (Nginx em container).
