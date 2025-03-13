
# Nxt Watch

**Nxt Watch** is a video streaming platform clone that I built using React. This project allowed me to apply several key web development concepts—including routing, API integration, authentication, theming, and more—to build a fully functional, responsive application.
 
**Live Project Link: [Nxt-Watch](https://nxtwtchbysai.ccbp.tech/)**

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Routes & Functionalities](#routes--functionalities)
- [Technologies Used](#technologies-used)
- [Setup Instructions](#setup-instructions)
- [API Integration](#api-integration)
- [Key Takeaways](#key-takeaways)
- [Future Enhancements](#future-enhancements)


## Overview

In this project, I developed a complete web application with multiple routes, robust authentication, and theme toggling functionality. The app starts in **light mode** and supports features like:

- **User Authentication:** Secure login with error handling and password visibility toggling.
- **Routing:** Protected routes for Home, Trending, Gaming, Saved Videos, and Video Item Details.
- **Data Fetching:** Real-time API calls for video lists and details with proper loader and error states.
- **Theming:** Dynamic light and dark themes that change background colors and button states.
- **Responsive UI:** A clean, intuitive interface featuring a sidebar, header, and popups.


## Features

- **Authentication & Authorization**
  - Login with valid credentials.
  - Displays error messages for invalid username or password.
  - Redirects users to appropriate routes based on authentication state.
  - Toggle password visibility.

- **Video Streaming Routes**
  - **Home Route:** Fetches and displays a list of videos with search functionality.
  - **Trending Route:** Displays trending videos along with error handling and retry mechanisms.
  - **Gaming Route:** Lists gaming videos with consistent theming.
  - **Video Item Details Route:** Detailed view of a selected video with integrated video player and interactive buttons (Like, Dislike, Save).
  - **Saved Videos Route:** Showcases videos that the user has saved; displays a “No Saved Videos Found” view when empty.
  - **Not Found Route:** Gracefully handles invalid URLs.

- **UI & UX Enhancements**
  - Theme toggling between light and dark modes.
  - Responsive layout with a sidebar (featuring social media icons) and header components.
  - Consistent design with clear loaders, failure views, and a logout popup with confirmation.



## Routes & Functionalities

| **Route**              | **URL Path**        | **Key Functionalities**                                                                                                                                     | **Theme Colors**                      |
|------------------------|---------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------|
| **Login**              | `/login`            | - Login form with error handling<br>- Password show/hide toggle<br>- Redirects authenticated users to Home                                                 | N/A                                   |
| **Home**               | `/`                 | - Fetches videos with search functionality<br>- Displays loader while fetching data<br>- Shows failure view with retry option                                 | Light: `#f9f9f9`<br>Dark: `#181818`    |
| **Trending**           | `/trending`         | - Fetches trending videos<br>- Displays loader and error view for failed API requests<br>- Navigable via sidebar links                                         | Light: `#f9f9f9`<br>Dark: `#0f0f0f`     |
| **Gaming**             | `/gaming`           | - Displays gaming videos<br>- Includes error handling and retry mechanism<br>- Consistent navigation using the sidebar                                       | Light: `#f9f9f9`<br>Dark: `#0f0f0f`     |
| **Video Item Details** | `/videos/:id`       | - Displays video details using a React video player<br>- Interactive Like, Dislike, and Save buttons with active/inactive states<br>- Fetches video-specific data | Light: `#f9f9f9`<br>Dark: `#0f0f0f`     |
| **Saved Videos**       | `/saved-videos`     | - Lists all saved videos or shows a “No Saved Videos Found” view when empty                                                                                 | Light: `#f9f9f9`<br>Dark: `#0f0f0f`     |
| **Not Found**          | (Invalid URL paths) | - Displays a custom “Not Found” page                                                                                                                         | N/A                                   |



## Technologies Used

- **React** for building the UI and managing routes.
- **Styled Components** for applying dynamic theming and component-level styling.
- **React Router** for handling client-side navigation.
- **React Player** for video playback integration.
- **date-fns** for formatting dates.
- **REST APIs** to fetch video data and authenticate users.
- **JavaScript (ES6+)** and **HTML/CSS** for core development.



## Setup Instructions

1. **Clone the Repository**

   ```bash
   git clone https://github.com/SaiRamaKrishnaa/nxt-watch.git
   cd nxt-watch
   ```

2. **Install Dependencies**

   ```bash
   npm install
   ```

3. **Run the Application**

   ```bash
   npm start
   ```

4. **User Credentials**

   Use the following credentials to log in:
   
   - **Username:** `rahul`
   - **Password:** `rahul@2021`



## API Integration

- **Login API**
  - **URL:** `https://apis.ccbp.in/login`
  - **Method:** `POST`
  - **Success Response:** Returns a JWT token for authenticated sessions.
  - **Error Handling:** Displays an error message if the username is not found or the password is incorrect.

- **Video Data APIs**
  - **Home Videos:** `https://apis.ccbp.in/videos/all?search=`
  - **Trending Videos:** `https://apis.ccbp.in/videos/trending`
  - **Gaming Videos:** `https://apis.ccbp.in/videos/gaming`
  - **Video Item Details:** `https://apis.ccbp.in/videos/:id`

Each API call displays a loader during the request and an error view with a retry option if the call fails.



## Key Takeaways

- **Authentication:** Implemented secure login and redirection based on user authentication status.
- **Routing:** Protected routes ensure that only authenticated users can access certain parts of the application.
- **Theming:** Built dynamic theme toggling (light and dark modes) that affects UI components and background colors.
- **State Management:** Managed UI states like active/inactive buttons (Like, Dislike, Save) for a smooth user experience.
- **Error Handling:** Robust error handling for API requests enhances reliability and user feedback.



## Future Enhancements

- **Enhanced Video Player Controls:** Implement more video controls like subtitles and playback speed.
- **User Profiles:** Allow users to create and manage their own profiles.
- **Comments & Reactions:** Add features for users to comment on and react to videos.
- **Improved UI/UX:** Refine responsive designs and add animations for smoother transitions.



This project was a great opportunity to practice and consolidate my understanding of React, API integration, and state management while building a feature-rich application. I hope you find the project interesting and feel free to reach out if you have any questions or suggestions!

