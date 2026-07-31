# ESTÁGIO 1: Build da aplicação
FROM node:22-alpine AS build
WORKDIR /app

# Copia os arquivos de dependências primeiro (aproveita o cache do Docker)
COPY package*.json ./
RUN npm ci

# Copia o restante do código e gera o build SSR
COPY . .
RUN npm run build

# ESTÁGIO 2: Execução em Produção (Ambiente leve)
FROM node:22-alpine
WORKDIR /app

# Copia apenas os arquivos gerados no build para o container final
# ATENÇÃO: Substitua 'seu-projeto' pelo nome exato da pasta dentro de dist/
COPY --from=build /app/dist/mubank ./dist/mubank

# Expõe a porta padrão do servidor SSR do Angular
EXPOSE 4000

# Define a variável de ambiente para que o Node aceite conexões externas
ENV PORT=4000
ENV HOST=0.0.0.0

# Comando para iniciar o servidor Node.js do Angular
CMD ["node", "dist/mubank/server/server.mjs"]
