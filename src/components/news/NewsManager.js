const remoteURL = "http://localhost:5002";

export default {
  get(id) {
    return fetch(`${remoteURL}/news/${id}`).then(e => e.json());
  },
  getAll() {
    return fetch(`${remoteURL}/news`).then(e => e.json());
  },
  post(newArticle) {
    return fetch(`${remoteURL}/news`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newArticle)
    }).then(data => data.json());
  }
};
