# Meetups Application

<details open="open">
<summary>Table of Contents</summary>

- [About the Project](#about-the-project)
  - [Technologies Used](#technologies-used)
  - [Components](#components)
  - [Learnings from the project](#things-i-got-to-learn-developing-this-project)
- [How to use project locally](#how-to-use-project-locally)
  - [Prerequisites](#prerequisites)
  - [Clone repo locally](#clone-repo-locally)
  - [Deploy on Docker](#deploy-on-docker)
- [Github Actions & Workflows](#github-actions-&-workflows)
- [Future plans with the project](#future-plans-with-the-project)

</details>

# About the Project

https://user-images.githubusercontent.com/77600959/174349163-dacef354-4634-4118-926f-4af61b921181.mp4

Well this might look like a simple meetups application where you can add your meetup by filling up the form, and it will be stored in the database and can be seen in the fronted collectively as per the selected city. But, what I have tried to achieve is to Devopsify the whole project i.e to implement the principles, concepts and tools that come under Devops eg. **Docker, Kubernetes, CI/CD, Github actions/workflows, Testing and much more.** 

I started this project initially to take hands on experience and test/apply all my knowledge of DevOps tools like Docker, Kubernetes and whatever I learn in future. But, then I developed this as a Demo project to teach and guide my team the concepts of Devops, Docker, Kubenrtes etc. when I was a intern at DoK community leading working-group-operations-and-workflows. This also proved to be a Demo project for the main project of community i.e rap-god-api, as I showed in this project that how Cassandra database(which is a NoSQL distributed database) can be connected to Backend of application.

This is a proper full stack project which has a proper frontend, backend with endpoints, and cassandra database which proves to be a complete project to demonstrate how all these three can be connected and deployed to either Docker containers or Kubernetes clusters. Till now this application can be deployed on Docker with a single command and has github actions that automatically update the Backend and Frontend image on DockerHub when a code is pushed or a PR is merged in the repo. But, I have planned to experiment more with the code so that I get hands on experience of all my learnings and develop this project as a complete DevOps project that beginners can use as a reference to get started. Here are my future plans with this project.

## Technologies Used

- **For Frontend**
   - HTML
   - CSS
   - Javascript
   - NextJS framework
   
- **For Backend**
   - NodeJS
   - ExpressJS
   - express-cassandra
   
- **Database**
   - Apache Cassandra
   
- **To Devopsify**
   - Docker
   - Kubernets
   - Github actions/workflows
   
## Components

