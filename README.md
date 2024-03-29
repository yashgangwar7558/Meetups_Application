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
   - ReactJS
   
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

  1. **Frontend:** Frontend is made using ReactJS and CSS. This is the directory that includes all the frontend code, it also includes a dockerfile to build the image of the frontend and run as Docker container. There is also a Github action that automatically builds the updated image and pushes to Dockerhub when new code or PR is merged, but what's different is it only gets trigerred when a code is merged in that particular sub-directory i.e meetups-frontend.
  
  2. **Backend:** Backend is made using NodeJS, ExpressJS and Express-Cassandra, which is a Cassandra ORM/ODM/OGM for NodeJS. This is the directory that includes all the frontend code, it also includes a dockerfile to build the image of the Backend and run as Docker container. There is also a Github action that automatically builds the updated image and pushes to Dockerhub when new code or PR is merged, but what's different is it only gets trigerred when a code is merged in that particular sub-directory i.e meetups-backend.
  
  3. **Database:** Database used here is Apache Cassandra which is an open source NoSQL distributed database mainly used for its scalability and high availability without compromising performance. I used this because its quiet challenging to use cassandra, then make queries, connect to backend, its a complicated database that has characterstics of both SQL and NoSQL. So, through this project I needed to demonstrate how express-cassandra can be integrated to perform all these tasks and identify the possible challenges that may come while building our actual community project rap-god-api.

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

1. To access the database/keyspace you can access the shell by using the following command

    ```sh
    docker exec -it <CASSANDRA_CONTAINER_NAME> /bin/bash
    cqlsh
    ```
    
2. To get list of all Keyspaces

   Command:
   ```sh
   DESCRIBE keyspaces;
   ```
   Output:
   ```sh
   system       system_distributed  system_traces  system_virtual_schema
   system_auth  system_schema       system_views   testks
   ```
   
   `testks` is the keyspace for our meetups application.
   
 3. We need to enter into this `testks` Keyspace to access all data/tables of our application

    Command:
    ```sh
    USE testks;
    ```
 
 4. To get list of all tables inside out keyspace

    Command:
    ```sh
    DESCRIBE tables;
    ```
    
    You will be able to see `meetups_by_city` table where all our meetup details are stored.
    
5. To see the table data 

    Command:
    ```sh
    SELECT * from meetups_by_city;
    ```
    
    Similarly, you can perform other CQL queries on the table. [Study more](https://www.tutorialspoint.com/cassandra/cassandra_cqlsh.htm).
    
 
 # Future plans with the project
 
   - [ ] Write kubernetes manifests files like statefulsets.yaml for database, deployments.yaml for frontend & backend, services.yaml for connecting the deployments. All this to deploy whole application on kubernetes cluster.
   - [ ] Make a Helm chart for the application so that it can deployed on kubernetes with on single command.
   - [ ] Integrate prometheus and grafana for monitoring.
   - [ ] Integrate more Github actions that run tests against the code before merging it to the main repo.
   - [ ] Write unit tests for API endpoints using Jenkins
   - [ ] Try to deploy kubernetes on cloud kubernetes cluster.
   - [ ] Try experimenting other cloud native tools as get to learn them.
   - [ ] much more to be added....
