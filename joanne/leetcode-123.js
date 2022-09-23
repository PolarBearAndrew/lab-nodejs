const fetchUrlCat = 'https://api.thecatapi.com/v1/images/search';
const fetchUrlDog = 'https://dog.ceo/api/breeds/image/random';
const fetchUrlCatData = 'https://api.datamuse.com/words?rel_rhy=cat';
const fetchUrlDogData = 'https://api.datamuse.com/words?rel_rhy=dog';
const fetchUrlCatApiKey = 'live_yE89cnx72V2R8XuRqKEDdmp3kU4cnncAhgL5WZagHdRXDciWwM6nQcqNXpfIikbs';

const animalGrid = document.querySelector('#animal-grid');
const rhymeBox = document.querySelector('#rhyme-box');

let animalType = '';
let howMany;

const animalTypeActions = {
  cat: {
    nameAPI: fetchUrlCatData,
  },
  dog: {
    nameAPI: fetchUrlDogData,
  },
};

const animalTypes = ['cat', 'dog'];

const validateAnimalType = (animalType) => {
  if (!animalTypes.includes(animalType)) {
    throw new Error('unidentified animalType');
  }
};

const fetchTextList = async (animalType) => {
  return fetch(animalTypeActions[animalType].nameAPI).then((resp) => resp.json());
};

const fetchCatImageUrl = async () => {
  return fetch(fetchUrlCat, {
    method: 'GET',
    headers: { 'x-api-key': fetchUrlCatApiKey },
  })
    .then((resp) => resp.json())
    .then((body) => body[0].url);
};

const fetchDogImageUrl = async () => {
  return fetch(fetchUrlDog)
    .then((resp) => resp.json())
    .then((body) => body.message);
};

const fetchImageUrlByAnimalType = async (animalType) => {
  switch (animalType) {
    case 'cat':
      return fetchCatImageUrl();
    case 'dog':
      return fetchDogImageUrl();
  }
};

const appendLoadedImages = (url, animalType) => {
  const img = document.createElement('img');
  img.src = url;
  img.alt = animalType;
  img.addEventListener('load', () => {
    animalGrid.innerHTML += img.outerHTML;
  });
};

const resetView = () => {
  animalGrid.innerHTML = '';
};

const addAnimals = async (animalType) => {
  // validations
  validateAnimalType(animalType);
  howMany = document.querySelector('#how-many').value;

  resetView();

  const imageUrlFetchers = []; // {}, [] always is const
  for (let i = 0; i < howMany; i++) {
    imageFetchers.push(fetchImageUrlByAnimalType(animalType));
  }

  const [imageUrls, textList] = await Promise.all([
    /* 0 */ Promise.all(imageUrlFetchers),
    /* 1 */ fetchTextList(animalType),
  ]);

  imageUrls.forEach((url) => {
    appendLoadedImages(url, animalType);
  });

  rhymeBox.textContent = textList
    .slice(0, howMany)
    .map((x) => x.word)
    .join(', ');

  // const imageUrls = await Promise.all(imageUrlFetchers);

  // imageUrls.forEach((url) => {
  //   appendLoadedImages(url, animalType);
  // });

  // const textList = await fetchTextList();
  // rhymeBox.textContent = textList
  //   .slice(0, howMany)
  //   .map((x) => x.word)
  //   .join(', ');
};

document.querySelector('#more-dogs').addEventListener('click', () => {
  addAnimals('dog');
});
document.querySelector('#more-cats').addEventListener('click', () => {
  addAnimals('cat');
});

// for-loop use priority
// 1. arr.forEach, arr.map, arr.filter
// 2. for (const x in arr)
// 3. for (...) {}
// 4. while (...) {}
