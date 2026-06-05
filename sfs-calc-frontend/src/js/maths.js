function calculateBurnTime(fuel, thrust, isp, count) {
  const consumptionRate = thrust / isp;
  const burnTime = fuel / consumptionRate;
  return burnTime / count;
}

export {calculateBurnTime};