# Look-Up Tool

A Google Apps Script WebApp that searches entries across a JSON file database based on multiple user-defined parameters. Returns results in a dynamic table with columns that appear conditionally depending on the matched data.

![Google Apps Script](https://img.shields.io/badge/Google%20Apps%20Script-4285F4?style=flat&logo=google&logoColor=white)
![Platform](https://img.shields.io/badge/Platform-WebApp-blue)

---

## Features

- Multi-parameter lookup across a Drive-hosted JSON database
- Dynamic results table — columns shown conditionally based on data
- Supports switching between two databases at runtime
- Indexed JSON file storage for fast lookups
- Client/server split architecture

---

## Tech Stack

| Layer    | Technology                      |
|----------|---------------------------------|
| Platform | Google Apps Script              |
| UI       | HTML5, CSS3, Vanilla JavaScript |
| Database | JSON files in Google Drive      |
| Deploy   | clasp CLI                       |

---

## Project Structure

```
look-up-tool/
├── README.md
├── AGENT.md
└── src/
    ├── appsscript.json  # GAS manifest
    ├── client/          # Search/filter controls and results table
    └── server/          # doGet(), JSON file reads, parameter matching
```

---

## Getting Started

### Prerequisites

- A Google account with Google Apps Script access
- [clasp](https://github.com/google/clasp) installed globally

```bash
npm install -g @google/clasp
clasp login
```

### Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/mohamedallam13/look-up-tool.git
   cd look-up-tool
   ```

2. Link to your Apps Script project:
   ```bash
   clasp create --type webapp --title "Look-Up Tool" --rootDir src
   ```

3. Push source files:
   ```bash
   clasp push
   ```

---

## Deployment

1. In the Apps Script editor, go to **Deploy > New deployment**
2. Select type: **Web app**
3. Set **Execute as**: Me · **Who has access**: Anyone
4. Click **Deploy** and share the Web App URL

---

## Author

**Mohamed Allam** — [GitHub](https://github.com/mohamedallam13) · [Email](mailto:mohamedallam.tu@gmail.com)
