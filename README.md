# Rockeseat - A Semana Omnistack 10(DevRadar)
## Objetivo
Contruir uma aplicação que permita localizar devs do Github perto de mim.

## Projetos
### Backend
API(Express) que aceita o usuário do github, tecnologias, latitude e longitude, para popular um banco em MongoDB.

### Frontend
Página em React que possui um formulário para cadastrar os devs e uma listagem de quem está cadastrado ao lado direito.

### Mobile
Aplicação que mostra um mapa com um campo de texto para procurar os devs pertos de você, pela tecnologia.

## Como executar
### Backend
1. Acesse a pasta `backend` e execute `yarn`;

1. Abra o arquivo `.env.example` e o renomeie para `.env`;

1. Mude o parâmetro `MONGO_STRING_CONNECTION` pela string de conexão necessária para se conectar ao MongoDB. Você pode criar uma conta gratuita para testar esse app(https://www.mongodb.com/cloud);

1. Execute `yarn dev`.

Pronto, seu servidor está funcionando :).

### Frontend
1. Acesse a pasta `web` e execute `yarn`;

1. Execute `yarn start`.

Sua aplicação React iniciará, e será feito uma request para sua api através do endereço `http://localhost:3333`.

### Mobile
1. Acesse a pasta `mobile` e execute `yarn`;

1. Abra um emulador Android;

1. Execute `yarn start`;

1. Se você estiver usando um emulador em seu computador, clique no botão "Run on Android device/emulator";

1. Se você estiver usando seu celular, instale o aplicativo "Expo", e use-o para ler o QR Code presente na página aberta ao rodar o comando "yarn start".


![Captura de tela de 2020-01-16 20-00-52](https://user-images.githubusercontent.com/4103305/72570394-8c1cb780-389b-11ea-8b98-c1d52f19bd7a.png)

![Captura de tela de 2020-01-16 20-00-54](https://user-images.githubusercontent.com/4103305/72570398-8d4de480-389b-11ea-8c72-50ae2c4f74d7.png)

![Captura de tela de 2020-01-16 20-00-32](https://user-images.githubusercontent.com/4103305/72570400-8f17a800-389b-11ea-9205-26f2a84b2a6b.png)

![Captura de tela de 2020-01-16 20-00-40](https://user-images.githubusercontent.com/4103305/72570404-90e16b80-389b-11ea-8b49-bd72cd183675.png)

![Captura de tela de 2020-01-16 20-00-46](https://user-images.githubusercontent.com/4103305/72570417-976fe300-389b-11ea-88b4-d1593e1643b4.png)


