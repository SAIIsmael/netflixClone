<!-- PROJECT LOGO -->
<br />
<p align="center">
  <a href="https://github.com/SAIIsmael/netflixClone">
    <img src="./ressources/img/netflix.png" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">Netflix clone</h3>

  <p align="center">
    A simple netflix clone using MERN stack.
    <br />
    <a href="https://github.com/SAIIsmael/netflixClone/readme.md"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a>View Demo</a>
    ·
    <a href="https://github.com/SAIIsmael/netflixClone/issues">Report Bug</a>
    ·
    <a href="https://github.com/SAIIsmael/netflixClone/issues">Request Feature</a>
  </p>
</p>

<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgements">Acknowledgements</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

[![Preview][preview-screenshot]](https://github.com/SAIIsmael/netflixClone)

This application is a clone of netflix. It emulates the basic features of the famous video on demand website: Netflix.

Indeed, this web application is equipped with :

- a registration system
- an authentication system via Json web token
- the possibility to create, modify, delete or consult a movie or a series
- the possibility to create, modify, delete or consult a list of movies/series.

### Built With

Netflix clone has been developed with the MERN stack. The application can be divided into three big blocks: the data storage managed by the noSQL DBMS mongodb, the backend managed by the javascript framework node.js and the express framework, and, the frontend which is developed via the javascript framework React.

<p align="center">
<img align="left" alt="Mongodb" width="26px" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/mongodb/mongodb.png" />

<img align="left" alt="express" width="26px" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/express/express.png" />

<img align="left" alt="react" width="26px" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/react/react.png" />

<img align="left" alt="node" width="26px" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/nodejs/nodejs.png" />
</p>
<br/>
<!-- GETTING STARTED -->

## Getting Started

This section will describe the installation procedure of the application. It is intended to be installed locally for educational purposes.

### Prerequisites

In order to install netflix clone you need:

- npm
- node
- react
- mongodb

### Installation

1. Clone the repo

```sh
 git clone https://github.com/SAIIsmael/netflixClone.git
```

2. Load the datas
   ```sh
   cd backend/loaders
   ./populate-db.sh
   ```
3. Install packages
   ```sh
   cd ..
   npm install
   cd ../frontend
   yarn
   ```
4. Run the backend
   ```sh
   cd ../backend
   npm start
   ```
5. Run the frontend
   ```sh
   cd ../frontend
   yarn start
   ```
   <!-- LICENSE -->

## License

Distributed under the MIT License. See `LICENSE` for more information.

<!-- CONTACT -->

## Contact

Ismaël SAÏ - [discord](https://discord.com/users/535053895236452353) - [email](ismaelsai@yahoo.com)

Project Link: [https://github.com/SAIIsmael/netflixClone](https://github.com/SAIIsmael/netflixClone)

<!-- ACKNOWLEDGEMENTS -->

## Acknowledgements

- <div>N icon designed by <a href="https://www.flaticon.com/fr/auteurs/bqlqn" title="bqlqn">bqlqn</a> from <a href="https://www.flaticon.com/fr/" title="Flaticon">www.flaticon.com</a></div>
- <div>Markdown template designed by <a href="https://github.com/othneildrew" title="othneildrew">othneildrew</a></div>
- <div> <a href="https://www.youtube.com/c/LamaDev">Lamadev</a>'s tutorial</div>

[preview-screenshot]: ./ressources/img/preview.png
