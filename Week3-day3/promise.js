/*************************Task 1****************************/
fetch("https://jsonplaceholder.typicode.com/posts")
  .then((response) => response.json())
  .then((posts) => {
    const displayPosts = document.getElementById("display");

    posts.slice(0, 3).forEach((post) => {
      const postElement = document.createElement("div");
      const titleElement = document.createElement("h2");
      const bodyElement = document.createElement("p");

      titleElement.textContent = post.title;
      bodyElement.textContent = post.body;

      postElement.appendChild(titleElement);
      postElement.appendChild(bodyElement);
      displayPosts.appendChild(postElement);
    });
  })
  .catch((error) => {
    alert("error", error);
  });

/*************************Task 2****************************/

fetch("https://jsonplaceholder.typicode.com/comments?postId=1")
  .then((response) => response.json())
  .then((Comments) => {
    const displayComments = document.getElementById("display-comments");

    Comments.slice(1, 4).forEach((comment) => {
      const commentDiv = document.createElement("div");
      const nameHeader = document.createElement("h3");
      const emailParagraph = document.createElement("p");
      const bodyParagraph = document.createElement("p");

      nameHeader.textContent = comment.name;
      emailParagraph.textContent = comment.email;
      bodyParagraph.textContent = comment.body;

      commentDiv.appendChild(nameHeader);
      commentDiv.appendChild(emailParagraph);
      commentDiv.appendChild(bodyParagraph);

      displayComments.appendChild(commentDiv);
    });
  })
  .catch((error) => console.log("error", error));

/*************************Task 3****************************/

fetch("https://jsonplaceholder.typicode.com/albums?userId=1")
  .then((response) => response.json())
  .then((albums) => {
    const displayAlbums = document.getElementById("display-albums");

    albums.slice(0, 3).forEach((album) => {
      const albumElement = document.createElement("div");
      const titleElement = document.createElement("p");
      const idElement = document.createElement("h2");

      titleElement.textContent = album.title;
      idElement.textContent = album.id;

      albumElement.appendChild(idElement);
      albumElement.appendChild(titleElement);
      displayAlbums.appendChild(albumElement);
    });
  })
  .catch((error) => {
    alert("error", error);
  });

/*************************Task 4****************************/

fetch("https://jsonplaceholder.typicode.com/photos?albumId=1")
  .then((response) => response.json())
  .then((photos) => {
    const displayPhotos = document.getElementById("display-photos");

    photos.slice(0, 3).forEach((photo) => {
      const photoElement = document.createElement("div");
      const titleElement = document.createElement("h4");
      const thumbnailElement = document.createElement("img");

      titleElement.textContent = photo.title;
      thumbnailElement.src = photo.thumbnailUrl;

      photoElement.appendChild(titleElement);
      photoElement.appendChild(thumbnailElement);
      displayPhotos.appendChild(photoElement);
    });
  })
  .catch((error) => {
    alert("error", error);
  });

/*************************Task 5****************************/

fetch("https://jsonplaceholder.typicode.com/todos")
  .then((response) => response.json())
  .then((toDoList) => {
    const displayList = document.getElementById("display-list");

    toDoList.slice(1, 4).forEach((list) => {
      const listElement = document.createElement("div");
      const titleElement = document.createElement("h2");
      const statusElement = document.createElement("p");

      titleElement.textContent = list.title;
      statusElement.textContent = list.completed;

      listElement.appendChild(titleElement);
      listElement.appendChild(statusElement);
      displayList.appendChild(listElement);
    });
  })
  .catch((error) => {
    alert("error", error);
  });

/*************************Task 6****************************/

fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => response.json())
  .then((users) => {
    const displayUser = document.getElementById("display-users");

    users.slice(0, 3).forEach((user) => {
      const userElement = document.createElement("div");
      const nameElement = document.createElement("h2");
      const userNameElement = document.createElement("h3");
      const emailElement = document.createElement("p");
      const addressElement = document.createElement("p");

      nameElement.textContent = user.name;
      userNameElement.textContent = user.username;
      emailElement.textContent = user.email;

      let addressList = "";
      for (const [key, value] of Object.entries(user.address)) {
        addressList += `${key}: ${value}`+'<br>';
        if (user.address.geo) {
          addressList += `${user.address.geo.lat}: ${user.address.geo.lng}`;
        }
      }

      addressElement.textContent = addressList;

      userElement.appendChild(nameElement);
      userElement.appendChild(userNameElement);
      userElement.appendChild(emailElement);

      userElement.appendChild(addressElement);

      displayUser.appendChild(userElement);
    });
  })
  .catch((error) => {
    alert("error", error);
  });

/*
let obj = {
  "id": 1,
  "name": "Leanne Graham",
  "username": "Bret",
  "email": "Sincere@april.biz",
  "address": {
      "street": "Kulas Light",
      "suite": "Apt. 556",
      "city": "Gwenborough",
      "zipcode": "92998-3874",
      "geo": {
          "lat": "-37.3159",
          "lng": "81.1496"
      }
  },
  "phone": "1-770-736-8031 x56442",
  "website": "hildegard.org",
  "company": {
      "name": "Romaguera-Crona",
      "catchPhrase": "Multi-layered client-server neural-net",
      "bs": "harness real-time e-markets"
  }
};

for (const [,value] of Object.entries(obj.address)) {
  console.log(value );
}
  */
