# Information Flow

(WIP)

1. User prompts to login via EVE Online ESI
2. ESI sending back access and refresh token via `GET` reuqest
3. Passing both tokens to backend for continuous data pulling and logging
   - Via `GET` request for accessing user data
   - Via `UNKNOWN` request to refresh access token
   - This will generate a unique user ID table
4. Server will make a `GET` request to each user in file (automatic)
   - If-statement to determine the call frequency
     - If return response is empty? or most recent result is more than 2hrs - call again in 24hrs/12hrs
     - If return timestamp < 2hrs, recall in 1hr
   - Wrap above functionality in a function to be resuable
   - This `GET` reuest will include knex that store the collected user data into database
5.
