# Steps
1. Change the current directory to koa-redis, run command `docker build -t web .`
2. Create a user-defined bridge to provide automatic DNS resolution between containers, run command `docker network create net`
3. Create a redis container, command: `docker run --name redis --network net -d redis:4.0.10`
4. Create web container, command: `docker run --name web --network net -p 8081:8080 -d web`
5. Open the browser, visit 127.0.0.1:8081, refresh the page.
