const token = '3de496963748ffea575eb3c83e558fe2a8d0a664'
fetch('https://api.github.com/user/repos', {
  headers: {
    Authorization: `token ${token}`
  }
})
  .then(res => res.json())
  .then(json => console.log(json));
