#!/bin/bash

# Deploy para conta específica SEM afetar a conta padrão
echo "🚀 Deploy do FluxMind para conta henriqueolivcarlos@gmail.com"
echo "==========================================="

# Token da conta específica
SPECIFIC_TOKEN="5x3ZuxoN3apR3Ju7EhskP8xWhHodVll_fgckLWtt"
SPECIFIC_ACCOUNT_ID="d43d1b01c63fde30fdf2fb8a35f57c25"

# Build do projeto
echo "🔨 Construindo o projeto..."
npm run build

# Deploy usando token específico SEM afetar configuração global
echo "☁️  Fazendo deploy..."
(
    export CLOUDFLARE_API_TOKEN=$SPECIFIC_TOKEN
    export CLOUDFLARE_ACCOUNT_ID=$SPECIFIC_ACCOUNT_ID
    npx wrangler pages deploy .next --project-name=fluxmind
)

echo ""
echo "✅ Deploy concluído!"
echo "============================"
echo "📌 Projeto deployado em: https://fluxmind.pages.dev"
echo "👤 Conta: henriqueolivcarlos@gmail.com"
echo ""
echo "⚠️  Sua conta padrão (henrique.carlos@a3offers.com) continua configurada normalmente."