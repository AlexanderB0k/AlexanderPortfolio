import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const port = process.env.PORT || process.env.NODE_PORT || 3000;

const distPath = path.join(__dirname, '..', 'dist');

const app = express();

// serve the built client (client/ -> vite build -> dist/)
app.use(express.static(distPath));

// SPA fallback so client-side routes still resolve on refresh/direct hit
app.use((request, response) => {
  response.sendFile(path.join(distPath, 'index.html'));
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
