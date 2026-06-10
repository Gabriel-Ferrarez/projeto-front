# Evidências — Front-End (Parte 2)

Coloque nesta pasta os seguintes prints (exigidos pela atividade):

1. **front-nginx-8080-codespaces.png** — front-end aberto na porta `8080` do
   Codespaces, servido por Nginx em container Docker.
2. **front-consumindo-api.png** — front-end consumindo a API do back-end em
   execução via Docker na porta 5000 do Codespaces (mensagem + data/hora na tela).
3. **vercel-deployments.png** — painel **Deployments** da Vercel com o histórico.
4. **tag-v1.1.0.png** — evidência da tag `v1.1.0` (ex.: aba Tags/Releases do GitHub).

> Dica: rode o back (`docker compose up --build`) e o front
> (`docker run -p 8080:80 projeto-front`) no mesmo Codespaces, abra a porta 8080
> e tire o print mostrando a resposta da API na página.
