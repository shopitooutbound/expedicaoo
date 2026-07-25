# Controle de Motoristas - Centro de Distribuição

Aplicação web (HTML + JavaScript puro, sem instalação nem build) para
controlar a entrada, carregamento e saída de motoristas em um centro
de distribuição.

## Arquivos do projeto

| Arquivo | Para que serve |
|---|---|
| `index.html` | A aplicação em si (a mesma coisa que `controle-motoristas.html`, com esse nome para funcionar no GitHub Pages) |
| `controle-motoristas.html` | Cópia idêntica do app, útil para abrir localmente com um nome mais descritivo |
| `repositorio.js` | Guarda o login/senha de acesso e informações gerais do app |
| `README.md` | Este arquivo |

**Os três primeiros arquivos precisam sempre estar na mesma pasta** —
o HTML carrega o `repositorio.js` automaticamente ao abrir.

## Funcionalidades

- Tela de login (usuário/senha definidos em `repositorio.js`)
- Registro de chegada de motoristas (placa, nome, doca, se chegou carregado)
- Registro de itens que chegaram no caminhão (manga, tampa, devices)
- Registro de itens sendo carregados no caminhão (mesma estrutura)
- Registro de saída e liberação do motorista
- Histórico completo com filtros, edição de situação do carregamento,
  exclusão de linhas (protegida por senha) e exportação para Excel

## Como usar localmente

Basta abrir o `index.html` (ou `controle-motoristas.html`) direto no
navegador — não precisa de servidor, Node, nem instalação de nada.

Login padrão:
- **Usuário:** `carregamento`
- **Senha:** `shopee123`

Para trocar usuário/senha, edite os valores em `repositorio.js`.

## Como publicar com GitHub Pages

1. Suba estes arquivos para um repositório no GitHub.
2. No repositório, vá em **Settings → Pages**.
3. Em "Source", selecione a branch principal (`main`) e a pasta raiz (`/root`).
4. Salve. O GitHub vai gerar um link público (algo como
   `https://seu-usuario.github.io/nome-do-repositorio/`) onde o app
   fica acessível pelo navegador, sem precisar baixar o arquivo.

## Onde os dados ficam salvos

Os registros são salvos automaticamente no navegador de quem está
usando o app (armazenamento local do navegador). Isso significa que
os dados **ficam no dispositivo/navegador usado**, não em um banco de
dados compartilhado na nuvem. Se quiser um histórico único, acessível
de qualquer dispositivo, será necessário evoluir o projeto com um
backend/banco de dados próprio.

## Aviso de segurança

O login (`repositorio.js`) e a senha de exclusão de registros (`admin`,
usada no Histórico) são travas simples do lado do navegador — não são
autenticação real de servidor. Como este repositório é **público**,
qualquer pessoa que acessar o código no GitHub consegue ver essas
senhas. Elas servem para evitar acesso e exclusões acidentais, não
para proteger contra alguém com intenção de burlar o sistema.
