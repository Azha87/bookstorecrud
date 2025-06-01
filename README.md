## Explaination

This Project uses Nestjs to create a simple crud application.
The architecture is not perfect for this project I have adjusted it to suit the requirements.
Tests are integrated but didnt have the time to implement them.
Status Code interceptor has not been implemented all status codes will be 200 at the moment.


## To Run the Project

```bash
$ yarn install
$ yarn start
```

The Port that the application will be run would be 3005 unless specified by the env variable.
The application has 5 endpoints:
  GET: /books (Returns the list of books)
  GET: /books/search (Returns the list of books by name)
  PUT: /books (Adds a book to the array)
  PATCH: /books/:id (Updated the book by the id)
  DELETE: /books/:id (Deleted the book by the id)
