var posts=["2025/07/10/hello-world/","2025/07/10/Hello-world-0/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };