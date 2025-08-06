#!/bin/bash

# Script de Deploy para Cloudflare Pages - FluxMind
# Use este script para fazer deploy em qualquer conta do Cloudflare

echo "🚀 Deploy do FluxMind para Cloudflare Pages"
echo "==========================================="
echo ""

# Verificar se foi passado um token
if [ $# -eq 0 ]; then
    echo "❌ Erro: Por favor, forneça o token da API do Cloudflare"
    echo "Uso: ./deploy-cloudflare.sh <CLOUDFLARE_API_TOKEN>"
    echo ""
    echo "Para obter o token:"
    echo "1. Acesse https://dash.cloudflare.com/profile/api-tokens"
    echo "2. Crie um token com permissões de 'Cloudflare Pages:Edit'"
    exit 1
fi

# Variáveis
API_TOKEN=$1
PROJECT_NAME="fluxmind"

echo "📦 Preparando o projeto..."

# Instalar dependências com legacy-peer-deps
npm install --legacy-peer-deps

# Fazer build do projeto
echo "🔨 Construindo o projeto..."
npm run build

# Configurar o token temporariamente
export CLOUDFLARE_API_TOKEN=$API_TOKEN

# Fazer deploy usando wrangler
echo "☁️  Fazendo deploy para Cloudflare Pages..."
npx wrangler pages deploy .next --project-name=$PROJECT_NAME

echo ""
echo "✅ Deploy concluído!"
echo "============================"
echo "📌 URLs do projeto:"
echo "- Produção: https://$PROJECT_NAME.pages.dev"
echo ""
echo "🔧 Próximos passos:"
echo "1. Acesse o Cloudflare Dashboard da conta alvo"
echo "2. Vá em Pages > $PROJECT_NAME"
echo "3. Configure um custom domain se necessário"
echo "4. Configure variáveis de ambiente se necessário"