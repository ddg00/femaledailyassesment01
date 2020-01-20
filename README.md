## Installation

```bash
$ npm install
```
rename **.env.example** into **.env**
```
APP_ID       // Get from Facebook developer at app -> Settings -> basic
SECRET       // Get from Facebook developer at app -> Settings -> basic
USER_TOKEN   // Can be generate at https://developers.facebook.com/tools/explorer
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## API Feeds
endpoint to get facebook feeds
```$xslt
curl -i -X GET \
  "https://localhost:3000/facebook/feeds"
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```
