export const useGreet = () => {
  const currentHour = new Date().getHours();
  let greet = '';

  if (currentHour >= 5 && currentHour < 12) {
    greet = 'Good Morning';
  } else if (currentHour >= 12 && currentHour < 17) {
    greet = 'Good Afternoon';
  } else if (currentHour >= 17 && currentHour < 20) {
    greet = 'Good Evening';
  } else {
    greet = 'Good Night';
  }

  return greet;
};
