#!/bin/bash

# Deploy direto via API do Cloudflare
echo "🚀 Deploy do FluxMind via API"
echo "============================="

TOKEN="5x3ZuxoN3apR3Ju7EhskP8xWhHodVll_fgckLWtt"
ACCOUNT_ID="d43d1b01c63fde30fdf2fb8a35f57c25"
PROJECT_NAME="fluxmind"

# Build
echo "🔨 Construindo projeto..."
npm run build

# Criar deployment
echo "☁️  Iniciando deploy..."

# Criar um timestamp único
TIMESTAMP=$(date +%s)

# Fazer o upload dos arquivos
echo "📤 Fazendo upload dos arquivos..."

# Para Next.js, precisamos fazer deploy da pasta .next
cd .next

# Criar um arquivo zip com o conteúdo
zip -r ../deploy.zip .

cd ..

# Upload via API
RESPONSE=$(curl -X POST \
  "https://api.cloudflare.com/client/v4/accounts/$ACCOUNT_ID/pages/projects/$PROJECT_NAME/deployments" \
  -H "Authorization: Bearer $TOKEN" \
  -H "Content-Type: multipart/form-data" \
  -F "manifest=@deploy.zip" \
  -F "branch=main")

# Limpar arquivo temporário
rm deploy.zip

echo ""
echo "✅ Deploy finalizado!"
echo "===================="
echo "📌 Acesse: https://$PROJECT_NAME.pages.dev"
echo ""
echo "⚠️  Sua conta padrão continua inalterada"