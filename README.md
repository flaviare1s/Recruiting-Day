# Desafio IEL - Fintech Web3

Este repositório contém três desafios desenvolvidos durante o processo seletivo do IEL, focados em tecnologias Web3 e Fintech.

## 📁 Estrutura do Projeto

```
├── Desafio 01/          # Login Web3
├── Desafio 02/          # Calculadora e Validações
├── index.html           # Desafio 03 - Dashboard Sepolia
├── index.js             # Lógica do Dashboard
├── styles.css           # Estilos do Dashboard
└── package.json         # Dependências do projeto
```

## Desafios

### Desafio 01 - Login Web3

**Equipe:** Flávia Reis e [Nicolas Freire](https://github.com/nicolasfr-dev)

Sistema de login Web3 que permite ao usuário inserir:

- **Endpoint da API**: URL da Alchemy para conexão com a blockchain
- **Endereço da Carteira**: Endereço Ethereum no formato 0x...

**Funcionalidades:**

- Interface limpa e intuitiva para inserção de credenciais Web3, apenas usando HTML e CSS
- Design responsivo

**Tecnologias:** HTML5, CSS3

---

### Desafio 02 - Funções JavaScript


Aplicação completa com três funcionalidades principais:

#### Calculadora de Juros Compostos

- Cálculo de investimentos com juros compostos
- Suporte para diferentes períodos (anos, meses, dias)
- Exibição do valor final e total de juros gerados

#### Validação Web3

- Validação de endereços de carteira Ethereum
- Ordenação de transações por valor (maior para menor)
- Lista de transações mockadas para demonstração

#### Verificador de Força de Senha

- Análise completa da força de senhas
- Critérios: tamanho mínimo, maiúsculas, minúsculas, números e caracteres especiais
- Feedback visual em tempo real

**Tecnologias:** HTML5, CSS3, JavaScript

---

### Desafio 03 - Dashboard Sepolia (Raiz do Projeto)

Dashboard completo para monitoramento da rede Ethereum Sepolia usando a API da Alchemy.

#### Funcionalidades

- **Dados da Conta**: Endereço, saldo (wei/ETH), transaction count
- **Informações da Rede**: Chain ID, nome da rede, versão do cliente
- **Dados de Gas**: Gas price, priority fee, base fee
- **Último Bloco**: Número, hash, timestamp, quantidade de transações
- **Histórico de Fees**: Base fees e rewards dos últimos 5 blocos

#### Tecnologias

- **Frontend**: HTML5, CSS3, JavaScript
- **Blockchain**: Ethers.js v5.7.2
- **API**: Alchemy Ethereum API
- **Rede**: Ethereum Sepolia Testnet

---

## Como Configurar e Testar

### Pré-requisitos

1. **Conta na Alchemy**
2. **Carteira Ethereum** (MetaMask recomendado)
3. **ETH de teste** na rede Sepolia

### 1. Criando uma Conta na Alchemy

1. Acesse [https://www.alchemy.com/](https://www.alchemy.com/)
2. Clique em "Sign Up" e crie sua conta
3. Faça login no dashboard
4. Clique em "Create New App"
5. Configure:
   - **Name**: Nome do seu projeto (ex: "Meu Dashboard Sepolia")
   - **Chain**: Ethereum
   - **Network**: Sepolia
6. Clique em "Create App"
7. No dashboard, clique no seu app e vá em "API Key"
8. Copie a URL HTTPS que aparece (formato: `https://eth-sepolia.g.alchemy.com/v2/SUA_API_KEY`)

### 2. Criando uma Carteira Ethereum

#### Opção 1: MetaMask (Recomendado)

1. Instale a extensão [MetaMask](https://metamask.io/) no seu navegador
2. Clique em "Create a Wallet"
3. Crie uma senha segura
4. **IMPORTANTE**: Anote e guarde em local seguro a frase de recuperação (seed phrase)
5. Adicione a rede Sepolia:
   - Abra MetaMask → Settings → Networks → Add Network
   - Network Name: `Sepolia`
   - New RPC URL: `https://sepolia.infura.io/v3/`
   - Chain ID: `11155111`
   - Currency Symbol: `ETH`
6. Copie o endereço da sua carteira (formato: `0x...`)

#### Opção 2: Carteira Online (Para testes apenas)

1. Acesse [https://vanity-eth.tk/](https://vanity-eth.tk/)
2. Clique em "Generate" para criar uma carteira
3. **ATENÇÃO**: Anote tanto o endereço quanto a chave privada
4. **IMPORTANTE**: Use apenas para testes! Nunca use para valores reais

### 3. Obtendo ETH de Teste (Sepolia)

1. Acesse um dos faucets da Sepolia:
   - [Alchemy Sepolia Faucet](https://sepoliafaucet.com/)
   - [Sepolia PoW Faucet](https://sepolia-faucet.pk910.de/)
2. Cole o endereço da sua carteira
3. Resolva o captcha/complete a verificação
4. Aguarde o ETH de teste chegar (pode levar alguns minutos)

### 4. Executando a Aplicação

1. Clone este repositório:

```bash
git clone https://github.com/flaviare1s/Recruiting-Day.git
cd Recruiting-Day
```

2. Instale as dependências:

```bash
npm install
```

3. Abra o arquivo `index.html` no navegador ou use um servidor local

4. No Dashboard Sepolia:
   - Cole sua URL da Alchemy no campo "Endpoint"
   - Cole o endereço da sua carteira no campo "Endereço"
   - Clique em "Conectar & Carregar"

### 5. Testando os Desafios

#### Desafio 01

- Abra `Desafio 01/index.html`
- Insira os mesmos dados (endpoint e carteira)

#### Desafio 02

- Abra `Desafio 02/index.html`
- Teste a calculadora de juros compostos
- Valide endereços Ethereum
- Teste o verificador de senhas

---

## Segurança

- ⚠️ **NUNCA** exponha sua API key publicamente
- ⚠️ Use apenas ETH de teste na rede Sepolia
- ⚠️ Mantenha suas chaves privadas seguras
- ⚠️ Este projeto é apenas para fins educacionais
