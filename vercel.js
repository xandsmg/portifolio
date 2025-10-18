{
  "version": 2,
  "builds": [
    {
      "src": "**",
      "use": "@vercel/static"
    }
  ],
  "routes": [
    {
      "src": "/assets/(.*)",
      "dest": "/public/assets/$1"
    },
    {
      "src": "/css/(.*)",
      "dest": "/public/css/$1"
    },
    {
      "src": "/js/(.*)", 
      "dest": "/public/js/$1"
    },
    {
      "src": "/(.*)",
      "dest": "/index.html"
    }
  ]
}