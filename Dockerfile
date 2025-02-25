FROM node:16
# Create app directory
WORKDIR /usr/src/app

COPY package*.json ./
# Copy all files in the current directory into the container
COPY . .

EXPOSE 3000
# Install 'serve', a static file serving package globally in the container
RUN npm install -g serve

# Install all the node modules required by the React app
RUN npm install
# Build the React app
RUN npm run build

# Serve the 'build' directory on port 3000 using 'serve'
CMD ["serve", "-s", "-l", "3000", "./build"]