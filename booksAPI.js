export class BookApi {
  constructor() {}

  // getbooks() {
  //   const BASE_URL = ;
  //   const END_POINT = ;
  //   const url = BASE_URL + END_POINT;

  //   return fetch(url).then(res=>res.json())
  // }
  resetBooks() {}
  deleteBooks() {}
  createBooks() {
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(book),
    };
    return fetch(url, options).then((res) => res.json());
  }
  updateBooks() {}
}
