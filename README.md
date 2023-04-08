# NITJ Website

> :loudspeaker: **Important Update:**  
> Starting from now, the `style.css` file is ignored by default when pushing code to GitHub. To build the `style.css` file, please run the following command locally:
> 
> - Using Yarn: `yarn build:css` :hammer:
> - Using npm: `npm run build:css` :wrench:


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

  Alternatively, you can use any live server VS Code plugin to view the project in the browser. Simply open the `index.html` file and start the live server.


---

## Contributing in the repo

- Clone this repo to your local machine by performing the above mentioned steps
- Create a separate branch, steps are mentioned below:
  1. `git checkout -b {{branch-name}}`
  2. Now the head of your local clone will be pointing to this branch

- Make your changes
  > Details about this part are given below
- Publish your branch to GitHub, by using the following commands:
  1. `git add .`
  2. `git commit -m "{{message about the commit}}"`
  3. `git push --set-upstream origin {{branch-name}}`

- Open this repo on GitHub and click on the "Create a pull request" button at the top.
- Select the appropriate options and create a PR with a descriptive message.

> Note: It's important to use good branch names, descriptive commit messages, and PR messages. This helps reviewers and collaborators understand the changes you've made and makes it easier to maintain and improve the project over time.

## Adding your code

- If you have not added your code even once till now:
	- Make a new folder in the `/root` directory
	- Put your files in that folder
- Link the main `CSS` file in each of your `HTML` files, add the following code in the `<head>` of the file : 
	- ```<link rel="stylesheet"  href="/style.css"  />```
- Use the navbar and footer files present in the `/common-template` folder
- Include the `header.js` file for navbar as follows:
	- ```html
		<script src="/template/header.js"  type="module"></script> 
		<script src="/template/helper.js"></script>
		```
 - Include the file for footer in the same way as:
	- ```<script src="/template/footer.js"></script>```
- Test your changes on localhost
- Complete the contributing process
