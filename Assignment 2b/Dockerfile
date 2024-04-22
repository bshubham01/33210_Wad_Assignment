# Use a base image with a web server
FROM nginx:latest

# Set the working directory in the container
WORKDIR /usr/share/nginx/html

# Copy all files from your local project directory to the container
COPY . .

# Expose the port the web server will run on
EXPOSE 80

# Command to run your web server
CMD ["nginx", "-g", "daemon off;"]
