# 🚀 Configurar FluxMind no Cloudflare Pages

Agora que o código está no GitHub: https://github.com/HenriqueFlux/FluxMind

## Passos para Deploy Automático:

### 1. Acesse o Cloudflare Dashboard
- Entre em: https://dash.cloudflare.com
- Use a conta: henriqueolivcarlos@gmail.com

### 2. Crie o Projeto no Cloudflare Pages
1. Clique em **Workers & Pages** no menu lateral
2. Clique em **Create application**
3. Selecione **Pages**
4. Clique em **Connect to Git**

### 3. Conecte o GitHub
1. Clique em **Connect GitHub**
2. Autorize o Cloudflare a acessar sua conta GitHub
3. Selecione o repositório **HenriqueFlux/FluxMind**

### 4. Configure o Build
Preencha os campos exatamente assim:

- **Project name**: `fluxmind` (ou outro nome se preferir)
- **Production branch**: `main`
- **Framework preset**: `Next.js`
- **Build command**: `npm install --legacy-peer-deps && npm run build`
- **Build output directory**: `.next`

### 5. Variáveis de Ambiente (Avançado)
Clique em **Environment variables** e adicione:
- **NODE_VERSION**: `18`

### 6. Deploy
1. Clique em **Save and Deploy**
2. Aguarde o build (cerca de 2-5 minutos)
3. Seu site estará disponível em: `https://fluxmind.pages.dev`

## 🎯 Próximos Passos

### Custom Domain (Opcional)
Após o deploy:
1. Vá em **Custom domains**
2. Clique em **Set up a custom domain**
3. Digite seu domínio
4. Configure o DNS conforme instruído

### Deploy Automático
- Cada push para o branch `main` fará deploy automático
- Branches diferentes criam preview deployments

## 📝 Comandos Úteis

Para fazer mudanças futuras:
```bash
cd /Users/henriquecarlos/Documents/GitHub/FluxMind
git add .
git commit -m "Sua mensagem"
git push origin main
```

O deploy será feito automaticamente!