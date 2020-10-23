// создать объект ui

const data = {
  SO757575: {
    partNumber: `SO757575`,
    model: `Честер Bass`,
    type: `электрогитара`,
    comments: 15,
    stringsNumber: 7,
    price: `17 500`,
    image: `card-electro1`
  },
  TK129049: {
    partNumber: `TK129049`,
    model: `СURT Z300`,
    type: `электрогитара`,
    comments: 9,
    stringsNumber: 7,
    price: `29 500`,
    image: `card-electro2`
  },
  RO111111: {
    partNumber: `RO111111`,
    model: `Roman LX`,
    type: `укулеле`,
    comments: 21,
    stringsNumber: 4,
    price: `6 800`,
    image: `card-ukulele1`
  },
  TK436457: {
    partNumber: `TK436457`,
    model: `СURT T300`,
    type: `электрогитара`,
    comments: 15,
    stringsNumber: 6,
    price: `30 000`,
    image: `card-electro3`
  },
  DI192138: {
    partNumber: `DI192138`,
    model: `Dania Super`,
    type: `акустическая гитара`,
    comments: 5,
    stringsNumber: 7,
    price: `3 500`,
    image: `card-ukulele2`
  },
  SO934345: {
    partNumber: `SO934345`,
    model: `Честер WX`,
    type: `электрогитара`,
    comments: 17,
    stringsNumber: 6,
    price: `15 300`,
    image: `card-electro1`
  },
  DI082347: {
    partNumber: `DI082347`,
    model: `Dania VX`,
    type: `укулеле`,
    comments: 5,
    stringsNumber: 4,
    price: `2 200`,
    image: `card-ukulele1`
  },
  SO135646: {
    partNumber: `SO135646`,
    model: `Честер Plus`,
    type: `электрогитара`,
    comments: 27,
    stringsNumber: 4,
    price: `30 000`,
    image: `card-electro4`
  },
  VO154751: {
    partNumber: `VO154751`,
    model: `Виолана 300`,
    type: `акустическая гитара`,
    comments: 3,
    stringsNumber: 7,
    price: `1 700`,
    image: `card-ukulele2`
  },
  TK244556: {
    partNumber: `TK244556`,
    model: `СURT Clasic`,
    type: `электрогитара`,
    comments: 20,
    stringsNumber: 4,
    price: `23 000`,
    image: `card-electro2`
  },
  TK134663: {
    partNumber: `TK134663`,
    model: `СURT Z250`,
    type: `электрогитара`,
    comments: 19,
    stringsNumber: 4,
    price: `18 700`,
    image: `card-electro1`
  },
  SO123212: {
    partNumber: `SO123212`,
    model: `Честер 7X`,
    type: `электрогитара`,
    comments: 30,
    stringsNumber: 7,
    price: `35 000`,
    image: `card-electro3`
  },
  SO123234: {
    partNumber: `SO123234`,
    model: `Честер 6V`,
    type: `электрогитара`,
    comments: 28,
    stringsNumber: 6,
    price: `14 900`,
    image: `card-electro4`
  },
  VO519510: {
    partNumber: `VO519510`,
    model: `Виолана Mix`,
    type: `акустическая гитара`,
    comments: 7,
    stringsNumber: 6,
    price: `7 600`,
    image: `card-ukulele2`
  },
  VO457369: {
    partNumber: `VO457369`,
    model: `Виолана 250x`,
    type: `акустическая гитара`,
    comments: 19,
    stringsNumber: 6,
    price: `6 500`,
    image: `card-ukulele2`
  },
  FB625903: {
    partNumber: `FB625903`,
    model: `Фабио Лайт`,
    type: `акустическая гитара`,
    comments: 26,
    stringsNumber: 7,
    price: `12 000`,
    image: `card-ukulele2`
  },
  FB576948: {
    partNumber: `FB576948`,
    model: `Фабио L100`,
    type: `акустическая гитара`,
    comments: 31,
    stringsNumber: 7,
    price: `9 900`,
    image: `card-ukulele2`
  },
  LU012032: {
    partNumber: `LU012032`,
    model: `Liana Z200`,
    type: `акустическая гитара`,
    comments: 28,
    stringsNumber: 12,
    price: `8 900`,
    image: `card-ukulele2`
  },
  LU546853: {
    partNumber: `LU546853`,
    model: `Liana Z100`,
    type: `акустическая гитара`,
    comments: 34,
    stringsNumber: 12,
    price: `10 500`,
    image: `card-ukulele2`
  },
  LU458283: {
    partNumber: `LU458283`,
    model: `Liana Z300`,
    type: `акустическая гитара`,
    comments: 9,
    stringsNumber: 6,
    price: `13 300`,
    image: `card-ukulele2`
  },
  RO324341: {
    partNumber: `RO324341`,
    model: `Roman RX`,
    type: `укулеле`,
    comments: 37,
    stringsNumber: 4,
    price: `4 800`,
    image: `card-ukulele1`
  },
  RO214235: {
    partNumber: `RO214235`,
    model: `Roman TX`,
    type: `укулеле`,
    comments: 5,
    stringsNumber: 4,
    price: `1 900`,
    image: `card-ukulele1`
  },
  DI132414: {
    partNumber: `DI132414`,
    model: `Dania U100`,
    type: `укулеле`,
    comments: 23,
    stringsNumber: 4,
    price: `2 500`,
    image: `card-ukulele1`
  },
  DI934754: {
    partNumber: `DI934754`,
    model: `Dania WR`,
    type: `укулеле`,
    comments: 3,
    stringsNumber: 4,
    price: `3 800`,
    image: `card-ukulele1`
  },
  DI034292: {
    partNumber: `DI034292`,
    model: `Dania LE`,
    type: `укулеле`,
    comments: 10,
    stringsNumber: 4,
    price: `4 100`,
    image: `card-ukulele1`
  },
  MI193214: {
    partNumber: `MI193214`,
    model: `Mirana V10`,
    type: `укулеле`,
    comments: 14,
    stringsNumber: 4,
    price: `2 700`,
    image: `card-ukulele1`
  },
  VO043244: {
    partNumber: `VO043244`,
    model: `Виолана Mini`,
    type: `укулеле`,
    comments: 29,
    stringsNumber: 4,
    price: `6 700`,
    image: `card-ukulele1`
  }
};

