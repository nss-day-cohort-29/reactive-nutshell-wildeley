const remoteURL = "http://localhost:5002"

export default {
  getMessage(id) {
    return fetch(`${remoteURL}/messages/${id}`).then(e => e.json())
  },
  getAllMessages() {
    return fetch(`${remoteURL}/messages`).then(e => e.json())
  },
  getAllUsers() {
    return fetch(`${remoteURL}/users`).then(e => e.json())
  },
  postNewMessage(newmessage) {
      return fetch(`${remoteURL}/messages`, {
          method: "POST",
          headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify(newmessage)
        }).then(data => data.json())
    }
//   getAllAscend(resource)  {
//         return fetch(`${remoteURL}/${resource}?_sort=date&_order=asc`)
//         .then(result => result.json())
//   },


}
