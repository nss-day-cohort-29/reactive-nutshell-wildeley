const remoteURL = "http://localhost:5002"

export default {
  getMessage(id) {
    return fetch(`${remoteURL}/messages/${id}`).then(e => e.json())
  },
  getAllMessages() {
    return fetch(`${remoteURL}/messages`).then(e => e.json())
  }
}