const BASE_URL = "https://random-d.uk/api/v2/random";

export function Api() {
  return fetch(`${BASE_URL}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Host: "Client-ID [my-client-id]",
    },
  })
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Ошибка такова: ${res.status}`);
    })
    .catch((err) => console.log("ошибка при попытке fetch : ", err));
}

export function getUnsplashDucks(pageNumber) {
  return fetch(`https://api.unsplash.com/search/photos?query=ducks&page=${pageNumber}`, {
    method: "GET",
    headers: {
      Authorization: "Client-ID 7gDq60ZOAkGuArU8JvMDKXLm88Fb-DWYAT8FIseR8CQ",
    },
  })
  .then((res) => {
    console.log('first res: ', res);
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка такова: ${res.status}`);
  });
}
