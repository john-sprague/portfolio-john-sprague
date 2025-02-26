# Login 

Here are **observations, suggestions, and potential improvements** for your `LoginPage` component, categorized into **React best practices**, **security concerns**, **performance optimizations**, and **general code quality**:

---

### **Observations and Suggestions**

#### 1. **React Best Practices**
   - **Prop Destructuring**: Destructure `props` in the function signature for cleaner code.
     ```tsx
     const LoginPage: React.FC<LoginProps> = ({ handleLogin, handleRegister }) => {
     ```
   - **Event Typing**: Use proper TypeScript types for events (`React.ChangeEvent<HTMLInputElement>` and `React.FormEvent<HTMLFormElement>`).
     ```tsx
     const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
       setUsernameInput(event.target.value);
     };
     ```
   - **Conditional Rendering**: Use `&&` for conditional rendering instead of `hidden` for better readability.
     ```tsx
     {usernameError && <span className="error-message">{usernameError}</span>}
     ```
   - **Button Types**: Explicitly define button types (`type="submit"` or `type="button"`) to avoid unintended behavior.
     ```tsx
     <button type="submit">Login</button>
     <button type="button" onClick={handleRegister}>Create an account</button>
     ```

#### 2. **Security Concerns**
   - **Plain-Text Passwords**: Storing plain-text passwords in `localStorage` is highly insecure. Use **hashing** (e.g., bcrypt) and store hashed passwords on the server.
   - **Error Messages**: Avoid revealing too much information in error messages. For example, instead of "Username doesn't exist," use "Invalid credentials."
   - **Password Input Type**: Ensure the password input uses `type="password"` to mask the input.
     ```tsx
     <input id="password-field" type="password" value={passwordInput} onChange={handlePasswordChange} />
     ```
   - **Rate Limiting**: The `rateLimit` function is a good start, but it only works client-side. Implement server-side rate limiting to prevent brute-force attacks.

#### 3. **Performance Optimizations**
   - **Debounce Input Handlers**: If the input handlers perform expensive operations, consider debouncing them.
   - **Memoization**: Memoize the `rateLimit` function or its results to avoid recalculating on every render.
     ```tsx
     const rateLimit = React.useCallback((username: string) => {
       const timeAtAttempt = Date.now();
       const lastAttemptTime = timesSinceLastAttempt.get(username);
       if (lastAttemptTime && timeAtAttempt - lastAttemptTime < minSlowdown) {
         return true;
       }
       setTimesSinceLastAttempt(new Map(timesSinceLastAttempt.set(username, timeAtAttempt)));
       return false;
     }, [timesSinceLastAttempt]);
     ```

#### 4. **General Code Quality**
   - **Separation of Concerns**: Move input validation logic into a separate function for better readability and reusability.
     ```tsx
     const validateInputs = (): boolean => {
       let isValid = true;
       if (!usernameInput.trim()) {
         setUsernameError("Username is required!");
         isValid = false;
       }
       if (!passwordInput.trim()) {
         setPasswordError("Password is required!");
         isValid = false;
       }
       return isValid;
     };
     ```
   - **Error Handling**: Clear error messages when the user starts typing in the respective fields.
     ```tsx
     const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
       setUsernameInput(event.target.value);
       setUsernameError(""); // Clear error on input change
     };
     ```
   - **Accessibility**: Add `aria-invalid` and `aria-describedby` attributes for better accessibility.
     ```tsx
     <input
       id="username-field"
       type="text"
       value={usernameInput}
       onChange={handleUsernameChange}
       aria-invalid={!!usernameError}
       aria-describedby="username-error"
     />
     {usernameError && (
       <span id="username-error" className="error-message">
         {usernameError}
       </span>
     )}
     ```

---

### **Potential Improvements**

#### 1. **Security Improvements**
   - **Use HTTPS**: Ensure your application is served over HTTPS to encrypt data in transit.
   - **Password Hashing**: Hash passwords before storing them (server-side).
     ```javascript
     // Example using bcrypt (Node.js)
     const bcrypt = require("bcrypt");
     const hashedPassword = await bcrypt.hash(plainTextPassword, 10);
     ```
   - **CSRF Protection**: Use anti-CSRF tokens for form submissions.

#### 2. **React Enhancements**
   - **Form Libraries**: Consider using form libraries like `Formik` or `React Hook Form` for better form management and validation.
   - **Unit Tests**: Write unit tests for the component to ensure it behaves as expected.

