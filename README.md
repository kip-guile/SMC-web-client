# The Shoppies

A full stack application managing movie nominations from the OMDB API. This repository contains code for the client side. The server side is available [here](https://github.com/kip-guile/SMC-backup-server)

- The client side is built using React.Js/TypeScript and Redux toolkit for state management, while the server side is a REST API built with Node.Js/Express, powered by a MongoDB database. It saves the users nominations.

* The app was deployed with Vercel [here](https://smc-web-client.vercel.app/)

## Features

- Users can search for movies and add/remove to/from the nomination list
- Nomination list is saved to a database and persists across browser sessions.
- Results list is saved to localstorage and also persists across browser sessions.
- User can view more information about a movie by going to a single page view.
- Once a user has 5 nominations, the nomination feature is disabled and a banner is displayed to the user
- Displays error messages when the no movie is found or there are too many results.
  \_ Displays loading modal when a network request is being made.
- Unit tests

![image](https://user-images.githubusercontent.com/38817414/102961148-e4186100-44e3-11eb-95fb-defa0e1ee25d.png)
![image](https://user-images.githubusercontent.com/38817414/103161509-34910680-47e3-11eb-8127-a0cfdebdfcfd.png)
![image](https://user-images.githubusercontent.com/38817414/104074316-1201e300-5210-11eb-81d1-2476c612da19.png)
