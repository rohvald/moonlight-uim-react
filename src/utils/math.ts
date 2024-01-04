export function interpolate(values: number[], value: number) {
  const count = values.length - 1
  const low = Math.max(Math.floor(count * value), 0) | 0
  const high = Math.min(Math.ceil(count * value), count) | 0
  return lerp(values[low], values[high], rescale(value, [low / count, high / count], [0, 1]))
}

export function deinterpolate(values: number[], value: number): number {
  const ascendingValues = values.sort((a, b) => a-b)
    
  const count = ascendingValues.length - 1;
  const high = ascendingValues.findIndex(n => n > value);
  if (high < 0) return 1;
  if (high === 0) return 0;
  const low = high - 1;
  return lerp(low/count, high/count, rescale(value, [ascendingValues[low], ascendingValues[high]], [0, 1]));
}

export function lerp(start: number, end: number, value: number) {
  return (1 - value) * start + value * end
}

export function rescale(value: number, srcRange: [number, number], dstRange: [number, number]) {
  const [dstMin, dstMax] = dstRange;
  const [srcMin, srcMax] = srcRange;

  if (srcMin == srcMax) {
    return dstMin
  }

  const scale = (value - srcMin) / (srcMax - srcMin);
  return scale * (dstMax - dstMin) + dstMin;
}

export function round(n: number, precision: number) {
  const factor = 10 ** precision
  return Math.round(n * factor) / factor
}