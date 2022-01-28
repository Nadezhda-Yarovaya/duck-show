const BASE_URL = 'https://random-d.uk/api/random';

export function Api() {
    return fetch(`${BASE_URL}`, {
        method: "GET",
        //mode: 'no-cors',
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
          }
        })
        .then((res) => {
            if (res.ok) {
            return res.json();
            }
            return Promise.reject(`Ошибка такова: ${res.status}`);
            
          })
          .catch(err => console.log("ошибка при попытке fetch : " + err));
      
    }