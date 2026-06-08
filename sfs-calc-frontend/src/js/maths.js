function calculateBurnTime(fuel, thrust, isp, count) {
  const consumptionRate = thrust / isp;
  const burnTime = (fuel / consumptionRate)/count;
  return (Math.round(burnTime * 100) / 100).toFixed(2);
}

function calculateDeltaV(fuelMass, totalMass, isp){
    const deltaV = isp * 9.80665 * Math.log(totalMass/(totalMass-fuelMass))
    return (Math.round(deltaV * 100) / 100).toFixed(3);
}

export {calculateBurnTime, calculateDeltaV};