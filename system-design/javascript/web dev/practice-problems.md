# Practice Problems 

- Authentication / User Sessions 
- Frontend Components / Event handlers
- Asynchronous JavaScript / Promises

## Authentication / User Sessions

You recently joined a team that has a public website they are looking to add user authentication to.  

1. **Describe (in words) how you would implement a secure authentication flow.**  
2. **Write pseudocode outlining one function for each operation that is a part of your authentication flow and what that function would need to do.**  
3. **Once a user is logged in, describe how you would save which pages the user has viewed.**  

---

### Authentication Flow

1. **User Registration**: The client-facing system will have a login/signup form.  
   - The text input boxes will have included best practices for username/password policies.  
   - The input text will also be validated and sanitized to prevent SQL injections.  
2. **User Login**: The user logs in with their credentials. Upon successful authentication, the server issues a secure token (e.g., JWT) to the client.  
   - Include rate limiting to prevent brute-force attacks.  
   - Include CAPTCHA to help interrupt bots.  
3. **MFA Verification**: Users must verify their identity via a second factor (i.e., email, text message, authenticator, etc)
4. **Session Management**: The front end stores the token securely in a HTTP-only cookie to prevent XSS attacks and includes it in subsequent requests to authenticate the user.
    - HTTPS: Ensure all communication between the frontend and backend is encrypted using HTTPS.
    - Middleware authorization to secure routes
5. **Logout**: Invalidate tokens/Sessions

```javascript
async function registerUser(email, username, password) {
  try {
    let response = await fetch('/registerUser',  {
      method: 'POST', 
      headers: {'Content-Type': 'application/json'},
      body: {username, email, password}
    }); 
    
    if (!response.ok) throw new Error('Registration failed');
    window.location.href = '/login';
  } catch (error) {
    console.error('Registration error:', error.message);
  }
} 


async function loginUser(username, password) {
  try {
    let response = await fetch('/login', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'}, 
      body: {userName, password}
    })


    if (!response.ok) throw new Error('Login failed');



  window.location.href = '/dashboard'


  } catch (error) {
    console.log('Login error: ', error.message);
    alert('Login failed: ${error.message}');
  }
}

async function checkAuthStatus() {
    try {
        const response = await fetch('/api/check-auth', {
            method: 'GET',
            credentials: 'include', // Ensures cookies are included
        });


        if (!response.ok) throw new Error('Not authenticated');


        const { user } = await response.json();
        console.log('User is authenticated:', user);
    } catch (error) {
        console.error('Authentication check failed:', error.message);
        window.location.href = '/login'; // Redirect to login page
    }
}

async function fetchUserProfile() {
    try {
        const response = await fetch('/api/profile', {
            method: 'GET',
            credentials: 'include', // Ensures cookies are included in the request
        });


        if (!response.ok) throw new Error('Failed to fetch profile');


        const userProfile = await response.json();
        console.log('User profile:', userProfile);
        return userProfile 
    } catch (error) {
        console.error('Error fetching profile:', error.message);
    }
}

async function logout() {
  try {
    const response = await fetch('/logout', {
      method: 'POST', 
      credentials: 'include'
    })


    if (!response.ok) throw new Error('Failed to logout');


    return;
  } catch (error) {
    console.error('Error logging out', error.message);
    alert('logout unsuccessful: ', error.message);
  }
}

async function trackPageView(pageUrl) {
    try {
        // Send the viewed page data to the backend
        const response = await fetch('/api/track-page', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({ pageUrl }),
        });

        if (!response.ok) throw new Error('Failed to track page view');
    } catch (error) {
        console.error('Tracking error:', error.message);
    }
}
```

## Frontend Components / Event handlers

**Prompt:**

1. Create a react component `<Search />` that renders a single text input.

2. Assume that we want to store the value of the text box so that we can query our server.  Update the <Search />  component so that the value of the text input is also stored in the components state.

3. Suppose we query the server every time the value of the text input is changed.  What problems might still exist with our search component?  How might we fix those problems?

