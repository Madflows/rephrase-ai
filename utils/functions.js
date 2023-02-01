export const getBio = (e) => {
    const options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: `{"prompt":"${e.bio}","tone":"${e.name} from ${e.show}"}`,
    };

    return fetch("https://gpt3-api-wapp.onrender.com/", options)
      .then((response) => response.json())
};
