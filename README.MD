# <b>Pokedex React Native</b>

Este é um app desenvolvido em React Native usando o Expo, que renderiza em uma WebView a página principal do [Pokedex Next](<https://github.com/guilhermeFCarvalho/pokedex-next>). A aplicação permite que o usuário salve com os Pokemons exibidos na WebView, recebendo eventos e armazenando localmente com AsyncStorage e Redux para gerenciar o estado.

## Features:
* Exibe uma WebView do projeto [Pokedex Next](<https://github.com/guilhermeFCarvalho/pokedex-next>)
* O app recebe eventos da WebView com as informações do Pokemons e like ou dislike.
* Utiliza Redux para gerenciar o estado dos Pokémons e AsyncStorage para persistir esses dados.
* Possui uma estrutura de navegação com tabs para acessar diferentes telas de Home, Pokedex e Favoritos.
* Permite que o usuário exclua os Pokemons que salvou da WebView
* Possui cobertura de testes no reducer


### Como rodar o projeto
1. Configure o arquivo .env com a URL do projeto [Pokedex Next](<https://github.com/guilhermeFCarvalho/pokedex-next>), que deve estar rodando localmente ou em um servidor. Adicione a seguinte variável no arquivo .env:

~~~env
EXPO_PUBLIC_WEBVIEW_URL=http://localhost:3000
~~~
obs: Substitua http://localhost:3000 pela URL onde o projeto Next.js está sendo executado.


2.  Instale as dependências rodando o seguinte comando na pasta raiz do proketo:

~~~bash
npm install
~~~


3. Para rodar o aplicativo no Android, utilize o  comando:

~~~bash
npm run android
~~~

4. Para rodar os testes, execute o seguinte comando:

~~~bash
npm run test
~~~