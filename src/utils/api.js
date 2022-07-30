const BASE_URL = "https://api.unsplash.com/search/photos?";
const AUTH = "7gDq60ZOAkGuArU8JvMDKXLm88Fb-DWYAT8FIseR8CQ";

export function getUnsplashDucks(pageNumber) {
  return fetch(`${BASE_URL}query=ducks&page=${pageNumber}`, {
    method: "GET",
    headers: {
      Authorization: `Client-ID ${AUTH}`,
    },
  }).then((res) => {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка соединения, код ошибки: ${res.status}`);
  });
}
