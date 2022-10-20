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

- Make a fork of this repo by clicking on the fork button in the top right corner on github
- Clone the forked repo to your local machine by performing the above mentioned steps
- Make your changes
  > Details about this part are given below
- Push your code to github
- Create a pull request with the updated code

## Adding your code

- Make a new folder in the `/root` directory
- Put your files in that folder
- Open `./index.html` present in the root directory
- Press `CTRL + F` and search the name of the section that were assigned to work on
- Add links in the required pages from the navbar itself
  > This component is spaning upto 1340 lines
- Test your changes on localhost
- Complete the contributing process
