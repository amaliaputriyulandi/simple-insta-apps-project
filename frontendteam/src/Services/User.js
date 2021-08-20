export const register = async (email, username, password) => {
    const url = "https://simple-insta-app.herokuapp.com/api/signup";
    const data = {
        email,
        username,
        password
    };
    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      return response.json();
    } catch (error) {
      throw error;
    }
  };

  export const login = async (email, password) => {
    const url = "https://simple-insta-app.herokuapp.com/api/login";
    const data = {
        email,
        password
    };
    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      return response.json();
    } catch (error) {
      throw error;
    }
  };