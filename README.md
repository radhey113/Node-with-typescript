### Node JS with TypeScript

#### Pre-Requisite
- Install Node version >= 8
     - [Install Nodejs](https://nodejs.org/en/)
- Install Typescript on your system
     -  `npm install -g typescript`
- Install Mongodb version >= 3.4
     - [Install Mongodb for Ubuntu](https://docs.mongodb.com/tutorials/install-mongodb-on-ubuntu/)
     -  [Install Mongodb for OSX](https://docs.mongodb.com/manual/tutorial/install-mongodb-on-os-x/)
     -  [Install Mongodb for Windows](https://docs.mongodb.com/manual/tutorial/install-mongodb-on-windows/)

#### Steps
In the root directory of this code, use the following commands:
`npm install` - _it will install your project dependencies_
`npm run ts` - _whenever you change in your server side typescript code it will watch and compile it_
`npm run start` - _it will create build and run server from created build directory_
`npm run server` - _run server from build directory_

_***Note:*** You need to open port 4000 from the server configurations to make it avaiable for `demo-dev server`. if your want to change your server port you can set it through `env` variable but you need to open the same port from your server config too:_

Default dev ports:

    - '4000'
with the following lines:

Default production port:

    - '4001`

#### How to set Envrionment Variable:

**_Steps to set Custom NODE_ENV (`development/production`):_**
Set environment variable `NODE_ENV` for MongoDB custom path
Cammand: export `NODE_ENV=<NODE-ENV>` (Set Node Environment)
To check/verify your environment variable `NODE_ENV` value, use command: `echo ${NODE_ENV}`

**_Steps to set Custom mongodb connection string:_**
Set environment variable `MONGO_URI` for MongoDB custom path
Cammand: export `MONGO_URI=<MONGO-URI>` (Connection string to connect with db)
To check/verify your environment variable `MONGO_URI` value, use command: `echo ${MONGO_URI}`

**This is all we need to deploy this demo `node-with-typescript-express` application.**
_If anyone wants any further instruction can contact me through email._
**_Thank you_**