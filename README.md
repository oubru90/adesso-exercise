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
Both applications are made with NextJs and using the "App router" feature for the routing, based on React Server components.

### App
A quick list of features:
- Login
- Logout
- Profile page
- Edit profile info
- Delete user
- List of logged user posts
- Create new post
- Post details page with comments
- Localization IT / EN

This app communicates with the GoRest service using the GraphQL APIs.  
All the mutations requests are made with the Nextjs Server Actions.

__Main problems__:  
1. No loading states UI during mutations
2. Errors difficult to handle


### Backoffice
A quick list of features:
- Login only with admin/admin
- Logout
- All users paginated list
- Block user

This app communicates with the GoRest service using the REST APIs.  
The login flow is made with server actions (login/logout) and the nextjs middleware.  
All the requests to the server API are made by client using the `fetch()` method, no additional library installed.
