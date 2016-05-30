var url = 'http://localhost:3000/posts'
/*
export var postsApi = {
  getPosts: user => {
    return fetch(url).then(res => res.json())
  }
}
*/

export var postsApi = {
  getPosts: function() {
    return fetch(url).then(res => res.json())
  }
}