#### 3. **Code Cleanliness**
   - **Constants for Error Messages**: Define error messages as constants for easier maintenance.
     ```tsx
     const ERRORS = {
       USERNAME_REQUIRED: "Username is required!",
       PASSWORD_REQUIRED: "Password is required!",
       INVALID_CREDENTIALS: "Invalid credentials!",
     };
     ```
   - **Extract Helper Functions**: Move repeated logic (e.g., fetching users from `localStorage`) into helper functions.
     ```tsx
     const getUsersFromLocalStorage = (): User[] => {
       const users = localStorage.getItem("users");
       return users ? JSON.parse(users) : [];
     };
     ```

---

### **Improved Code Example**

Here’s a refactored version of your component with the above suggestions applied:

```tsx
import React from "react";
import { User } from "../../types";
import "./LoginPage.css";

interface LoginProps {
  handleLogin: (user: User) => void;
  handleRegister: () => void;
}

const ERRORS = {
  USERNAME_REQUIRED: "Username is required!",
  PASSWORD_REQUIRED: "Password is required!",
  INVALID_CREDENTIALS: "Invalid credentials!",
  TOO_MANY_ATTEMPTS: "Too many attempts, try again later",
};

const LoginPage: React.FC<LoginProps> = ({ handleLogin, handleRegister }) => {
  const [passwordError, setPasswordError] = React.useState<string>("");
  const [usernameError, setUsernameError] = React.useState<string>("");
  const [usernameInput, setUsernameInput] = React.useState<string>("");
  const [passwordInput, setPasswordInput] = React.useState<string>("");
  const [timesSinceLastAttempt, setTimesSinceLastAttempt] = React.useState<Map<string, number>>(new Map());
  const minSlowdown = 3000;

  const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsernameInput(event.target.value);
    setUsernameError("");
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPasswordInput(event.target.value);
    setPasswordError("");
  };

  const rateLimit = React.useCallback((username: string): boolean => {
    const timeAtAttempt = Date.now();
    const lastAttemptTime = timesSinceLastAttempt.get(username);
    if (lastAttemptTime && timeAtAttempt - lastAttemptTime < minSlowdown) {
      return true;
    }
    setTimesSinceLastAttempt(new Map(timesSinceLastAttempt.set(username, timeAtAttempt)));
    return false;
  }, [timesSinceLastAttempt]);

  const validateInputs = (): boolean => {
    let isValid = true;
    if (!usernameInput.trim()) {
      setUsernameError(ERRORS.USERNAME_REQUIRED);
      isValid = false;
    }
    if (!passwordInput.trim()) {
      setPasswordError(ERRORS.PASSWORD_REQUIRED);
      isValid = false;
    }
    return isValid;
  };

  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setUsernameError("");
    setPasswordError("");

    if (!validateInputs()) {
      return;
    }

    if (rateLimit(usernameInput)) {
      setUsernameError(ERRORS.TOO_MANY_ATTEMPTS);
      return;
    }

    const users = localStorage.getItem("users");
    const usersDeserialized: User[] = users ? JSON.parse(users) : [];
    const dbUser = usersDeserialized.find((user) => user.username === usernameInput);

    if (!dbUser) {
      setUsernameError(ERRORS.INVALID_CREDENTIALS);
      return;
    }

    if (dbUser.password === passwordInput) {
      dbUser.loggedIn = true;
      localStorage.setItem("users", JSON.stringify(usersDeserialized));
      handleLogin(dbUser);
    } else {
      setPasswordError(ERRORS.INVALID_CREDENTIALS);
    }
  };

  return (
    <div className="Login-page">
      <form onSubmit={handleFormSubmit}>
        <div>
          <label htmlFor="username-field">Username:</label>
          <br />
          <input
            id="username-field"
            type="text"
            value={usernameInput}
            onChange={handleUsernameChange}
            aria-invalid={!!usernameError}
            aria-describedby="username-error"
          />
          {usernameError && (
            <span id="username-error" className="error-message">
              {usernameError}
            </span>
          )}
        </div>
        <div>
          <label htmlFor="password-field">Password:</label>
          <br />
          <input
            id="password-field"
            type="password"
            value={passwordInput}
            onChange={handlePasswordChange}
            aria-invalid={!!passwordError}
            aria-describedby="password-error"
          />
          {passwordError && (
            <span id="password-error" className="error-message">
              {passwordError}
            </span>
          )}
        </div>
        <button type="submit">Login</button>
        <p>
          Not registered?{" "}
          <button type="button" onClick={handleRegister}>
            Create an account
          </button>
        </p>
      </form>
    </div>
  );
};

export default LoginPage;
```

---

### **Final Thoughts**
Your component is functional and well-structured, but there are several areas where improvements can be made to enhance **security**, **performance**, and **maintainability**. By addressing the observations and suggestions above, you can create a more robust and secure `LoginPage` component.

Let me know if you need further assistance!