# CRUD de disciplinas da faculdade

## Como rodar o projeto:
- Setup inicial:
```bash
git clone https://github.com/danielbergholz/university-crud.git
yarn
docker run --name nome_do_banco -p 27017:27017 -d -t mongo
```

- Rodar o servidor:
```bash
yarn dev
```

- Fazer um build para produção:
```bash
yarn build
yarn start
```

## Rotas:
### GET /disciplinas
- Lista as disciplinas disponíveis

### POST /disciplinas
- Cria uma disciplina
- Corpo da requisição:
  - nome: string
  - professor: string
  - departamento: string
  - codigo: number
  - qtdCreditos: number

### PUT /disciplinas/{id}
- Atualiza uma disciplina
- Parâmetros de rota da requisição:
  - id: string
- Corpo da requisição (os campos são opcionais, pode mandar só um campo por vez):
  - nome?: string
  - professor?: string
  - departamento?: string
  - qtdCreditos?: number

### DELETE /disciplinas/{id}
- Deleta uma disciplina
- Parâmetros de rota da requisição:
  - id: string
