# Use an offical Node.js runtime as a parent image
FROM node:8.11.3

# Set the working directory to /app
WORKDIR /app

# Copy the current directory contents into the container at /app
ADD . /app

# Install any needed packages specified in package.json
RUN npm install

# Make port 80 available to world outside the container
EXPOSE 80

# Define environment variable
ENV NAME World

# Run app.js when the container launches
CMD ["npm", "start"]
