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