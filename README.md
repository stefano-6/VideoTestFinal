# VideoTest

**Setup Database - Postgres**<br>
1 - Intall Docker for your OS from https://docs.docker.com/engine/install/
  
2 - Pull and Run a container for Postgres:<br><br>
    _In a Terminal_ <br><br>
    docker run --name postgres -e POSTGRES_PASSWORD=Abcd1234! -e POSTGRES_DB=videotestdb -d -p 5432:5432 postgres

**Launch Backend and Frontend**

3 - Open 2 Terminals

**_Terminal 1 - Api_**<br>
4 - In api\ folder run:<br><br>
  install npm

5 - Create tables in database:<br><br>
  npx prisma migrate dev

6 - Seed the database with user information:<br><br>
npx prisma db seed

7 - Launch api:<br><br>
node index.js

**_Terminal 2 - Client_**<br>
8 - In client\ folder run:<br><br>
install npm
 
9 - Launch client:<br><br>
ng serve

**_Username and Passwod_** <br>
_Username_: admin@email.com <br>
_Password_: Abcd1234!

**!!!IMPORTANT!!!** <br>
Use the videos  in the Asset\ folder of the client \client\src\assets\videos
