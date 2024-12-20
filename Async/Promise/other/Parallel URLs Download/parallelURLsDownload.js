const URL_ARR = [
  "https://fastly.picsum.photos/id/0/5000/3333.jpg?hmac=_j6ghY5fCfSD6tvtcV74zXivkJSPIfR9B8w34XeQmvU",
  "https://fastly.picsum.photos/id/1/5000/3333.jpg?hmac=Asv2DU3rA_5D1xSe22xZK47WEAN0wjWeFOhzd13ujW4",
  "https://fastly.picsum.photos/id/2/5000/3333.jpg?hmac=_KDkqQVttXw_nM-RyJfLImIbafFrqLsuGO5YuHqD-qQ",
  "https://fastly.picsum.photos/id/3/5000/3333.jpg?hmac=GDjZ2uNWE3V59PkdDaOzTOuV3tPWWxJSf4fNcxu4S2g",
];

async function fetchData(url) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }
    return await response.blob();
  } catch (err) {
    throw err;
  }
}

Promise.all(URL_ARR.map(fetchData))
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });
/*
[
  Blob { size: 490823, type: 'image/jpeg' },
  Blob { size: 417790, type: 'image/jpeg' },
  Blob { size: 451977, type: 'image/jpeg' },
  Blob { size: 395440, type: 'image/jpeg' }
]
*/
