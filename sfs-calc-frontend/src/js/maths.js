function calculateBurnTime(fuel, thrust, isp, count) {
  const consumptionRate = thrust / isp;
  const burnTime = (fuel / consumptionRate)/count;
  return (Math.round(burnTime * 100) / 100).toFixed(2);;
}

export {calculateBurnTime};