const catalogList = document.querySelector(`.catalog__list`);
const cardTemplate = document.querySelector(`#card-template`).content.querySelector(`.card`);

const renderCard = (card) => {
  const cardElement = cardTemplate.cloneNode(true);
  cardElement.querySelector(`.card__title`).textContent = card.model;
  cardElement.querySelector(`.card__price`).textContent = `${card.price} ₽`;
  cardElement.querySelector(`.card__popularity`).textContent = card.comments;
  const cardImage = cardElement.querySelector(`img`);
  cardImage.src = `img/${card.image}@1x.png`;
  cardImage.srcset = `img/${card.image}@2x.png 2x`;
  cardImage.alt = card.model;
  const cardPopularityWrapper = cardElement.querySelector(`.card__popularity-wrapper`);
  if (card.image === `card-electro1`) {
    cardImage.width = `80`;
    cardImage.height = `202`;
    cardPopularityWrapper.style.marginTop = `-6px`;
  } else if (card.image === `card-electro4`) {
    cardImage.width = `84`;
  }
  cardElement.querySelector(`source`).srcset = `img/${card.image}@1x.webp 1x, img/${card.image}@2x.webp 2x`;

  return cardElement;
};

const fragment = document.createDocumentFragment();
for (const key in data) {
  if (key) {
    fragment.appendChild(renderCard(data[key]));
  }
}

catalogList.appendChild(fragment);
