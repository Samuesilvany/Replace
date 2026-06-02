# Replace

# Projeto

O **Replace** é uma plataforma desenvolvida com o objetivo de reduzir o desperdício de alimentos próximos da data de validade, conectando mercados, padarias e outros estabelecimentos a consumidores interessados em adquirir esses produtos com descontos especiais.

A proposta busca unir **tecnologia, economia e sustentabilidade**, permitindo que alimentos ainda próprios para consumo sejam aproveitados em vez de descartados.


# Integrantes do Grupo

- Samuel Silvany
- Steffani Mariana
- Yuri Correia
- Pablo Kallebe
- Calebe Fernandes
- Fernando Correia

# Problema / Desafio Abordado

Milhares de alimentos são descartados diariamente por mercados, padarias e restaurantes apenas por estarem próximos da data de validade, mesmo estando em boas condições para consumo.

Esse desperdício gera:

- Prejuízo financeiro para os estabelecimentos;
- Aumento da produção de lixo;
- Desperdício de recursos naturais;
- Impactos ambientais negativos;
- Menor acesso da população a alimentos com preços acessíveis.

#  Solução Proposta

O Replace funciona como uma plataforma intermediária entre estabelecimentos e consumidores.

# Fluxo de funcionamento:

1. O estabelecimento cadastra produtos próximos da validade;
2. O sistema aplica descontos promocionais;
3. Os consumidores visualizam as ofertas disponíveis;
4. Os produtos são vendidos antes do descarte.

Com isso:

- Os mercados reduzem prejuízos;
- Os consumidores economizam;
- O desperdício de alimentos diminui.

# Tecnologias Utilizadas

# Front-end

- React.js
- JavaScript (JSX)
- HTML5
- CSS


# Back-end

- Node.js
- Express.js
- Json 

# Banco de Dados

- PostgreSQL

# Ferramentas de Desenvolvimento

- Visual Studio Code
- pgAdmin 4
- Git
- GitHub


# Funcionalidades Implementadas

# Consumidor

- Visualização de produtos em promoção;
- Consulta de preço original e preço com desconto;
- Visualização da data de validade;
- Navegação por categorias.

# Mercado

- Cadastro de produtos;
- Atualização de informações;
- Controle de estoque;
- Gerenciamento de promoções.

# Sistema

- Cadastro de usuários;
- Cadastro de produtos;
- Listagem de produtos;
- Controle de descontos;
- Integração com banco de dados PostgreSQL.

# Estrutura do Banco de Dados

 # Tabela: users

Responsável pelo armazenamento dos usuários da plataforma.

| Campo | Tipo |
|---------|---------|
| id | SERIAL |
| name | VARCHAR(100) |
| email | VARCHAR(150) |
| password | VARCHAR(255) |
| role | VARCHAR(20) |
| created_at | TIMESTAMP |

# Tabela: products

Responsável pelo armazenamento dos produtos cadastrados.

| Campo | Tipo |
|---------|---------|
| id | SERIAL |
| title | VARCHAR(100) |
| description | TEXT |
| original_price | DECIMAL(10,2) |
| discount_percentage | INTEGER |
| final_price | DECIMAL(10,2) |
| quantity | INTEGER |
| expiration_date | DATE |
| sale_day | VARCHAR(30) |
| image_url | TEXT |
| status | VARCHAR(20) |
| market_id | INTEGER |
| created_at | TIMESTAMP |


# Tabela: reservations

Responsável pelas reservas de produtos realizadas pelos usuários.

| Campo | Tipo |
|---------|---------|
| id | SERIAL |
| user_id | INTEGER |
| product_id | INTEGER |
| status | VARCHAR(20) |
| reserved_at | TIMESTAMP |


# Modelo de Monetização

O Replace utiliza um modelo simples de monetização:

# 1. Plano para Estabelecimentos

Mercados, padarias e restaurantes podem pagar uma mensalidade para divulgar seus produtos na plataforma.

# 2. Destaque de Produtos

Estabelecimentos podem pagar para destacar produtos e promoções na página inicial.


# Impacto Esperado

Com a implementação do Replace, espera-se:

- Reduzir o desperdício de alimentos;
- Incentivar o consumo consciente;
- Aumentar a economia para os consumidores;
- Diminuir prejuízos dos estabelecimentos;
- Contribuir para práticas mais sustentáveis.


# Conclusão

O Replace demonstra como a tecnologia pode ser utilizada para resolver problemas reais do cotidiano. Através da conexão entre estabelecimentos e consumidores, a plataforma transforma alimentos que seriam descartados em oportunidades de economia, sustentabilidade e responsabilidade social.