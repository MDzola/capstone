const remoteURL = "http://localhost:5002";

export default Object.create(null, {
  get: {
    value: function(resource, id) {
      return fetch(`${remoteURL}/${resource}/${id}`).then(data => data.json());
    }
  },

  getExpand: {
    value: function(resource, id, expandResource1, expandResource2, expandResource3, expandResource4) {
      return fetch(`${remoteURL}/${resource}/${id}?_expand=${expandResource1}&_expand=${expandResource2}&_expand=${expandResource3}&_expand=${expandResource4}`).then(data => data.json());
    }
  },

  getToolList:{
    value: function(resource, taskId) {
      return fetch(`${remoteURL}/${resource}?taskId=${taskId}`)
    }
  },

  getAll: {
    value: function(resource) {
      return fetch(`${remoteURL}/${resource}`).then(data => data.json());
    }
  },

  getAllExpand: {
    value: function(resource, expandResource) {
      return fetch(`${remoteURL}/${resource}?_expand=${expandResource}`).then(
        data => data.json()
      );
    }
  },

  getAllExpandTask: {
    value: function(resource, expandResource1, expandResource2, resource3, resource4) {
      return fetch(`${remoteURL}/${resource}?_expand=${expandResource1}&_expand=${expandResource2}&_expand=${resource3}&_expand=${resource4}&_sort=priorityId&_order=desc`).then(
        data => data.json()
      );
    }
  },

  getSorted: {
    value: function(resource, userId) {
      return fetch(`${remoteURL}/${resource}?userId=${userId}`).then(data => data.json())
    }
  },

  delete: {
    value: function(resource, id) {
      return fetch(`${remoteURL}/${resource}/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json"
        }
      }).then(e => e.json());
    }
  },

  post: {
    value: function(newObject, resource) {
      return fetch(`${remoteURL}/${resource}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(newObject)
      }).then(data => data.json());
    }
  },

  put: {
    value: function(editedObject, resource) {
      return fetch(`${remoteURL}/${resource}/${editedObject.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(editedObject)
      }).then(data => data.json());
    }
  },

  patch: {
    value: function(patchedObject, resource) {
      return fetch(`${remoteURL}/${resource}/${patchedObject.id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(patchedObject)
      }).then(data => data.json());
    }
  }
});
