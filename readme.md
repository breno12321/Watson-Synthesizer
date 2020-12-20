# Watson Text 2 Speech API 🗨🗣

This is a simple API with a web interface to create comments and reproduce their audios throught the a web interface.

![webpage](../smarkio/assets/chrome_cTte5ubbpW.png)

## Development environment

⚙Specs:
- MySql: 8.0.22 (MySql Community Server - GPL)
- Node: v12.18.4
- Computer: 
  - i5 6600k
  - 16GB DDR4 2400Mhz

# Setup 🔨

## Requirements 🧰
- NodeJS: >= v12.18.4
- MySQL
- IBM Watson t2s credentials - *create a [Watson T2S free tier account](https://www.ibm.com/watson/services/text-to-speech/)*
- Git
- Recommend Linux Environment for this walk throught

## Step by step to execute 💨


First of all, make sure your MySQL server is up and running - [Docker](https://hub.docker.com/_/mysql) enviroments make its use easier. Then you can clone the repository with:  

```bash
git clone DESIRED_DIR_NAME git@github.com:breno12321/Watson-Synthesizer.git
```

Done clonning, you can now uncomment the env file, doing 

```bash
cp .env.example .env
```

 in the root directory and fill it with your config and credentials for the application:

- Watson text 2 Speech API key
- Watson text 2 Speech instance URL
- PORT for the server
- Database config:
  - username - make sure to have the permissions already setup in MySQL
  - password
  - database name
  - host
- NODEJS enviroment

After setting up the enviroment you can run: 
```bash
npm run setup
```
 it will create the database under `development` config and migrate all the tables. Then, you can run 

 ```bash
 npm run dev
 ``` 
 
 for development purposes👨‍💻, watching http debug and hot reload for file modifications. But if you want to run it for normal use, run the command: 
 
 ```bash
 npm start
 ```
 and it will start🙌.

 ---

 OBS.: If you want to do a clean start or make sure everything is ok to rebuild the environment, you can run 
 ```bash
 npm run cleanUp
 ``` 
 it will drop the database and remove all audio files.

# Documentation📕

## Postman documentation

There is a collection for postman in `/assets` folder, in which you can import and test some of the features of the api besides the webapp interaction.

## Application folder structure

```
src
├── Audios
├── app.js
├── components
│   ├── Comments
│   │   ├── Comments.controller.js
│   │   ├── Comments.js
│   │   ├── Comments.provider.js
│   │   └── Comments.router.js
│   └── WatsonT2S
│       ├── WatsonT2S.controller.js
│       ├── WatsonT2S.js
│       ├── WatsonT2S.provider.js
│       └── WatsonT2S.router.js
├── db
│   ├── config
│   │   └── config.js
│   ├── migrations
│   │   └── 20201219143238-create-comments.js
│   ├── models
│   │   ├── Comments.js
│   │   └── index.js
│   └── seeders
├── public
│   ├── 30.gif
│   ├── favicon.ico
│   ├── index.html
│   ├── loading.gif
│   ├── script.js
│   └── style.css
├── routes
│   └── index.js
├── server.js
└── utils
    ├── ErrorHandler.js
    └── cleanUpAudios.js
```
# Future improvements

- Tranfer it to TypeScript
- Implement Authentication
- Implement testing
- Implement an API control requests for monitor API consuption
- Create a more UX UI friendily interface with more modern design libs
- Setup a docker-compose file to make 200% easier to boot up the webapp using docker
