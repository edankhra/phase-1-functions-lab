// Code your solution in this file!

function distanceFromHqInBlocks(location) {
    const hq = 42;
    if (location >= hq) {
      return location - hq;
    } else {
      return hq - location;
    }
  }


  function distanceFromHqInFeet(location) {
    const blockInFeet = 264; // 1 block = 264 feet
    const hq = 42;
    let distanceInBlocks = 0;
    
    if (location >= hq) {
      distanceInBlocks = location - hq;
    } else {
      distanceInBlocks = hq - location;
    }
    
    return distanceInBlocks * blockInFeet;
  }

  function distanceTravelledInFeet(startBlock, endBlock) {
    const blockInFeet = 264; // 1 block = 264 feet
    let distanceInBlocks = 0;
    
    // Calculate distance in blocks
    if (endBlock >= startBlock) {
      distanceInBlocks = endBlock - startBlock;
    } else {
      distanceInBlocks = startBlock - endBlock;
    }
    
    // Calculate distance in feet
    const distanceInFeet = distanceInBlocks * blockInFeet;
    
    // Return distance in feet
    return distanceInFeet;
  }


  function calculatesFarePrice(start, destination) {
    const feetInBlock = 264; // 1 block = 264 feet
    let distanceInFeet = 0;
    
    // Calculate distance in feet
    if (destination >= start) {
      distanceInFeet = (destination - start) * feetInBlock;
    } else {
      distanceInFeet = (start - destination) * feetInBlock;
    }
    
    // Calculate fare price based on distance in feet
    let farePrice = 0;
    if (distanceInFeet <= 400) {
      farePrice = 0;
    } else if (distanceInFeet > 400 && distanceInFeet <= 2000) {
      farePrice = (distanceInFeet - 400) * 0.02;
    } else if (distanceInFeet > 2000 && distanceInFeet <= 2500) {
      farePrice = 25;
    } else {
      farePrice = 'cannot travel that far';
    }
    
    // Return fare price
    return farePrice;
  }