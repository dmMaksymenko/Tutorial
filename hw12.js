// function getCommentsByPage(page) {
//   const BASE_URL = "";
//   const END_POINT = "";
//   const PARAMS = new URLSearchParams({
//     _limit: 10,
//     _page: page,
//   });

//   const url = `${BASE_URL}${END_POINT}${PARAMS}`;

//   fetch(url)
//     .then((res) => res.json())
//     .then((data) => {
//       console.log(data);
//     });
// }
// getCommentsByPage(6);
export class NewsAPI {
  constructor() {
    this.BASE_URL = "";
    this.END_POINT = "";
  }
  getArticle() {
    const PARAMS = {};

    const url = `${this.BASE_URL}${this.END_POINT}`;
    return axios.get;
  }
}

function articleTemplate(article) {
  const { urlToImage, title, description } = article;
  return ``;
}

function articlesTemp(articles) {}
