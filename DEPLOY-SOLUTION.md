# 🚀 Solução de Deploy para Conta Específica

Como o wrangler está tentando usar a conta errada, recomendo usar o **Cloudflare Dashboard** diretamente:

## Opção 1: Upload Manual (Mais Simples)

1. **Build o projeto localmente:**
```bash
cd /Users/henriquecarlos/Documents/GitHub/FluxMind
npm install --legacy-peer-deps
npm run build
```

2. **Acesse o Cloudflare Dashboard:**
- Entre em: https://dash.cloudflare.com
- Use a conta: henriqueolivcarlos@gmail.com

3. **Crie/Acesse o projeto:**
- Vá em **Workers & Pages**
- Se o projeto "fluxmind" já existe, clique nele
- Se não, clique em **Create application** > **Pages** > **Upload assets**

4. **Faça o upload:**
- Arraste a pasta `.next` inteira
- Ou use o botão de upload para selecionar a pasta

## Opção 2: Via GitHub (Recomendado)

1. **Crie um repositório no GitHub:**
```bash
cd /Users/henriquecarlos/Documents/GitHub/FluxMind
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/SEU_USUARIO/fluxmind.git
git push -u origin main
```

2. **No Cloudflare Dashboard (henriqueolivcarlos@gmail.com):**
- Workers & Pages > Create application > Pages
- Connect to Git
- Selecione o repositório
- Configure:
  - Framework preset: Next.js
  - Build command: `npm run build`
  - Build output: `.next`

## Opção 3: Wrangler com Conta Isolada

1. **Crie um novo diretório temporário:**
```bash
mkdir ~/temp-deploy
cd ~/temp-deploy
```

2. **Copie o projeto:**
```bash
cp -r /Users/henriquecarlos/Documents/GitHub/FluxMind/* .
```

3. **Configure apenas para este deploy:**
```bash
export CLOUDFLARE_API_TOKEN=5x3ZuxoN3apR3Ju7EhskP8xWhHodVll_fgckLWtt
export CLOUDFLARE_ACCOUNT_ID=d43d1b01c63fde30fdf2fb8a35f57c25
unset CLOUDFLARE_EMAIL
unset CLOUDFLARE_GLOBAL_API_KEY
```

4. **Deploy:**
```bash
npm install --legacy-peer-deps
npm run build
npx wrangler pages deploy .next --project-name=fluxmind-app
```

5. **Limpe após o deploy:**
```bash
cd ~
rm -rf ~/temp-deploy
```

## ⚠️ Importante

- Sua conta padrão (henrique.carlos@a3offers.com) permanece inalterada
- O token fornecido é usado apenas para este projeto específico
- Recomendo a Opção 2 (GitHub) para deploys futuros automáticos