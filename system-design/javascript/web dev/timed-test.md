Here’s the text converted into a `.md` file format:

# Music Streaming App Development

## Task 1: Event Handlers

### 1a. Play Button Event Handler

When users reach the end of a playlist, the music stops playing until they manually select a new song. To improve this, we can add an event handler to the play button that creates and assigns a global variable containing all of the user's liked songs.

#### Implementation:

```javascript
playButtonElem.addEventListener('click', () => {
    const likedSongs = user.songs.filter(song => song.liked); 
    window.likedSongs = likedSongs; 
});
```

---

### 1b. Infinite Scrolling Event Handler

To enable infinite scrolling on the homepage, we can add an event handler to the `window` object that appends `next_up_songs` to `displayed_songs` when the user scrolls to the bottom of the page.

#### Implementation:

```javascript
window.addEventListener('scroll', () => {
    const closeToBottom = 20;
    if (
      window.innerHeight + window.pageYOffset >=
      document.body.offsetHeight - closeToBottom
    ) {
        window.displayed_songs = [...displayed_songs, ...next_up_songs];
    }

    // we also need to update the rendered list of songs 
    // we'd also fetch new next_up_songs here, 
    // We'd also want to add logic to stop the scroll when all songs are loaded! 
});
```

---

### 1c. Responsive Page Load Event Handler

To ensure the main page is responsive on both web and mobile, we can add an event handler to the `window` object that assigns the appropriate height and width to a global `dimensions` variable based on the device type.

#### Implementation:

```javascript
window.dimensions = {};
window.addEventListener('load', (event) => {
    if (event.target.value === 'mobile') {
        window.dimensions.height = screenHeightMobile;
        window.dimensions.width = screenWidthMobile;
    } else if (event.target.value === 'desktop') {
        window.dimensions.height = screenHeightDesktop;
        window.dimensions.width = screenWidthDesktop;
    } else {
        console.error('Invalid device type:', deviceType);
    }
});
```

---

## Task 2: New Features

### 2a. Embeddable Player

We’d like to have an embeddable player that can be added to other sites. This player should be framework-neutral, easily embedded, and difficult for the embedding site to change or misrepresent.

#### Implementation:
- Use an `<iframe>` to embed the player. This isolates the player from the embedding site’s DOM and CSS.
- Serve the player as a standalone page with limited customization options (e.g., playlist ID, theme color).
- Use the `sandbox` attribute to restrict what the embedding site can do:
  ```html
  <iframe src="https://music-streaming-app.com/embed/player?id=123" sandbox="allow-scripts allow-same-origin"></iframe>
  ```

#### Considerations:
- Ensure the player is mobile-responsive and high-performance.
- Include accessibility features (e.g., keyboard controls, screen reader support).
- Be aware of security issues with iFrames (e.g., XSS attacks).
- Implement versioning and notify users of changes to the player.

---

### 2b. Playlist Sharing via API

We’d like to implement a system for external sites to call our API so users can link their playlists on other sites.

#### Implementation:
- Create an API endpoint (e.g., `/api/playlists/{id}`) that returns playlist data in JSON format.
- Use OAuth 2.0 for authentication to ensure only authorized apps can access the API.
- Provide clear documentation for external developers, including how to authenticate and fetch playlist data.

#### Considerations:
- Ensure users can control which playlists are shareable and with whom.
- Optimize the API for high traffic and large playlists.
- Provide meaningful error messages for invalid requests or unauthorized access.

---

### 2c. Storing Username for Auto-Fill

Some users are frustrated with the current login system, which doesn’t store any information. As a temporary fix, we can store the username after login and auto-fill it on their next visit.

#### Implementation Options:

1. **Local Storage**:
   - Store the username in `localStorage` after login:
     ```javascript
     localStorage.setItem('username', 'john_doe');
     ```
   - On page load, retrieve the username and auto-fill the field:
     ```javascript
     const username = localStorage.getItem('username');
     if (username) {
       document.getElementById('username').value = username;
     }
     ```

2. **Cookies**:
   - Store the username in a cookie after login:
     ```javascript
     document.cookie = "username=john_doe; max-age=2592000; path=/"; // Expires in 30 days
     ```
   - On page load, read the cookie and auto-fill the field:
     ```javascript
     const username = document.cookie.split('; ').find(row => row.startsWith('username='))?.split('=')[1];
     if (username) {
       document.getElementById('username').value = username;
     }
     ```

#### Pros and Cons:

| **Method**       | **Pros**                                                                 | **Cons**                                                                 |
|-------------------|--------------------------------------------------------------------------|--------------------------------------------------------------------------|
| **Local Storage** | - Larger storage capacity (5MB).<br>- Data persists until explicitly cleared. | - Data is not automatically cleared.<br>- Less secure than cookies.      |
| **Cookies**       | - Supported by all browsers.<br>- Can set expiration dates.              | - Limited storage size (4KB).<br>- Sent with every request, increasing bandwidth. |

---

### iFrame Considerations

- **Security**: Use the `sandbox` attribute to restrict what the embedding site can do.
- **Performance**: Optimize the player’s loading time to avoid slowing down the embedding site.
- **Accessibility**: Ensure the player is accessible (e.g., keyboard navigation, screen reader support).
- **Versioning**: Implement versioning and notify users of changes to the player.

---

### Front-End Focus

- Add a **Share Button** next to the iFrame playlist. When clicked, the button should open a modal with sharing options.
- Make an API call to the backend to get the generated playlist ID.
- Persist the username on the front end using **localStorage** or **cookies** to improve user experience.

---

### Clarifying Questions

- Is this a question about building the API endpoint? Since we’re in the front-end module, focus on what we can do on the front end.
- For the embeddable player, ensure the iFrame is mobile-responsive and high-performance, and include accessibility features.
- For playlist sharing, focus on the front-end implementation of the share button and modal.
- For username storage, discuss the pros and cons of **localStorage** vs. **cookies**.

---