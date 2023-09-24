# TASKS

Este arquivo serve como um guia de anotações, contendo: observações, sugestões e to-dos.

---

## Modificações no Projeto - App de Previsão do Tempo - 24/09/2023

### 1. Alteração na estrutura do projeto

[x] Mudar os ícones da <code>/public</code> para <code>src/icons</code> ✅

[x] Adicionar o .env no gitignore ✅

[ ] Adicionar um README ao projeto

[ ] Refatorar o projeto e separar os componentes (continuar o trabanho no componente **Form**)

---

### 2 Alterar o layout da aplicação

[ ] Centralizar o componente que renderiza a previsão do tempo

[ ] Diminuir o tamanho do input de pesquisa

[x] Adicionar o nome do projeto na index.html ✅

[x] Adicionar favicon ✅

[x] Adicionar um fonte ao projeto ✅

---

### 3 FIX

Se eu pesquisar por **"Salvador"** a API vai me retornar **"El Salvador"**, para que a API me retorne a capital da Bahia, é necessário que eu passe outro parametro no input de pesquisa.
> Ex: Salvador, BR

Só assim ele me retorna: **Salvador - Bahia** em vez de **"El Salvador"**

---

### **Observações**: 

Ao comparar o retorno que a atual API está dando sobre o temperatura com outros provedores de clima e tempo, parece haver uma certa discrepância nos números. Talvez seja a forma de representação *celcius/fahrenheit*.

Analisar, e se for o caso trocar a API.