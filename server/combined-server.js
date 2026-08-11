/**
 * Combined Static Server
 * ----------------------------------------
 * Serves TWO independently-built Angular applications from one Node
 * process, under one origin:
 *
 *   /            -> corporate-website-frontend  (public, no login required)
 *   /console/*   -> bag-platform-frontend        (the existing admin
 *                                                  console — its own
 *                                                  internal auth guard
 *                                                  is completely
 *                                                  untouched and still
 *                                                  enforces login)
 *
 * Neither Angular app's source was modified to make this work. Each
 * remains a fully independent, separately-buildable project — this
 * file is the only new "glue" piece, and it only does static file
 * routing, nothing else.
 *
 * Prerequisite: build both apps first (see package.json scripts
 * "build:corporate-site" and "build:console"), which produces:
 *   corporate-website-frontend/dist/corporate-website-frontend/browser
 *   dist/bag-platform-frontend/browser
 *
 * Run: node server/combined-server.js
 */

const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 8080;

const CONSOLE_DIST = path.join(__dirname, '..', 'dist', 'bag-platform-frontend', 'browser');
const CORPORATE_DIST = path.join(
  __dirname,
  '..',
  'corporate-website-frontend',
  'dist',
  'corporate-website-frontend',
  'browser'
);

// --- 1. Admin console, mounted at /console ---
// Registered FIRST so its catch-all doesn't get shadowed by the
// corporate site's root-level catch-all below. The console app was
// built with `--base-href=/console/` (see package.json), which is
// the only integration-specific setting involved — no source files
// in bag-platform-frontend were changed to achieve this.
app.use('/console', express.static(CONSOLE_DIST));
app.get('/console/*', (req, res) => {
  res.sendFile(path.join(CONSOLE_DIST, 'index.html'));
});

// --- 2. Corporate website, mounted at / (public, pre-login) ---
app.use('/', express.static(CORPORATE_DIST));
app.get('*', (req, res) => {
  res.sendFile(path.join(CORPORATE_DIST, 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Combined server running at http://localhost:${PORT}`);
  console.log(`  Corporate website (public):  http://localhost:${PORT}/`);
  console.log(`  Admin console (login req'd): http://localhost:${PORT}/console`);
});
