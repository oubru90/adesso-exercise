# Scuratti - Adesso exercise

This repository contains an [NX](https://nx.dev/) workspace with 2 NextJS apps and a library with shared code between the two apps.

## Used technologies and libraries
Runtime:
- NodeJS (21.7.3)

Programming language:
- Typescript

Monorepo workspace manager:
- Nx

Frontend
- NextJS, for server side rendering and server actions
- Antd, for UI and Design system
- jose, for JWT tokens management

## Getting started
There are two methods to start the local development environment.

### With Docker
Go to root folder and run:
```
docker-compose run npm 
```
and then
```
docker-compose up -d
```
After few seconds you can open in your browser
- [app.adesso.localhost:3000](http://app.adesso.localhost:3000) for the app frontend
- [backoffice.adesso.localhost:3001](http://backoffice.adesso.localhost:3001) for the backoffice frontend

If you don't use chrome or similar you probably should add the following lines in the file `/et/hosts`:
```
127.0.0.1   app.adesso.localhost
127.0.0.1   backoffice.adesso.localhost
```
or alternatively use [localhost:3000](http://localhost:3000) and [localhost:3001](http://localhost:3001).

## Apps details

