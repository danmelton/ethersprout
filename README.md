## Ether Sprout

This project bootstraps a local ethereum chain with common contracts for testing purposes and local development.

### Goals:

* Launch a local node on a commonly known port, with set Mnemonic
* Bootstrap node with contracts and seed sample data
* Save/Download the chain and address files to an AWS bucket (or other place) to share with other devs
* Simple to use npm script commands to interact with the local chain

### Docker Installation

    cp .env-example to .env
    #update env with AWS vars

    docker-compose build chain
    docker-compose up chain 
    
Download a snapshot to bootstrap your local node

    npm run download

Save a snapshot of your local node, and upload it to AWS bucket

    npm run upload
    
 
### Credit
Initial credit to 0x Protocol team for the inspiration. I borrowed quite a bit of code from their start project. 