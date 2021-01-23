# Petful Server

### This server is the back end of our Petful app. 

[Live app](https://petful-client-cyan.vercel.app/)

[Client repo](https://github.com/jenna-chestnut/petful-client)

---

### Adopt a pet who's been waiting for their forever home! 

Petful is an app created to demonstrate a possible platform for animal shelters to allow adoption of cats and dogs. Potential adopters join our queue, and can watch in real time as pets are matched up with their new owners.

When you join the adoption waiting list, you'll wait until you are first in line.

Once it's your turn to pick, Petful will show you two animals - a cat and dog - that have been waiting the longest for their new family. It's then up to you to choose who you'll take home. (No pressure!)

---

### Tech stack  
This server-side app was created with:    
<img align="left" alt="Visual Studio Code" width="26px" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/visual-studio-code/visual-studio-code.png" />
<img align="left" alt="JavaScript" src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" />
<img align="left" alt="NodeJS" src="https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white" />
<img align="left" alt="ExpressJS" src="https://img.shields.io/badge/Express.js-404D59?style=for-the-badge" />
<img align="left" alt="Heroku" src="https://img.shields.io/badge/Heroku-430098?style=for-the-badge&logo=heroku&logoColor=white" />
<img align="left" alt="Git" width="26px" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/git/git.png" />
<img align="left" alt="GitHub" width="26px" src="https://raw.githubusercontent.com/github/explore/78df643247d429f6cc873026c0622819ad797942/topics/github/github.png" />

---

### Endpoints Tree 

➖**Routes🔻**    
➖**BASE URL: /api**   

➖➖*/people*   
(GET) returns names of people in our adoption line, 
(POST) adds the submitted name to the end of our adoption line

➖➖*/pets* 
(GET) returns name and details of the 1 dog and 1 cat that are first up to be adopted,
(DELETE) 'adopts' one of the pets in line, as well as removing the name of the new owner from the adoption line