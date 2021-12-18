<div id="top"></div>

[![LinkedIn][linkedin-shield]][linkedin-url]

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/lucykendall/Echo">
    <img src="/client/src/images/echo_logo.png" alt="Logo" width="150" height="150">
  </a>

<h3 align="center">Echo Memory Game</h3>

  <p align="center">
    Need to test your memory! Check out what is behind the seaweed to find your exotic fish friend!
    <br />
    <a href="https://github.com/lucykendall/Echo"><strong>Explore the docs »</strong></a>
    <br />
  </p>
</div>


<!-- TABLE OF CONTENTS -->
<details>
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
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#futureimprovements">Future Improvements</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

This app is an Under the Sea themed memory game that allows users to login, signup, update their account, and play a memory game.

<p align="right">(<a href="#top">back to top</a>)</p>
### Built With

* [React-Bootstrap](https://react-bootstrap.github.io/)
* [Firebase](https://firebase.google.com/docs)
* [Flippy](https://www.npmjs.com/package/react-flippy)

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Getting Started

To get started with this app on your own machine, ensure you follow these steps.
### Installation

1. Get a free API Key at [firebase](https://firebase.google.com/)
2. Clone the repo
   ```sh
   git clone https://github.com/lucykendall/Echo
   ```
3. Install dependencies

   ```sh
   npm install firebase
   ```

   ```sh
   npm install react-router-dom
   ```

   ```sh
   npm install react-bootstrap
   ```
   
   ```sh
   npm i react-flippy
   ```
4. Create a .env file and make sure that your keys match the exact details in your `firebase.js`, i.e.
   ```js
   apiKey: process.env.REACT_APP_API_KEY,
   ```
5. .env file
   ```js
   REACT_APP_API_KEY=[insert api key here]
   ```

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- ROADMAP -->
## Future Improvements

- [Leaderboard] Leaderboard
- [Firebase] Database with users game history and scores
- [Auth] Two factor auth
- [Gameplay] More memory games
    - [] Multiplayer gameplay
    - [] Messaging between users

<p align="right">(<a href="#top">back to top</a>)</p>


<!-- CONTRIBUTING -->
## Contributing

Contributions are **greatly appreciated**.

Follow these steps to clone and make amendments to the project:

1. Fork the Project
2. Create your Feature Branch (`git checkout -b [branchname]`)
3. Commit your Changes (`git commit -m 'Add new feature'`)
4. Push to the Branch (`git push origin [branchname]`)
5. Open a Pull Request

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- CONTACT -->
## Contact

Project Link: [https://github.com/lucykendall/Echo](https://github.com/lucykendall/Echo)
Live Site: [https://echo-9493d.web.app/](https://echo-9493d.web.app/)

<p align="right">(<a href="#top">back to top</a>)</p>


<!-- ACKNOWLEDGMENTS -->
## Acknowledgments

* [Web Dev Simplified](https://github.com/WebDevSimplified/React-Firebase-Auth)
* [General Asssembly Team](https://generalassemb.ly/)

<p align="right">(<a href="#top">back to top</a>)</p>

[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://www.linkedin.com/in/lucy-kendall-91a039149/
[product-screenshot]: images/echo_logo.png
