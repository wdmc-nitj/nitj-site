# NITJ Website

This is a guide to explain the working of this code and how you can contribute to this repository without causing any unexpected errors.

There are some steps that you need to follow to setup this project in your own local machine.

## Setup on Local Machine

- Clone this repository

```bash
git clone {{Link of this repo}}
```

- Install the dependencies

```bash
yarn
```

> If you do not have yarn on your machine, please use :

```bash
npm install yarn --global
```

> If you do not have npm on your machine, please go [Here](http://nodejs.org/en/ 'Here') and Install the LTS version, it comes bundeled with npm by default

- Opening the project in the browser

  - Dev Mode (With Tailwind Watch)

  ```bash
  yarn start
  ```

  - Server (Without Tailwind Watch)

  ```bash
  yarn serve
  ```

---

## Contributing in the repo

- Clone this repo to your local machine by performing the above mentioned steps
- Create a separate branch, steps are mentioned below:
  1. `git branch {{branch-name}}`
  2. `git checkout {{branch-name}}`
  3. Now the head of your local clone will be pointing to this branch

- Make your changes
  > Details about this part are given below
- Publish your branch to github, by using the below commands: 
  1. `git add .`
  2. `git commit -m "{{message about the commit}}"`
  3. `git push --set-upstream origin {{branch-name}}`
- Open this repo on github you will send an option on the top to create a pull request
- Select the options and create a PR with appropirate message

## Adding your code

- Make a new folder in the `/root` directory
- Put your files in that folder
- Use the navbar and footer files present in the `/common-template` folder
- Just include the files as a script tag 
- Get your links added in the database:
  > Contact the backend guys of TEAM A 
- Test your changes on localhost
- Complete the contributing process
