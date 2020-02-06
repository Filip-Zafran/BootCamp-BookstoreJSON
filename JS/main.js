fetch("https://api.myjson.com/bins/zyv02")
  .then(response => response.json())
  .then(data => {
    console.log(data.books);

    createFlipcard(data.books);
  })
  .catch(error => console.log(error));

function createFlipcard(books) {
  for (i = 0; i < books.length; i++) {
    var createFlipcard = document.createElement("div");
    createFlipcard.setAttribute("id", "FlipCard");
    createFlipcard.setAttribute("class", "flip-card");
    var createInner = document.createElement("div");
    createInner.setAttribute("class", "flip-card-inner");

    var createFront = document.createElement("div");
    createFront.setAttribute("class", "flip-card-front");
    var createImg = document.createElement("img");
    createImg.setAttribute("id", "imageID");

    createImg.setAttribute("src", books[i].cover);
    createImg.setAttribute("alt", "Avatar");
    createImg.setAttribute("style", "width:290px;height:380px;");

    var createBack = document.createElement("div");
    createBack.setAttribute("class", "flip-card-back");
    var createH2 = document.createElement("h2");
    createH2.setAttribute("id", "titleID");

    var createP1 = document.createElement("p");
    createP1.setAttribute("id", "descriptionID");

    var createP2 = document.createElement("p");
    createP2.setAttribute("id", "languageID");

    var createButton = document.createElement("button");
    createButton.setAttribute("type", "button");
    createButton.setAttribute("id", books[i].detail);
    createButton.addEventListener("click", function(event) {
      var showPicture = document.getElementById("showPictureID");

      var closeBtn = document.createElement("button");
      closeBtn.innerHTML = "Close image";
      showPicture.appendChild(closeBtn);
      closeBtn.setAttribute("style", "position:fixed;top:20%;left:25%;");

      closeBtn.addEventListener("click", function() {
        var showPicture = document.getElementById("showPictureID");
        var imgTag = showPicture.getElementsByTagName("img")[0];
        closeBtn.setAttribute("style", "position:fixed;top:20%;left:25%;");

        showPicture.removeChild(imgTag);
        showPicture.removeChild(closeBtn);
      });

      var createDet = document.createElement("img");
      createDet.setAttribute("src", event.target.id);
      createDet.setAttribute("alt", "image");
      createDet.setAttribute("style", "position:fixed;top:25%;left:25%;");

      var showPicture = document.getElementById("showPictureID");
      showPicture.appendChild(createDet);
    });

    createH2.innerHTML = books[i].title;
    createP1.innerHTML = books[i].description;
    createP2.innerHTML = books[i].language;
    createButton.innerHTML = "More info";

    createBack.appendChild(createH2);
    createBack.appendChild(createP1);
    createBack.appendChild(createP2);
    createBack.appendChild(createButton);

    createFront.appendChild(createImg);
    createInner.appendChild(createFront);
    createInner.appendChild(createBack);
    createFlipcard.appendChild(createInner);

    var cardPlace = document.getElementById("cardPlace");
    cardPlace.appendChild(createFlipcard);
  }
}

// function spanish() {
//   var str = document.getElementById("createP2").innerHTML;
//   var res = str.replace(/es/g, "Language: 'Spanish'");
//   document.getElementById("createP2").innerHTML = res;
// }
// spanish()

// FANCYBOX !!
// $(document).ready(function () {
//   $('[data-fancybox="preview"]').fancybox({
//     thumbs: {
//       autoStart: true
//     }
//   });
// });
