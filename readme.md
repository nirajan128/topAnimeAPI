# Top Anime API

The Top Anime API is a RESTful API built using Node.js, popular npm packages, and PostgreSQL as the database. The API is hosted on Render, while the database is also hosted on Render.

## Features

- **Get All Anime**: Retrieve a list of all available anime.
- **Get Random Anime**: Retrieve a random anime from the database.
- **Search Anime**: Search for specific anime by title.

## Technologies Used

- **Node.js**: The runtime environment for the API.
- **npm**: The package manager for Node.js, used to install and manage dependencies.
- **PostgreSQL**: The relational database used to store the anime data.
- **Render**: The cloud platform used to host the PostgreSQL database.
- **Heroku**: The cloud platform used to host the API application.

## API Endpoints

1. **Get All Anime**
   - **Endpoint**: `GET /anime`
   - **Description**: Retrieves a list of all available anime.

2. **Get Random Anime**
   - **Endpoint**: `GET /random`
   - **Description**: Retrieves a random anime from the database.

3. **Search Anime**
   - **Endpoint**: `GET /search?q=<anime_title>`
   - **Description**: Searches for anime by title.

## Getting Started

To use the Top Anime API, you can make HTTP GET requests to the appropriate endpoints. The base URL for the API is `https://topanimeapi.onrender.com/`.

Here are some examples of how to use the API:

- **Get All Anime**:
 `https://topanimeapi.onrender.com/anime`

 - **Get Random Anime**:
 `https://topanimeapi.onrender.com/anime/random`

 - **Search Anime**:
 `https://topanimeapi.onrender.com/search?q=gintama`

 
## Documentation

For more detailed information about the API, including response formats and error handling, please refer to the [API Documentation] `https://topanimeapi.onrender.com/`.

## Contributing

This is a personal project, but if you'd like to contribute, feel free to fork the repository and submit a pull request.

## License

This project is licensed under the MIT License.
