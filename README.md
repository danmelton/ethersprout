## Local Chain

This project bootstraps a local ethereum chain with common contracts for testing purposes.

### Goals:

* Launch a local node on a commonly known port, with set Mnemonic
* Bootstrap node with contracts, and write out contract addresses to a file
* Save/Download the chain and address files to an AWS bucket (or other place) to share with other devs
* Simple to use npm script commands to launch/use named chains

### Installation:

    pip install aws-cli #if you want to sync with remote remote
    git clone git@github.com:danmelton/local-chain.git
    cp .env-example .env #update .env with your AWS creds if you want to upload/download snapshots 
    npm install
    npm bootstrap #runs the local node, migrates contracts, and seeds with initial data

### Docker Installation

    docker-compose build chain
    docker-compose run --rm npm bootstrap
    docker-compose up chain 
    
### Commands:

Start the testrpc server

    npm start
    
Run seeds or just one seed file

    npm run seed filename
    npm run seed filename
    
Download a snapshot to bootstrap your local node

    npm run download

Save a snapshot of your local node, and upload it to AWS bucket

    npm run upload
    
###Scenarios:

##### Setting up for the first time

    npm bootstrap 

This will start the server, deploy the contracts in src/contracts, and then run any seeds located in src/seeds.

##### Adding a new contract

Add the contract to src/contracts and then add a migration to src/migrations for the new contract.
 
### Credit
Initial credit to 0x Protocol team for the inspiration. I borrowed quite a bit of code from their start project. 