<div align="center" style="margin-bottom:8px">
  <img src="https://www.ahub.tech/_next/image?url=%2Fimg%2Flogo.png&w=384&q=75" />
  <p style="font-size:20px;color:#F72589;font-family:sans-serif" align="center" >Valorizator</p>
  <img src="https://img.shields.io/github/languages/count/vcwild/hub_valorizator?color=%23F72589&style=flat-square" alt="languages" />
  <img src="https://img.shields.io/github/license/vcwild/hub_valorizator?color=%23F72589&style=flat-square" alt="license" />
  <img src="https://img.shields.io/github/repo-size/vcwild/hub_valorizator?color=%23F72589&style=flat-square" alt="repo size" />
</div>

# Hub Valorizator

Hub Valorizator is a dockerized back-end CRUD system for compliment exchange between users. It is done by allowing users to create tags and assing compliments to each other.

## Table of contents

- [Features](#features)
- [How to Run](#how-to-run)
- [Contribute](#contribute)
- [License](#license)

## Features

- [Account creation](#account-creation)
- [JWT session authentication](#jwt-session-authentication)
- [Tag creation](#tag-creation)
- [Compliment user](#compliment-user)
- [Tag listing](#tag-listing)
- [User listing](#user-listing)

### Account Creation

Scope `users`

Method `post`

```json
Body: {
  "name": "name",
  "email": "email@email",
  "password": "password",
  "admin": false
}
```

### JWT session authentication

Scope `auth`

Method `post`

```json
Body: {
  "email": "email@email",
  "password": "password"
}
```

Returns a JWT session token

### Tag creation

Requires: User authentication Bearer Token, admin privileges

Scope `tags`

Method `post`

```json
Body: {
  "name": "tag name"
}
```

### Compliment user

Requires: User authentication Bearer Token

Scope `compliments`

Method `post`

```json
Body: {
  "tag_id": "uuid of the tag being assignet to the receiver",
  "user_sender": "uuid of the user who is sending the compliment",
  "user_receiver": "uuid of the user who is being assigned a compliment",
  "message": "a compliment message"
}
```

### Tag listing

Requires: User authentication Bearer Token, admin privileges

Scope `tags`

Method `get`

### User listing

Requires: User authentication Bearer Token, admin privileges

Scope `users`

Method `get`

## How to Run

If you want to deploy the app locally, follow the instructions below.

### Requirements

- Docker-compose
- Node
- Yarn

#### Dependencies

- Bcrypt
- Express framework
- JSON Web token
- Postgres driver
- TypeORM

In the project root folder, run:

```sh
# docker compose postgres mount
docker-compose up -d

# run the back-end server
yarn dev
```

## Contribute

Found a bug or want to contribute? Feel free to reach out and create an issue.

## License

The project is under the MIT license.
