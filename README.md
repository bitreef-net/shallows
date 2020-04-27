# shallows
A repo for me to practice Javascript, NodeJS and maybe more



# Build Process
The container can be built locally by running the following
```sudo docker build . --tag shallows:latest```

# Run Process
The container can be run using ```docker run```. Once the container you can 
run node to start the app and server web requests.

To run the continer you can use a command such as:
1.  ```sudo docker run -it --rm -p 127.0.0.1:80:8080 shallows:latest sh```  

To run the app you can run the following from the container shell:
2. ```nodejs app```


