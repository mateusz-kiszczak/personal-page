const isElementOnTheScreen = (screenHeight, elementTop, ratio = 0.5) => {
  // When element's top reach a specific point in the screen (1/2);
  const breakingPoint = screenHeight * ratio;

  if (elementTop < breakingPoint) {
    return true;
  }

  return false;
};

export default isElementOnTheScreen;