### Solution 
To answer question 3, there are problems with the current implementation. 

Performance impact: The server is queried on every keystroke, which can lead to a large number of requests unnecessary and decrease the performance (compute) of the server. We're also wasting network resources.


To fix this problem, we can do a few things. 

- Debouncing - Wait for the user to stop typing for a specified period and then send the request to the server 
- Abort requests that are invalid --- we can use the AbortController API to cancel a request that is no longer needed. 
- Have a loading state - while we are waiting for a response, have a loading spinner that essentially blocks the user from typing/querying until the response is received. 
- Include a submit button, so that when the user is finished, prompt them to send the request. 
import React, { useState, useEffect } from 'react';

```javascript
const Search = () => {
    const [query, setQuery] = useState(''); // State to store the input value


    // Function to query the server
    const queryServer = async (searchQuery) => {
        try {
            const response = await fetch(`/api/search?q=${encodeURIComponent(searchQuery)}`);
            if (!response.ok) throw new Error('Failed to fetch results');
            const data = await response.json();
            console.log('Search results:', data);
        } catch (error) {
            console.error('Error querying server:', error.message);
        }
    };


    // Effect to query the server whenever the query changes
    useEffect(() => {
        if (query.trim() !== '') {
            queryServer(query);
        }
    }, [query]);


    return (
        <div>
            <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search..."
            />
        </div>
    );
};


export default Search;
```

### Updated Solution 

- Includes debouncing 
- abortController 
- loading/error state

```javascript 
import React, { useState, useEffect } from 'react';

const Search = () => {
    const [query, setQuery] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const queryServer = async (searchQuery, signal) => {
        setIsLoading(true);
        setError(null);

        try {
            const response = await fetch(`/api/search?q=${encodeURIComponent(searchQuery)}`, { signal });
            if (!response.ok) throw new Error('Failed to fetch results');
            const data = await response.json();
            console.log('Search results:', data);
        } catch (error) {
            if (error.name !== 'AbortError') {
                setError(error.message);
            }
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        if (query.trim() === '') {
            console.log('Skipping empty query');
            return;
        }

        const abortController = new AbortController();
        const debounceTimer = setTimeout(() => {
            queryServer(query, abortController.signal);
        }, 300);

        return () => {
            clearTimeout(debounceTimer);
            abortController.abort();
        };
    }, [query]);

    return (
        <div>
            <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search..."
            />
            {isLoading && <p>Loading...</p>}
            {error && <p style={{ color: 'red' }}>{error}</p>}
        </div>
    );
};

export default Search;
```

## Asynchronous JavaScript / Promises


**Prompt:**

1. Write a function called getGithubUsers that returns a promise

2. Within the promise, execute either an AJAX or fetch query to “https://api.github.com/users” which is a public endpoint.

3. Resolve or reject the promise when the request completes

### Promise Solution 

```javascript 
function getGithubUsers() {
    return new Promise((resolve, reject) => {
        // Make a fetch request to the GitHub API
        fetch('https://api.github.com/users')
            .then((response) => {
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                return response.json();
            })
            .then((data) => {
                console.log('Github users: ', ${results})
                resolve(data);
            })
            .catch((error) => {
                reject(error);
            });
    });
}
```

### Async/Awaits Solution 

```javascript
async function getGithubUsers() {
  try {
    const response = await fetch('https://api.github.com/users', {
      method: 'GET',
      headers: {'Content-Type': 'application/json'}
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    console.log('Github users:', data);
    return data;
  } catch (error) {
    console.error('Error fetching GitHub users:', error.message);
    // Avoid using alert() in production; handle errors appropriately
    throw error; // Re-throw the error for the caller to handle
  }
}
```

**When to Use Each Approach** 
- Use async/await (Function 1):
    - When writing modern JavaScript code.
    - When you want cleaner, more readable code.
    - When working with sequential asynchronous operations.

- Use Promises (Function 2):
    - When working with older codebases that don’t support async/await.
    - When you need fine-grained control over Promise resolution and rejection.

