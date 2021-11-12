const rocketsUrl = 'https://api.spacexdata.com/v3/rockets';

const fetchApiRockets = async () => {
  const response = await fetch(rocketsUrl, {
    method: 'GET',
  });
  const result = await response.json();
  // console.log(result);
  return result;
};

export default fetchApiRockets;
