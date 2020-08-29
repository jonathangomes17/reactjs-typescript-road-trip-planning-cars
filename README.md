# Road Trip Planning Cars

> Aplicação responsável pelo planejamento de viagens de carros

# Objective

- Proporcionar ao cliente a possibilidade de traçar a melhor rota entre a origem e seu destino, usando os serviços de latitude e longitude do Google

# Resources

- ReactJS (Framework Javascript)
- Styled Components (Construção de folhas de estilos na técnica CSS-in-JS)

# Rules for Developers

- Convenção adotada com o prefixo de branches (Git)

> Deve ser criado com base na master git checkout -b feature/{RELATO_DA_NOVA_TAREFA}

- `feature/` - Nova funcionalidade
- `bugfix/` - Problemas triviais
- `hotfix/` - Problemas críticos

[ConventionalCommits](https://www.conventionalcommits.org/pt-br/v1.0.0-beta.4) foi adotada a padronização de commits

> Deve ser criado no início de cada commit `git commit -am 'perf: ajustes na performance da re-renderização excessiva do componente A'`.

- `feat:` Nova funcionalidade (MINOR)
- `fix:` Correção de problemas (PATCH)
- `refactor:` Refatoração de códigos (PATCH)
- `perf:` Resolução de problemas de performance (PATCH)
- `BREAKING CHANGE:` Quebra de versão (MAJOR)

[SemVer](https://semver.org/) foi adotado como padronagem de versionamento

> Deve ser respeitado MAJOR.MINOR.PATCH. Ex: 0.1.0

# Setup

### Environments

> Arquivo responsável por setar no `process.env` com a finalidade de usar as variáveis de ambientes globalmente e fazer a separação por tipo de ambiente tais como: `development`, `staging`, `testing` e `production`

##### How to

1. Copie o arquivo `config/{AMBIENTE}.env` para dentro da raiz do projeto
2. Mantenha sempre todos os ambientes com as mesmas variáveis para evitar problemas sistêmicos

### Setup

#### Pre-Requisite

- yarn (optional)
- nodejs >= 13.7.0
- npm
- npx (optional)

#### Starting

- Desenvolvimento: `npm run start:dev`
- Homologação: `npm run start:staging`
- Testes: `npm run start:testing`
- Produção: `npm run start:production`

#### Building

- Homologação: `npm run build:staging`
- Testes: `npm run build:testing`
- Produção: `npm run build:production`

# Contributors

1. [Jonathan Alves Gomes](https://github.com/jonathangomes17)
