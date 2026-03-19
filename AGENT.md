# AGENT.md — look-up-tool

## Purpose
A Google Apps Script WebApp that looks up entries based on different parameters, reading from a preloaded JSON file. Client/server split architecture.

## Structure
```
look-up-tool/
├── README.md
├── AGENT.md
└── src/
    ├── appsscript.json  ← GAS manifest
    ├── client/          ← HTML/CSS/JS frontend (search/lookup UI)
    ├── server/          ← GAS server-side scripts (JSON file read, matching logic)
    └── screenshots/     ← UI screenshots (referenced in README)
```

## Key Facts
- **Platform:** Google Apps Script WebApp
- **Data store:** JSON file preloaded in Drive or as a GAS property
- **Pattern:** Parameter-based lookup against JSON data
- **Entry point:** `server/` contains the `doGet()` / `doPost()` functions

## Development Notes
- All source files live under `src/` — push with clasp from that directory
- No Node/npm at runtime; ES5-compatible GAS code only
