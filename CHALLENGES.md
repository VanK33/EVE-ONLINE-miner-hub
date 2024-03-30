# List of Challenges

- [x] Since ESI token will expire after cetain period. How to reliably save, consistently, all historical data without asking user to regularly re-authorize to the site.

  - This question is resolved by sending code/state to server side and the server side will handle 1) granting access and refresh code 2) using refresh code for refreshing access code, 3) periodically pulling updated user details from ESI based on the returning data, and 4) allow client-side user to force pulling data(? optional, debating)

- [ ] How to deal with State generation and storage within a single user session? Should I use auth-next.js to handle both client and server end?

  - The state is generated on server, sent to client side for ESI Authorization, and the returned code and state are sent back to server for validation and authorization.

- [ ] How can I make sure the user always redirect back to the same stored information (aka, showing all their logged-in ) ?

- [ ] Question: What will authorization return? Will it include character id? This will potentially impact how the backend is constructed.

- [ ] Database structure may need to refactor, user-characters link, depending on the answer from previous question.
