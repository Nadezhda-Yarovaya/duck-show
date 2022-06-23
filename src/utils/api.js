const BASE_URL = 'https://random-d.uk/api/v2/random';

export function Api() {
    return fetch(`${BASE_URL}`, {
        method: "GET",
        headers: {
          'Content-Type': 'application/json',
          'Host': 'Client-ID [my-client-id]'
        }
      })
        .then((res) => {
            if (res.ok) {
            return res.json();
            }
            return Promise.reject(`Ошибка такова: ${res.status}`);
            
          })
          .catch(err => console.log("ошибка при попытке fetch : ", err));
      
    }