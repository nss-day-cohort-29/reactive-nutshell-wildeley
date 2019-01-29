const remoteURL = "http://localhost:5002";
export default {
    get(id) {
      return fetch(`${remoteURL}/tasks/${id}`).then(e => e.json());
    },
    getAll() {
      return fetch(`${remoteURL}/tasks`).then(e => e.json());
    },
    put(taskId, ExistingTask) {
      return fetch(`${remoteURL}/tasks/${taskId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(ExistingTask)
      }).then(data => data.json());
    }
  };