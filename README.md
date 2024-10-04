# URL Shortener Service

This is a simple URL shortening service built with Node.js, Express, and EJS templating. The application allows users to submit long URLs and returns a shortened version, which can then be used to redirect to the original URL.

## Features

- Shorten long URLs into a more manageable format.
- Store shortened URLs in a local JSON file (`URL.json`).
- Redirect shortened URLs to their original long URLs.
- Displays the generated shortened URL on the web interface.

## Technologies Used

- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [EJS](https://ejs.co/) for templating
- [File System (fs)](https://nodejs.org/api/fs.html) for reading and writing to `URL.json`

## Installation

To run this project locally, follow these steps:

1. **Clone the repository:**
    ```bash
    git clone https://github.com/yourusername/url-shortener.git
    cd url-shortener
    ```

2. **Install the dependencies:**
    ```bash
    npm install
    ```

3. **Start the server:**
    ```bash
    node server.js
    ```

4. **Open your browser** and go to `http://localhost:3000/`.

## Usage

1. Enter a long URL on the home page and click "Submit".
2. The shortened URL will be displayed.
3. You can use the shortened URL to access the original website.

### Example

- Input: `https://www.example.com/some-long-url`
- Output: `localhost:3000/12345`
  
When you visit `localhost:3000/12345`, you will be redirected to the original URL (`https://www.example.com/some-long-url`).

## Project Structure

```plaintext
.
├── server.js        # Main server logic for URL shortening and redirection
├── views
│   └── short.ejs    # EJS template for displaying the shortened URL
├── URL.json         # Stores the original and shortened URLs
└── package.json     # Node.js dependencies
