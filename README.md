## Rock Band PWA

## Getting started
git clone https://github.com/embriand/rockband.git

## Technologies used
Javascript  
Angular: 13.3  
Node: v17.9.0  
Ionic: 6.19.0  
TypeScript: 4.4
Capacitor 3.5  

HTTP Server

## Description
This project allow the management of Rock Bands data as a PWA application.  

Refer to following repository process for database installation, API access and documentation information:

https://gitlab.com/mozzy/rock-band

## Installation
After cloning the rockband repository, from the rockband folder, process following commands

Install all dependencies
> npm install

Load the Ionic Angular project
> ionic serve

For production deployment

> ionic build --prod
> http-server www

Install previously https://github.com/http-party/http-server



## Usage
When all above processes are finished and Docker running (check status)

Go to http://localhost:8100/ to see the project rockband running.

Go to http://localhost:8080/ to manage the database, see https://gitlab.com/mozzy/rock-band for more information.

Go to http://localhost:9000/documentation to access the API route documentation, see https://gitlab.com/mozzy/rock-band for more information.