# 🚀 Guia de Deploy do FluxMind no Cloudflare Pages

## Opção 1: Deploy Local (Terminal)

### Passo 1: Obter Token da API
1. Faça login na conta Cloudflare desejada: https://dash.cloudflare.com
2. Vá em **Profile > API Tokens**
3. Clique em **Create Token**
4. Use o template **Custom token** com as permissões:
   - Account: Cloudflare Pages:Edit
   - Zone: Page Rules:Edit (se quiser custom domains)
5. Copie o token gerado

### Passo 2: Executar Deploy
```bash
cd /Users/henriquecarlos/Documents/GitHub/FluxMind
./deploy-cloudflare.sh SEU_TOKEN_AQUI
```

## Opção 2: Deploy via GitHub (Recomendado)

### Passo 1: Fazer Push do Código
```bash
cd /Users/henriquecarlos/Documents/GitHub/FluxMind
git add .
git commit -m "Preparar para deploy Cloudflare"
git push origin main
```

### Passo 2: Conectar no Cloudflare
1. Acesse https://dash.cloudflare.com (conta desejada)
2. Vá em **Workers & Pages > Create application > Pages**
3. Clique em **Connect to Git**
4. Autorize o GitHub e selecione o repositório **FluxMind**
5. Configure o build:
   - Framework preset: **Next.js**
   - Build command: `npm run build`
   - Build output directory: `.next`
   - Root directory: `/`
   - Node version: `18`

### Passo 3: Variáveis de Ambiente (se necessário)
Adicione no painel do Cloudflare:
- `NODE_VERSION`: 18
- Outras variáveis que seu app precise

## Opção 3: Deploy Manual via Dashboard

### Passo 1: Build Local
```bash
cd /Users/henriquecarlos/Documents/GitHub/FluxMind
npm install --legacy-peer-deps
npm run build
```

### Passo 2: Upload Manual
1. Acesse https://dash.cloudflare.com
2. Vá em **Workers & Pages > Create application > Pages**
3. Escolha **Upload assets**
4. Arraste a pasta `.next` para o upload
5. Configure o nome do projeto: `fluxmind`

## 📝 Notas Importantes

### Correção de Dependências
O projeto tem conflito com React 19. Para resolver:
```bash
npm install --legacy-peer-deps
```

### Configurações Recomendadas
- **Compatibility date**: 2024-01-01
- **Node compatibility**: ativado
- **Build caching**: ativado

### Custom Domain
Após o deploy, adicione seu domínio:
1. Pages > fluxmind > Custom domains
2. Add custom domain
3. Configure o DNS (CNAME para fluxmind.pages.dev)

## 🔧 Troubleshooting

### Erro de Build
Se der erro no build, tente:
```bash
# Limpar cache
rm -rf node_modules .next
npm install --legacy-peer-deps
npm run build
```

### Erro 404 após deploy
Adicione um arquivo `_redirects` na pasta public:
```
/* /index.html 200
```

### Suporte
- Docs Cloudflare Pages: https://developers.cloudflare.com/pages
- Docs Next.js: https://nextjs.org/docs