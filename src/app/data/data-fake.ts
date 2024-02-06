interface CardData {
  id: number,
  title: string,
  description: string,
  cover: string
}

function generateData(id: number): CardData {
  return {
    id,
    title: 'Lorem ipsum dolor sit amet',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in sodales nibh. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Maecenas vehicula lectus nec mollis gravida. Duis a bibendum velit. Curabitur dapibus, turpis et sodales lobortis, lectus libero pharetra purus, iaculis pretium est velit ac purus. Pellentesque tincidunt pulvinar augue non aliquet. Maecenas dapibus ac elit ut lobortis. ',
    cover: 'https://purr.objects-us-east-1.dream.io/i/cat3.jpg'
  }
}

const dataFake: CardData[] = [];
for (let i = 1; i <= 19; i++) {
  dataFake.push(generateData(i));
}

export {dataFake, CardData};
