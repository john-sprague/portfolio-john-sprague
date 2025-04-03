# Use the official Nginx image
FROM nginx:latest

# Copy our custom index.html to the Nginx default directory
COPY index.html /usr/share/nginx/html/index.html

# Expose port 80
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
