// Importing necessary modules
const http = require('http');
const url = require('url');
const fs = require('fs');
const path = require('path');

// Define the port on which the server will listen
const PORT = 1800;

// Define MIME type mapping for file extensions
const mimeType = {
    '.ico': 'image/x-icon',
    '.html': 'text/html',
    '.js': 'text/javascript',
    '.json': 'application/json',
    '.css': 'text/css',
    '.png': 'image/png',
    '.jpg': 'image/jpeg',
    '.wav': 'audio/wav',
    '.mp3': 'audio/mpeg',
    '.svg': 'image/svg+xml',
    '.pdf': 'application/pdf',
    '.doc': 'application/msword',
    '.eot': 'application/vnd.ms-fontobject',
    '.ttf': 'application/font-sfnt',
};

// Create the server
http.createServer((req, res) => {
    // Parse the requested URL
    const parsedUrl = url.parse(req.url);
    
    // Sanitize the path and create the full path
    const sanitizePath = path.normalize(parsedUrl.pathname).replace(/^(\.\.[\/\\])+/, '');
    const pathname = path.join(__dirname, 'public', sanitizePath);
    
    // Check if the path exists
    fs.stat(pathname, (err, stats) => {
        if (err) {
            // File or directory does not exist
            res.statusCode = 404;
            res.end(`File ${pathname} not found!`);
        } else {
            if (stats.isDirectory()) {
                // If the path is a directory, try to serve index.html
                const indexPath = path.join(pathname, 'index.html');
                fs.readFile(indexPath, (err, data) => {
                    if (err) {
                        res.statusCode = 404;
                        res.end(`File ${indexPath} not found!`);
                    } else {
                        res.setHeader('Content-Type', mimeType['.html']);
                        res.end(data);
                    }
                });
            } else {
                // If the path is a file, read and serve it
                fs.readFile(pathname, (err, data) => {
                    if (err) {
                        console.log(`Error reading file ${pathname}:`, err);
                        res.statusCode = 500;
                        res.end('Error in getting the file.');
                    } else {
                        const ext = path.parse(pathname).ext;
                        res.setHeader('Content-Type', mimeType[ext] || 'text/plain');
                        res.end(data);
                    }
                });
            }
        }
    });
}).listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});
