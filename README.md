# nice-bytes
A clone of the popular website GoodReads where users can rate and share restaurants.

## Local Environment Setup

The following are instructions for setting the project up to run locally on Windows WSL2.

### Installing Dependencies

1. Install Windows WSL2
1. Install Postgres for Windows and confirm access to Postgres in WSL2 Ubunutu using `psql -h localhost -U postgres postgres` in bash
1. Install Node and npm for WSL2 Ubuntu
1. `npm i -g sequelize-cli dotenv-cli` on Ubuntu to globally install environment and migration toolsets

### Clone Codebase

1. `git clone https://github.com/BenBolthouse/nice-bytes.git` to clone this repo to a new directory "nice-bytes"
1. `cd nice-bytes` to navigate to the project root
1. `git checkout development` to setup a tracking branch for remote "origin/development"
1. `git checkout development-mvp-0` to setup a tracking branch for the first MVP feature branch

**IMPORTANT**: Do **NOT** do any development work in `main` branch!! Do **NOT** push changes to `main`! Always do your work in a branch off of `development`, such as `development-mvp-###`.

**NOTE**: If you would like to do experimental work on a branch off of a development branch, do `git checkout -b local-[branch_name]`. You can merge your changes into an MVP from a local, but be careful not to push a local branch up to origin. Locals will be discarded in the remote repository.

### NPM and Database Setup

1. `npm i` in project root to install node_modules
1. Create a new database user "nicebytes_app" with a password of your choosing; grant CREATEDB to "nicebytes_app"
1. Copy `./.env.example` to `./.env` and update with your Postgres user information
1. `npx dotenv sequelize db:create` in project root to create the database with the Postgres user
1. `npm run dev` to check to see if the Postgres connection is successful; should show "running on port... [port]" in your Ubuntu bash

At this point you should be able to use `code .` in bash in the project root to open VS Code.

### VS Code Debugger for Nodemon

Our skeleton project has an NPM script `npm start:development` for the development server. However, if you'd like a breakpoint debugger for the project (highly recommend!!) then follow these steps:

1. In the project root create a file `./.vscode/launch.json`; you may need to create the directory
1. In `launch.json` copy and paste the following launch configuration;
```
{
  "version": "0.2.0",
  "configurations": [
    {
      "console": "integratedTerminal",
      "internalConsoleOptions": "neverOpen",
      "name": "Nodemon",
      "program": "${workspaceFolder}/bin/www",
      "request": "launch",
      "restart": true,
      "runtimeExecutable": "nodemon",
      "runtimeArgs": ["-r", "dotenv/config"],
      "skipFiles": ["<node_internals>/**"],
      "type": "pwa-node"
    }
  ]
}
```
3. Confirm that the debugger works by selecting a breakpoint in the application and then run the debugger "Nodemon"; the application should pause at the breakpoint

## MVP Branching Strategy

All work will be done in the current MVP development branch. Current MVP at the time of writing this is MVP-0, so the branch we'll be pushing to is `development-mvp-0`. We'll do pull requests into main when we move on to new MVP versions.
