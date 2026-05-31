# DioBank

> Fork base para o **Desafio DioBank** do Bootcamp **Formação TypeScript Fullstack Developer** da [DIO](https://www.dio.me/).

Projeto original desenvolvido por [Nathally Souza](https://github.com/nathyts).

## Sobre o projeto

Simulação de um sistema bancário simples utilizando os conceitos de **Programação Orientada a Objetos** com TypeScript: classes abstratas, herança, encapsulamento e sobrescrita de métodos.

### Tipos de conta

| Classe | Descrição |
|---|---|
| `DioAccount` | Classe abstrata base com depósito, saque e consulta de saldo |
| `PeopleAccount` | Conta de pessoa física (CPF + dados da conta) |
| `CompanyAccount` | Conta empresarial com método de empréstimo (`getLoan`) |
| `BrokenAccount` | Conta bônus — todo depósito acrescenta R$ 10 ao valor informado |

## Tecnologias

- [TypeScript](https://www.typescriptlang.org/)
- [ts-node-dev](https://github.com/wclr/ts-node-dev)

## Como rodar o projeto

```bash
# 1. Clone o repositório
git clone <url-do-repositorio>

# 2. Instale as dependências
npm install

# 3. Execute o projeto
npm run dev
```

## Desafios

- [x] Implementar `deposit` e `withdraw` na classe `DioAccount`
- [x] Implementar `getLoan` na classe `CompanyAccount`
- [x] Criar `BrokenAccount` com depósito bônus (+10 ao valor informado)
- [x] Todos os atributos de qualquer conta devem ser privados
- [x] `name` e `accountNumber` não podem ser alterados interna ou externamente
- [x] Criar instâncias para cada tipo de conta no `app.ts` e executar os métodos disponíveis
