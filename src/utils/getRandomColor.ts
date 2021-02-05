const colors = ['#FF7077', '#FA26A0', '#F8D210', '#2FF3E0'];

const getRandomColors = () => {
  const min = Math.ceil(0);
  const max = Math.floor(3);
  const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;

  return colors[randomNumber];
}


export default getRandomColors;