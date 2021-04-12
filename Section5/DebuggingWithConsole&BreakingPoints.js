'use strict';

const measureKalvin = function() {
  const measurement = {
    type: 'temp',
    unit: 'celcious',
    
    // C) FIX 
    value: Number(prompt('Degrees Celcious')),
  };

  // B) FIND
  //console.log(measurement);
  console.table(measurement);

//   console.log(measurement.value);
//   console.warn(measurement.value);
//   console.error(measurement.value);

  const kelvin = measurement.value + 273;
  return kelvin;
};
// A) Identify
console.log(measureKalvin());

