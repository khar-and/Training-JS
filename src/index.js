import axios from "axios";

console.log('START');
// Part 1 - AXIOS

const URL = 'https://api.thecatapi.com/v1';
const API_KEY = 'live_s0lcBzs1W5DxJIB5XebaVk00xplSx3NdATmq6PeVLBHF4GzB1tD0m15CvTjtWoQ8';
const arrBreeds = [];

// function getContent() {
//     const response = axios.get(`${URL}/breeds?api-key=${API_KEY}`)
//     // const response = axios.get(`${URL}/images/search?breed_ids=${breedId}&api_key=${API_KEY}`)
//     console.log(response);
//     return response;     // Get Promise

// }

// getContent()
//     .then((data) => {
//         console.log(data);
//         console.log(data.status);
//         console.log(data.statusText);
//         data.forEach((element) => {
            
//             arrBreeds.push(element.name)
        
                      
//         });
//         console.log(arrBreeds);
//     })
    


function getContent() {
    axios.get(`${URL}/breeds?api-key=${API_KEY}`)
  .then((response) => {
    // обработка успешного запроса
      console.log(response);
      console.log(response.data[0]);
      response.data.forEach(element => {
          arrBreeds.push(element.name);
        
      });
      console.log(arrBreeds);
      return 
  })
  .catch(function (error) {
    // обработка ошибки
    console.log(error);
  })
  .finally(function () {
    // выполняется всегда
  });
    
}

getContent();
console.log(arrBreeds)

