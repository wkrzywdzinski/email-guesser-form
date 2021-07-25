# email-guesser-form

Front-end for email-guesser-service built with [React](https://reactjs.org/).

Basic UI consists two input fields for user's full name and email.
Application does entry level input verification and when input is valid is activates submit button.
Submit calls email-guesser-service via Axios using POST method.
While waiting for results UI is disabled and covered with backdrop.
When response comes application shows message modal with corresponding information.
Reponse message modal is closed on click.
After call was made and response came UI is cleared and ready for the next submit.

## Running Locally

Install[Yarn](https://yarnpkg.com/)
Run "yarn install"
Run "yarn start"

Service should run on [localhost:3000](http://localhost:3000/).
