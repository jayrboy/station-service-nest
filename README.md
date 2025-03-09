## Project setup

```bash
$ pnpm install
```

## Compile and run the project

```bash
# development
$ pnpm run start

# watch mode
$ pnpm run start:dev

# production mode
$ pnpm run start:prod
```

## Run tests

```bash
# unit tests
$ pnpm run test

# e2e tests
$ pnpm run test:e2e

# test coverage
$ pnpm run test:cov
```

## Sequelize migration

```sh
$ pnpm install sequelize sequelize-typescript pg pg-hstore @nestjs/config dotenv
$ pnpm install --save-dev @types/sequelize sequelize-cli@6.2.0
```

- create `.sequelizerc` for initial

```js
const path = require('path');
require('ts-node/register'); // Add this to work with TypeScript

module.exports = {
  config: path.resolve('config', 'config.ts'),
  'migrations-path': path.resolve('migrations'),
  'seeders-path': path.resolve('seeders'),
  'models-path': path.resolve('models'),
};
```

- initial sequelize

```sh
$ npx sequelize init
$ npx sequelize-cli db:migrate
$ npx sequelize-cli db:seed:all
```
