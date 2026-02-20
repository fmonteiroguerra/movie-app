# Movie Finder App

Aplicação web para pesquisar e descobrir filmes utilizando a API do The Movie Database (TMDB). Permite buscar filmes por nome, visualizar os mais populares e consultar detalhes de cada filme em um modal interativo.

---

## 🚀 Demo

[(https://movie-app-58qu.onrender.com/)](https://movie-app-58qu.onrender.com/)

---

## 📸 Preview

(public/preview.png)

---

## ✨ Funcionalidades

- 🔎 Pesquisa de filmes por nome
- 🔥 Listagem de filmes mais populares
- ⏳ Debounce na busca para evitar múltiplas requisições
- 🎬 Modal com detalhes do filme
- 📱 Layout totalmente responsivo
- 🎨 Interface moderna com Tailwind CSS
- ⚡ Integração com API externa (TMDB)

---

## 🛠️ Tecnologias Utilizadas

- React
- Vite
- Tailwind CSS
- Material UI (Modal)
- react-use (useDebounce)
- TMDB API

---

## 📦 Instalação e Configuração

### 1️⃣ Clone o repositório

```bash
git clone https://github.com/fmonteiroguerra/movie-app.git
cd movie-finder
```

### 2️⃣ Instale as dependências

```bash
npm install
```

### 3️⃣ Configure a API Key

Crie um arquivo `.env` na raiz do projeto:

```env
VITE_TMDB_API_KEY=your_api_key_here
```

### 4️⃣ Execute o projeto

```bash
npm run dev
```

A aplicação estará disponível em `http://localhost:5173`

---

## 📁 Estrutura do Projeto

```
src/
 ├── components/
 │    ├── MovieCard.jsx
 │    ├── ModalMovieDetail.jsx
 │    ├── Search.jsx
 │    └── Spinner.jsx
 │
 ├── App.jsx
 ├── App.css
 └── main.jsx
```

---

## 🧠 Conceitos Aplicados

- Consumo de API com `fetch`
- Tratamento de erros
- Debounce para otimização de performance
- Componentização no React
- Responsividade com Tailwind CSS
- Gerenciamento de estado com hooks (`useState`, `useEffect`)
- Modal controlado com estado local

---

## 📈 Melhorias Futuras

- Paginação
- Filtro por categoria
- Ordenação por avaliação
- Página dedicada para detalhes do filme
- Sistema de favoritos
- Dark/Light mode
- Animações no modal

---

## 🔐 Variáveis de Ambiente

| Nome | Descrição |
|------|------------|
| VITE_TMDB_API_KEY | Token de autenticação da API |

---

## 📄 Licença

Este projeto é apenas para fins educacionais.

---

## 👨‍💻 Autor

Desenvolvido por **Felipe Monteiro Guerra**

