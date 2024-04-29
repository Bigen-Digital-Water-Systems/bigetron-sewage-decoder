/*
  This function takes in a SigFox payload with additional parameters and decode the data accordingly
*/
function decode(scaledDistance, invertLevel, diameter, slope, roughnessCoefficient) {
  let waterLevel = invertLevel - scaledDistance;
  let r = diameter / 2;
  let h = waterLevel / 1000;
  let θ = 2 * Math.acos((r - h) / r);
  let A = (Math.pow(r, 2) * (θ - Math.sin(θ))) / 2;
  let P = r * θ;
  let Rh = A / P;
  let S = 1 / slope;
  let n = roughnessCoefficient;
  let Q = (1.0 / n) * A * Math.pow(Rh, 2 / 3) * Math.pow(S, 0.5) * 60 * 60;

  return Q;
}

module.exports = decode;
