# Meetups Application

<details open="open">
<summary>Table of Contents</summary>

- [About the Project](#about-the-project)
  - [Technologies Used](#technologies-used)
  - [Components](#components)
- [How to use project locally](#how-to-use-project-locally)
  - [Prerequisites](#prerequisites)
  - [Clone Repository locally](#clone-repository-locally)
  - [Deploy on Docker](#deploy-on-docker)
  - [Access Cassandra on CLI](#access-cassandra-on-cli)
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
   - Kubernetes
   - Github actions/workflows
   
## Components

  1. **Frontend**
  2. **Backend**
  3. **Database**

# How to use project locally

## Prerequisites

Before proceeding further we need to have some tools and CLI installed locally:

1. **Docker:** A containerization tool where we will deploy our application. Download it from [here](https://www.docker.com/products/docker-desktop). To check your installation run command `docker --version`.

   Output:

   ```sh
   Docker version 20.10.11, build dea9396
   ```
   
2. **Docker Desktop:** Docker Desktop is an GUI tool for Docker that makes it easier to manage your containerized applications, microservices and your images. Download it from [here](https://www.docker.com/products/docker-desktop/)

3. **kubectl:** Kubernetes command-line tool that allows you to run commands against Kubernetes clusters. Download it from [here](https://kubernetes.io/docs/tasks/tools/). To check your installation run command `kubectl version --client`.

   Output:

   ```sh
   Client Version: version.Info{Major:"1", Minor:"22", GitVersion:"v1.22.0", GitCommit:"c2b5237ccd9c0f1d600d3072634ca66cefdf272f", GitTreeState:"clean", BuildDate:"2021-08-04T18:03:20Z", GoVersion:"go1.16.6", Compiler:"gc", Platform:"windows/amd64"}
   ```

## Clone Repository Locally

1. Fork the [repository](https://github.com/yashgangwar7558/Meetups_Application).

    ![fork](https://www.freecodecamp.org/news/content/images/2022/02/image-29.png)
    
2. Open your terminal or Git Bash in the folder where you want to clone the repo, and run command

    ```sh
    git clone https://github.com/<GITHUB_USERNAME>/Meetups_Application.git
    ```
    Now the repo is successfully cloned locally in your system.
    
## Deploy on Docker

1. `cd` into the root repo folder

2. Now we need to run the docker compose file, to run the containers for Frontned, Backend and Cassandra database together 

    Command:
    ```sh
    docker-compose -f docker-compose.yaml up
    ```
    
    Docker will first fetch and download the images for Frontend, Backend and Cassandra from DockerHub and then deploy them in containers on docker.
   
3. Open Docker Desktop, go to containers and you will be able to see all your containers for Meetups Application running. It should look something like this:

    ![image](https://user-images.githubusercontent.com/77600959/174449915-23934edf-a11f-469d-a2dd-0421245233ab.png)

    > NOTE: It might be possible that your caasandra container is running, this is because it takes around 60sec to start cassandra container, so you can retry running it after 1-2 mins.
    
4. You can now access your application on `localhost:3000` and try adding a new meetup.

## Access Cassandra on CLI


