let getmoviescontainer = document.querySelector(".moviescontainer");
let getdropdownbuttons = document.querySelectorAll(".jsdrop");

getdropdownbuttons.forEach((element) => {
  element.addEventListener("click", (event) => {
    const sortedId = event.target.id;

    if (sortedId === "date") {
      const sortedbyDate = movies.sort(
        (a, b) => b.uploadDate.getTime() - a.uploadDate.getTime()
      );
      updateUi(sortedbyDate);
    } else if (sortedId === "head") {
      const sortedByName = movies.sort((a, b) =>
        a.title.localeCompare(b.title)
      );
      updateUi(sortedByName);
    } else if (sortedId === "viewsmost") {
      const sortedByViewsMost = movies.sort(
        (a, b) => b.viewcounts - a.viewcounts
      );
      updateUi(sortedByViewsMost);
    } else if (sortedId === "viewsless") {
      const sortedByViewsLess = movies.sort(
        (a, b) => a.viewcounts - b.viewcounts
      );
      updateUi(sortedByViewsLess);
    }
  });
});

const movies = [
  {
    title: "Demon Slayer",
    thumbnail:
      "images/Demon-Slayer-Kimetsu-no-Yaiba-The-pleasure-district-in-VF.webp.jpeg",
    uploadDate: new Date(2015, 7, 12),
    viewcounts: 3000000,
  },

  {
    title: "Spider Man",
    thumbnail: "images/Spider_Man_Across_the_Spider_Verse-524691364-large.jpg",
    uploadDate: new Date(2020, 3, 17),
    viewcounts: 5000000,
  },

  {
    title: "Pee Mak(3)",
    thumbnail: "images/2VKZR_4f.jpg",
    uploadDate: new Date(2020, 12, 9),
    viewcounts: 4000000,
  },

  {
    title: "Friend Zone",
    thumbnail: "images/friendzone.jpeg",
    uploadDate: new Date(2014, 5, 12),
    viewcounts: 6000000,
  },

  {
    title: "My Tommorw Your Yesterday",
    thumbnail: "images/my_tomorrow_your_yesterday_2016.jpg.webp",
    uploadDate: new Date(2013, 12, 1),
    viewcounts: 3000000,
  },

  {
    title: "Infinity War",
    thumbnail: "images/p_avengersinfinitywar_19871_cb171514.jpeg.webp",
    uploadDate: new Date(2021, 9, 22),
    viewcounts: 8000000,
  },
  {
    title: "Splice",
    thumbnail: "images/Splice-poster.jpg",
    uploadDate: new Date(2017, 1, 29),
    viewcounts: 4000000,
  },
  {
    title: "Big Mouth",
    thumbnail: "images/images (1).jpeg",
    uploadDate: new Date(2022, 6, 18),
    viewcounts: 50000000,
  },
  {
    title: "True Sight",
    thumbnail:
      "images/MV5BMTY0ZTI0NjktMGUyYi00M2EzLTk0MDEtNWZhZTFjMTU0ZjEzXkEyXkFqcGdeQXVyNjkxNTE4OTg@._V1_.jpg",
    uploadDate: new Date(2018, 8, 19),
    viewcounts: 90000000,
  },
  {
    title: "Strange Things",
    thumbnail: "images/FYm2jNrWYAAI4ZP.jpg_large.jpeg",
    uploadDate: new Date(2022, 5, 3),
    viewcounts: 1000000,
  },
];

const updateUi = (movies) => {
  getmoviescontainer.innerHTML = "";
  movies.forEach((movie) => {
    const movieTag = `
    <div class="movieContainer">
       <img src="${movie.thumbnail}" class="img" />
       <h6 class="heading">${movie.title}</h6>
        <p class="heading">${movie.uploadDate.toLocaleDateString()}</p>
    </div>
    `;
    getmoviescontainer.innerHTML += movieTag;
  });
};
updateUi(movies);
