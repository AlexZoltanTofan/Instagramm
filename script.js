//JSON Array mit den Informationen der einzelnen Posts
let posts = [
  {
    profilImage: 'pics/John.jpg',
    author: 'JohnBr',
    image: 'pics-post/Bmw.jpg',
    description:
      'Did you know the Double Cone is inspired by a frozen tornado? ',
    liked: false,
    likes: 250,
    userComents: [],
  },

  {
    profilImage: 'pics/Julia.jpg',
    author: 'Julia',
    image: 'pics-post/Oktoberfest.jpg',
    description: ' Oktoberfest 2022 so wunderbar ❤ ',
    likes: 180,
    userComents: [],
    liked: false,
  },

  {
    profilImage: 'pics/Amalia.jpg',
    author: 'Amalia',
    image: 'pics-post/Rathaus.jpg',
    description: 'Glockenspiel am Marienplatz',
    likes: 460,
    userComents: [],
    liked: false,
  },

  {
    profilImage: 'pics/Federich.jpg',
    author: 'federichInsta',
    image: 'pics-post/Nymphenburg.jpg',
    description: 'So nice view',
    likes: 271,
    userComents: [],
    liked: false,
  },
  {
    profilImage: 'pics/Luisa.jpg',
    author: 'luisa',
    image: 'pics-post/Isar.jpg',
    description: 'My favorite place',
    likes: 593,
    userComents: [],
    liked: false,
  },
];

// Funktion um die Posts aus dem Array posts zu laden
function render() {
  let content = document.getElementById('content');
  content.innerHTML = '';
  for (let i = 0; i < posts.length; i++) {
    const profil = posts[i];
    content.innerHTML += genereteUserProfil(profil, i);
    let coments = document.getElementById(`comentsUser${i}`);
    for (let j = 0; j < profil['userComents'].length; j++) {
      const coment = profil['userComents'][j];
      coments.innerHTML += generateComents(coment, j, i);
    }
  }
}

//Template Dokument um den Post zu erstellen.
function genereteUserProfil(profil, i) {
  return `
  <div class="profilName">
    <img class="picsUser" src="${profil['profilImage']}">
    <p>${profil['author']}</p>
  </div>
  <div class="postsBg">
       <img class="imagePost"src="${profil['image']}">
        <img id="heartIcon" onclick="likePost(${i})" class="profilIcon ${
    profil['liked'] == true ? 'liked' : ''
  }" src="icons/heart.png" >
       <img class="profilIcon" src="icons/chat.png">
       <img class="profilIcon" src="icons/send.png">
       
       <div class="descriptionBg">
       <div class="likeBg">Gefällt ${profil['likes']} Mal</div>
      <b>${profil['author']}</b><span>: ${profil['description']}</span>
  </div>
  
  <div id="comentsUser${i}"></div>
  <div class="addComent">
     <input id="input${i}" type="text" placeholder="Kommentar hinzufügen"><button onclick="addComent(${i})">Posten</button>
  </div>
  
  `;
}

//Template Dokument um den Kommentarbereich zu erstellen.
function generateComents(coment, j, i) {
  return `
  <div  class="comentsBg" >
       <span><b>Loren</b>: ${coment}</span>
        <img onclick="deleteComents(${j},${i})" class="iconDelete" src="icons/delete.png">
  </div>`;
}

// Function um neuen komentar hinzufügen
function addComent(index) {
  let input = document.getElementById(`input${index}`);

  if (input.value == 0) {
    alert('Zum Posten, musst du mindestens ein Zeichen einfügen!');
  } else {
    posts[index]['userComents'].push(input.value);
  }
  render();
  input.value = '';
}

// Funktion um die coment zu löschen
function deleteComents(j, i) {
  posts[i]['userComents'].splice(j, 1);
  render();
}

//Funtion um like geben oder dislike
function likePost(index) {
  if (posts[index]['liked'] === true) {
    posts[index]['liked'] = false;
    posts[index]['likes'] -= 1;
  } else {
    posts[index]['likes'] += 1;
    posts[index]['liked'] = true;
  }
  render();
}

//JSON Array mit den Informationen der einzelnen Profil
let follows = [
  { image: 'pics/Arthur.jpg', name: 'arthurPrag', status: 'Folgen' },
  { image: 'pics/Federich.jpg"', name: 'federichInsta', status: 'Folgen' },
  { image: 'pics/John.jpg', name: 'johnBr', status: 'Folgen' },
  { image: 'pics/Julia.jpg', name: 'Julia', status: 'Folgen' },
  { image: 'pics/Luisa.jpg', name: 'luisa', status: 'Folgen' },
];

// Funktion um die Follow, Unfollow Profil zu laden
function renderFollowers() {
  let content = document.getElementById('followers');
  content.innerHTML = '';
  for (let i = 0; i < follows.length; i++) {
    let follow = follows[i];
    content.innerHTML += ` <div class="userBg">
    <img class="iconPeople" src="${follow['image']}" />
    <span>${follow['name']}</span>
    <span onclick="changeFollow(${i})" id="allFollow${i}" class="textBlue">${follow['status']}</span>
  </div>`;
  }
}

function changeFollow(i) {
  let newFollow = document.getElementById(`allFollow${i}`);
  if (newFollow.innerHTML.includes('Folgen')) {
    newFollow.innerHTML = 'Gefolgt';
  } else {
    newFollow.innerHTML = 'Folgen';
  }
}

window.onscroll = function () {
  let rightUser = document.getElementById('rightUser');

  if (window.scrollY > '60') {
    rightUser.style.top = '0';
  } else rightUser.style.top = '69.6px';
};
