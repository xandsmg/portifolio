{
  "version": 1,
  "routes": [
    { 
      "src": "/assets/(.*)", 
      "dest": "/html/digitalize/assets/$1",
      "headers": {
        "cache-control": "public, max-age=31536000, immutable"
      }
    },
    { 
      "src": "/(.*)", 
      "dest": "/html/digitalize/index.html" 
    }
  ],
  "cleanUrls": true,
  "trailingSlash": false
}