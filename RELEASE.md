# Release v1.1.0

Data: 2026-05-18

## Resumo tecnico

Versao focada em segmentacao por interesse, adicionando um catalogo de categorias e paginas especificas para cada grupo PixAchado. A entrega melhora a conversao por permitir que o visitante acesse diretamente o grupo mais alinhado ao seu interesse.

## Entregas

- Criacao do catalogo `grupos/index.html` com cards para todas as categorias disponiveis.
- Criacao de 34 landing pages individuais em `grupos/*.html`.
- Inclusao do arquivo `grupos.css` para padronizar o visual das paginas de categoria.
- Inclusao das imagens das categorias em `img/grupos`.
- Adicao de chamadas na pagina principal para o visitante escolher um grupo por categoria.
- Ajuste de sintaxe no `script.js`, preservando os novos nomes do popup.
- Refinamento visual no bloco "Como funciona" para evitar sobreposicao entre o rotulo e o titulo.

## Arquitetura da solucao

- `index.html`: continua como landing principal da comunidade.
- `grupos/index.html`: funciona como hub de categorias.
- `grupos/*.html`: paginas dedicadas por grupo, cada uma com imagem, CTA e texto especifico.
- `grupos.css`: centraliza estilos do hub e das paginas especificas.
- `img/grupos`: armazena os criativos das categorias.

## Observacoes

- Os CTAs das paginas de grupo ainda usam placeholder de WhatsApp e devem ser substituidos pelos links reais de cada grupo.
- As categorias refletem as imagens disponiveis em `img/grupos`, incluindo categorias extras ja presentes na pasta.
- A classificacao das ofertas depende da categoria cadastrada pelo vendedor.

---

# Release v1.0.0

Data: 2026-05-18

## Resumo tecnico

Primeira versao publica da landing page PixAchado, implementada como site estatico com HTML, CSS e JavaScript vanilla. A entrega prioriza carregamento simples, facilidade de publicacao em hospedagens estaticas e estrutura organizada para manutencao.

## Entregas

- Criacao da landing page principal em `index.html`.
- Estilizacao completa em `style.css`, seguindo a identidade visual em vermelho, laranja e amarelo/dourado.
- Separacao da logica JavaScript em `script.js`.
- Implementacao de popup de prova social simulando entrada de novos membros no grupo.
- Inclusao de `favicon.png` para exibicao do icone na aba do navegador.
- Inclusao de rodape com direitos reservados.
- Inclusao de licenca MIT em `LICENSE.txt`.
- Criacao do `README.md` com preview, instrucoes de uso e estrutura do projeto.
- Adicao de imagem de exemplo em `assets/preview.png`.

## Arquivos principais

- `index.html`: estrutura semantica da landing page.
- `style.css`: identidade visual, responsividade, componentes e animacoes.
- `script.js`: rotacao automatica dos nomes exibidos no popup.
- `assets/preview.png`: imagem de demonstracao do site.
- `LICENSE.txt`: termos da licenca MIT.

## Observacoes

- O link do WhatsApp permanece como placeholder e deve ser substituido pelo link oficial antes do deploy.
- O popup usa uma lista local com 20 nomes simulados para reforco visual de atividade no grupo.
- A pagina nao depende de framework ou etapa de build.
