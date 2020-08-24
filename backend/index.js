const router = require("express");
const axios = require("axios");
const cors = require("cors");

let app = router();

app.use(cors());

app.get("/", async (_, response) => {
  return response.json({
    message:
      "Please, use repositories request params with language and page number in order to get more information.",
  });
});

app.get("/repositories", async (_, response) => {
  const { data } = await axios.get(`https://api.github.com/repositories`);

  return response.json(data);
});

app.get(
  "/repositories/:language/:page/:per_page",
  async (request, response) => {
    const { language, page, per_page } = request.params;
    try {
      const { data } = await axios.get(
        `https://api.github.com/search/repositories?q=language:${language}&page=${page}&per_page=${per_page}`
      );
      return response.json(data);
    } catch (error) {
      console.log(error.message);
      return response.json({ error: error.message });
    }
  }
);

app.listen(3333, () => {
  console.log("Backend started on link http://localhost:3333");
});
