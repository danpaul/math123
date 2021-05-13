# Book Base

## About

Book base provides a client and server for storing basic book information.

The client code is in `./public/index.html` and uses [Vue.js](https://vuejs.org/v2/guide/).

The server code is in `./index.js` and uses Node and [Express](https://expressjs.com/en/guide/routing.html).

## Setup

- Node 14.16.0 or above and NPM is required
- On the command line in the root of the project:
  - Install dependencies `npm install`
  - Start server `nodex index.js`
- The app should now be viewable locally at `http://localhost:3000/`

## Assignment 1

The goal of this assignment will be to expand the functionality of the Book Base API and user facing web app to support users who want to write about the books they are reading. We will add CRUD endpoints to support these features. Use the application shell in `./public/journal.html` which gets served at http://localhost:3000/journal.html for this assignment.

As a prerequisite, please:

- Download and install [Postman](https://www.postman.com/downloads/) familiarize yourself with it as you develop your api.
- The collection shown today can be used as a reference. It is saved `./Bookbase.postman_collection.json`.

We will be supporting the following four user stories:

- As a user, I can create a new journal entry
  - Acceptance criteria:
    - The user interface (UI) exposes a form with a title and content field the user can use to create a new post.
    - The API exposes a `POST` endpoint which accepts `JSON` request body with the journal entry.
    - After submitting, the user interface should update to show the new post and clear the the inputs from the form so the user can add another entry.
- As a user, I can read my journal entries.
  - Acceptance criteria:
    - The UI displays a list of all posts.
    - The API exposes a `GET` endpoint which returns all existing posts.
- As a user, I can update a journal entry.
  - The UI allows the editing of existing posts.
  - The API exposes a `PUT` method for updating existing posts which accepts `JSON`.
  - The api should handle accepting a single title, body or both fields.
- As a user, I can delete a journal entry.
  - The UI allows posts to be deleted.
  - The API exposes a `DELETE` method for deleting existing posts.

## Gitflow for assignment

- Create a [branch](https://git-scm.com/docs/git-branch) off of `master` and create your own branch with the following structure `assignment-1-lastname-firstname`.
- After completing the assignment, submit a [pull request](https://docs.github.com/en/github/collaborating-with-issues-and-pull-requests/about-pull-requests) with me (user `danpaul`) as a reviewer.
- I will give you some feedback. Please address any feedback in the pull request and respond to all comments in the pull request within a week.
