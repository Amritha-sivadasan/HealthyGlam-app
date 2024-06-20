FROM node:alpine
WORKDIR /app
COPY package.json .
RUN npm install
ENV MONGO_URL="mongodb+srv://amrithas172:jRc3s5RJmvjqXEmC@user.mnmdarm.mongodb.net/User?retryWrites=true&w=majority&appName=User"
ENV JWT_SECRET='amrithas'
COPY . .
EXPOSE 3001
CMD ["npm", "run","dev"]