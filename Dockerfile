# Imagem base do Nginx (leve)
FROM nginx:alpine

# Copia os arquivos estáticos do front para a pasta padrão servida pelo Nginx
COPY public /usr/share/nginx/html

# Porta padrão do Nginx
EXPOSE 80
