# Top Anime API

The Top Anime API is a RESTful API designed to provide information about anime. It offers various features such as retrieving all available anime, fetching a random anime from the database, and searching for anime by title.

## Features

- **Get All Anime**: Retrieve a list of all available anime.
- **Get Random Anime**: Retrieve a random anime from the database.
- **Search Anime**: Search for specific anime by title.

## Technologies Used

- **Node.js**: Runtime environment for the API.
- **npm**: Package manager for Node.js, used for managing dependencies.
- **PostgreSQL**: Relational database used for storing anime data.
- **Render**: Cloud platform used to host the PostgreSQL database.
- **Heroku**: Cloud platform used to host the API application.

## API Endpoints

- **Get All Anime**
  - Endpoint: `GET /anime`
  - Description: Retrieves a list of all available anime.

- **Get Random Anime**
  - Endpoint: `GET /random`
  - Description: Retrieves a random anime from the database.

- **Search Anime**
  - Endpoint: `GET /search?q=<anime_title>`
  - Description: Searches for anime by title.

## Getting Started

To use the Top Anime API, you can make HTTP GET requests to the appropriate endpoints. The base URL for the API is `https://topanime-api-050cfa577b7c.herokuapp.com/`.

Here are some examples of how to use the API:

- **Get All Anime**: `https://topanime-api-050cfa577b7c.herokuapp.com/anime`
- **Get Random Anime**: `https://topanime-api-050cfa577b7c.herokuapp.com/anime/random`
- **Search Anime**: `https://top-anime-api.herokuapp.com/search?q=gintama`

## Documentation

For more detailed information about the API, including response formats and error handling, please refer to the [API Documentation](https://topanime-api-050cfa577b7c.herokuapp.com/).

## Contributing

This project is a personal endeavor, but contributions are welcome. If you'd like to contribute, feel free to fork the repository and submit a pull request.

## License

This project is licensed under the MIT License.
