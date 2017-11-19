# slack-clone

A slack clone app demostrating rapid prototyping using [EmberJS](https://www.emberjs.com/) and [Google's Firebase](https://firebase.google.com/)

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](https://git-scm.com/)
* [Node.js](https://nodejs.org/)
* [Ember CLI](https://ember-cli.com/)
* [Yarn](https://yarnpkg.com/) (Optional, instead of NPM)
* [Google Chrome](https://google.com/chrome/)
* [Ember inspector for Chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi?hl=en)

## Installation


### Fetching the repo
* `git clone https://github.com/toumbask/slack-clone` this repository (or download a zip file and unzip it)
* `cd slack-clone`
* `yarn install` or `npm install`

  
### Alternatively - Manually setup of the project
* Install ember-cli globally:
  * `yarn global add ember-cli`
	* or `npm install -g ember-cli`
* Go to a folder to put the repo/project in
* `ember new slack-clone --yarn` (or `ember new slack-clone` to use npm instead)
* Install dependencies:
  * ember install ember-bootstrap
  * ember generate ember-bootstrap --bootstrap-version=4
  * ember generate ember-bootstrap --preprocessor=sass
  * ember install torii
  * If you get a 'color-convert' error, clear the node_modules folder and reinstall packages by running `yarn install` or `npm install` inside the project folder.
  * Install firebase-tools globally
    * `yarn global add firebase-tools`
    * or `npm install -g firebase-tools`
    
    
## Running / Development

* `ember serve`
* Visit your app at [http://localhost:4200](http://localhost:4200).
* Visit your tests at [http://localhost:4200/tests](http://localhost:4200/tests).

### Deploying

* ember build
* Create a Firebase account on [Firebase](https://firebase.google.com/)
* Install firebase-tools globally
	* `yarn global add firebase-tools`
  * or `npm install -g firebase-tools`
* Run `firebase init` inside project root.
  * On public folder question, provide `dist`
   
## Further Reading / Useful Links

* [ember.js](https://emberjs.com/)
* [ember-cli](https://ember-cli.com/)
* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)

