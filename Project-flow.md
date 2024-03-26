# Information Flow

(WIP)

This post servers as a personal step checks in the process of completing this potentially challenge project. To keep certain details in check.

## Client Side

### Step 1: Pre-Authorized Landing Page

<p align="center">
  <img src="./assets/mockup/landing-page-default.png" alt="Landing Page - Default">
</p>

- The page will appear to be empty without user logging in
  - a text message will prompt user to login by clicking the eve-specific icon and redirected
- Once loged in, gain access token and refresh token, and more? (this need to be tested)
- The received tokens, and any additional user information are send to backend database. Refer to [here](#server-side)
- The user will be redirect to logged in page, as shown [below](#step-2-post-authorized-landing-page)

### Step 2: Post-Authorized Landing Page

<p align="center">
  <img src="./assets/mockup/landing-page-log-in.png" alt="Landing Page - Logged In">
</p>

- The top right corner is now showing character avatar and name, ideally obtained from ESI (need deeper investigation on how)
- Click on either name or avatar will redirect user to alt management page. Refer to [here](#step-3-user-management-page).
- This page will **ideally** be using cache to store user data, update every 1-2hrs?
  - This means I will need to create utlity functions, e.g. Get
  - **Question:** how to store cache using axios, or should I go with fetch?
- The graphes/tables will generated using chart.js with the data returned from server
  - Future: consider to incorporate more graphs (nice-to-have)

### Step 3: User Management Page

<p align="center">
  <img src="./assets/mockup/alt-management-page.png" alt="Landing Page - Alt Management">
</p>

- This page contains card about generalized individual character information
  - avatar, name, corp logo, alliance logo
  - total ore mined (30days)
  - detail trigger button, can only be toggled "on" for one character in a single instance
    - will display similar information as in landing page, but only for a specific character (#nice-to-have)
- Each card will allows for drag and drop
- Primary character, which is labelled from database with role attribute of "primary" will be placed at the front by default
- a button "make primary" on each alt character. Onclick will promote the character to be primary and list resorted (ideally)
- Clicking the plus sign will prompt user to add additional characters
  - This will trigger a `POST` request followed immediate by a `GET` request
- **Question:** Should I include remove alt from character list? If so, how about back-end and all the saved historical data? maybe prompt use to let them know that all stored data will be deleted?

## Server Side
