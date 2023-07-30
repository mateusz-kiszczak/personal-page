const isElementOnTheScreen = (screenHeight, elementTop) => {
  // When element's top reach a specific point in the screen (1/2);
  const breakingPoint = screenHeight * 0.5;

  if (elementTop < breakingPoint) {
    return true;
  }

  return false;
};

export default isElementOnTheScreen;
