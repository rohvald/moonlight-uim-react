export function getClientXY (e: TouchEvent | MouseEvent) {
  if ("changedTouches" in e) {
    const touch = e.changedTouches[e.changedTouches.length - 1]
    return [touch.clientX, touch.clientY]
  } else {
    return [e.clientX, e.clientY]
  }
}