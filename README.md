# O Sistema de Gestão de Obra para Inspeção.

## Índice

- [Sobre](#sobre)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Pré-requisitos](#pré-requisitos)
- [Instalação](#instalação)


## Sobre

O Sistema de Gestão de Obra para Inspeção é uma plataforma projetada para facilitar a gestão e inspeção de obras de construção. Este sistema permite que engenheiros, inspetores e gerentes de projeto acompanhem todas as etapas do processo de construção, garantindo que as normas de segurança e qualidade sejam seguidas.

## Funcionalidades Principais

- **Gerenciamento de Projetos**: Crie, edite e acompanhe projetos de construção.
- **Planejamento de Inspeções**: Agende inspeções de rotina, garantindo que todas as fases da construção sejam inspecionadas de acordo com os regulamentos.
- **Relatórios de Inspeção**: Gere relatórios detalhados das inspeções com observações e status de conformidade, facilitando a identificação e correção de problemas.
- **Colaboração em Tempo Real**: Permita que todos os membros da equipe de projeto visualizem, editem e atualizem as informações em tempo real.
- **Integração com MongoDB**: Aproveite a integração com o banco de dados MongoDB para armazenar e acessar dados de maneira eficiente e segura.

## Tecnologias Utilizadas

- **Next.js**: Framework React para construção de interfaces de usuário rápidas e escaláveis.
- **NextAuth.js**: Biblioteca de autenticação para Next.js, fornecendo métodos seguros de login e gerenciamento de usuários.
- **Tailwind CSS**: Framework de CSS para estilização rápida e customizável.
- **MongoDB**: Banco de dados NoSQL para armazenamento eficiente e flexível de dados.
- **Mongoose**: Biblioteca para modelagem de dados no MongoDB com Node.js, facilitando a criação e validação de esquemas de dados.

## Pré-requisitos

Liste as ferramentas e tecnologias necessárias para executar o projeto. Por exemplo:

- Node.js
- NPM ou Yarn
- MongoDB

## Instalação

Instruções passo a passo sobre como configurar o ambiente de desenvolvimento e executar o projeto. Exemplo:

```bash
# Clone o repositório
git clone https://github.com/thaispng/Inspecao.git

# Entre no diretório do projeto
cd Inspecao

# Instale as dependências
npm install
# ou
yarn install

# Configure as variáveis de ambiente
cp .env.example .env
# Edite o arquivo .env com suas configurações do MongoDB

# Execute a aplicação em modo de desenvolvimento
npm run dev
# ou
yarn dev
