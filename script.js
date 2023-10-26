let inputText = document.querySelector("input");
let searchButton = document.querySelector("button");
let usernameDetails = document.querySelector(".usernameDetails");
let lodder = document.querySelector(".lodder");
let prfileContainer = document.querySelector(".profileContainer");
console.log(prfileContainer);
let error = document.querySelector(".error");
let main = document.querySelector(".main");
let githubIcon = document.querySelector(".fa-github");
let h1 = document.querySelector("h1");

//get showuser container data from html
let profile = document.querySelector(".image img");
let profileName = document.querySelector(".name p");
let profileId = document.querySelector(".name span");
let profileDate = document.querySelector(".date");
let bio = document.querySelector(".bio");
let repos = document.querySelector(".Repos span");
let followers = document.querySelector(".followers span");
let Following = document.querySelector(".Following span");
let map = document.querySelector(".location");
let twitter = document.querySelector(".twitter");
let linkdin = document.querySelector(".linkdin");
let home = document.querySelector(".home");

// console.log(searchButton);
//todo showuser function
function showUser(dataFormat) {
  if (dataFormat.message == "Not Found") {
    error.style.display = "block";
    lodder.style.display ="none";
    prfileContainer.style.display = "none";
  } else {
    error.style.display = "none";
    prfileContainer.style.display = "block";
    dataFormat.avatar_url = dataFormat.avatar_url==null ? "---" : dataFormat.avatar_url;
    dataFormat.name = dataFormat.name==null ? "---" : dataFormat.name;
    dataFormat.login = dataFormat.login==null ? "---" : dataFormat.login;
    dataFormat.created_at = dataFormat.created_at==null ? "---" : dataFormat.created_at;
    dataFormat.bio = dataFormat.bio==null ? "---" : dataFormat.bio;
    dataFormat.public_repos = dataFormat.public_repos==null ? "---" : dataFormat.public_repos;
    dataFormat.followers = dataFormat.followers==null ? "---" : dataFormat.followers;
    dataFormat.following = dataFormat.following==null ? "---" : dataFormat.following;
    dataFormat.location = dataFormat.location==null ? "---" : dataFormat.location;
    dataFormat.twitter_username = dataFormat.twitter_username==null ? "---" : dataFormat.twitter_username;
    dataFormat.blog = dataFormat.blog==null ? "---" : dataFormat.blog;
    dataFormat.company = dataFormat.company==null ? "---" : dataFormat.company;

    let date = dataFormat.created_at.slice(0,10).split("-").reverse().join("/");
    console.log(date);
    prfileContainer.innerHTML = `
    <div class="profile1">
        <div class="image">
            <img src="${dataFormat.avatar_url}" alt="avtarImg">
            <div class="name">
            <p class="name1">${dataFormat.name}</p>
            <p>@${dataFormat.login}</p>
        </div>
        </div>
        <div class="date">Joined    
        ${date}
        </div>
    </div>
    <div class="bio">${dataFormat.bio}</div>
    <div class="profile2">
        <div class="Repos">
            <p>Repos</p>
            <p>${dataFormat.public_repos}</p>
        </div>
        <div class="followers">
            <p>Followers</p>
            <p>${dataFormat.followers}</p>
        </div>
        <div class="Following">
            <p>Following</p>
            <p>${dataFormat.following}</p>
        </div>
    </div>
    <div class="icons">
        <div class="icon1">
            <p class="location"><i class="fas fa-fw fa-map-marked-alt"></i>${dataFormat.location}</p>
            <p class="twitter"><i class="fab fa-fw fa-twitter"></i>${dataFormat.twitter_username}</p>
        </div>
        <div class="icon2">
            <p class="linkdin"><i class="fas fa-fw fa-link"></i>${dataFormat.blog}</p>
            <p class="home"><i class="fas fa-fw fa-building"></i>${dataFormat.company}</p>
        </div>
    </div>
         
        `;
    console.log(dataFormat);
  }

  // profile.src = dataFormat
  console.log(dataFormat.message);
}

//todo when click to search button
async function fetchTheData() {
  let serachBarText = inputText.value;
  if (serachBarText.length <= 0) {
    usernameDetails.innerHTML = lodder.innerHTML;
  } else {
    lodder.style.display = "none";
    prfileContainer.style.display = "flex"
    let data = await fetch(`https://api.github.com/users/${serachBarText}`);
    let dataFormat = await data.json();
    //function which are show our user
    showUser(dataFormat);
  }
}

searchButton.addEventListener("click", fetchTheData);


//todo light mode and dark mode
let darkModeButton = document.querySelector("#moon");
let lightModeButton = document.querySelector("#sun");
darkModeButton.addEventListener("click",()=>{
    lightModeButton.style.display = "block";
    darkModeButton.style.display = "none";
    main.style.backgroundColor = "white";
    githubIcon.style.color = "black";
    h1.style.color = "black";
})

lightModeButton.addEventListener("click",()=>{
    darkModeButton.style.display = "block";
    lightModeButton.style.display = "none";
    main.style.backgroundColor = "black";
    githubIcon.style.color = "white";
    h1.style.color = "white";
})