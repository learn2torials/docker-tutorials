# How to build dockerized node app
```bash
# build the image
docker build .

# create and run a container on port 8080
# map container port 8080 to host port 9000
docker run -p 9000:8080 -d <container-id>
```

# Checkout the app on browser
Go to your http://localhost:9000
