const timeScale = 15;

function shiftLeft(ctx, px) {
  const { width, height } = ctx.canvas;
  const imageData = ctx.getImageData(px, 0, width - px, height);
  ctx.putImageData(imageData, 0, 0);
  ctx.clearRect(width - px, 0, px, height);
}

export function addPoint(canvas, prevPrice, price) {
  const ctx = canvas.getContext("2d");
  const { width, height } = canvas;

  const y = height / 2 - price.value;
  const prevY = height / 2 - prevPrice.value;

  let prevX = prevPrice.ticks * timeScale + 4;
  let x = price.ticks * timeScale;

  // scrollin
  if (x + 4 > width) {
    shiftLeft(ctx, 15);
    x = width - 15;
    prevX = x - 11;
  }

  if (prevPrice.value > price.value) {
    ctx.fillStyle = "red";
    ctx.strokeStyle = "red";
  } else if (prevPrice.value < price.value) {
    ctx.fillStyle = "green";
    ctx.strokeStyle = "green";
  } else {
    ctx.fillStyle = "black";
    ctx.strokeStyle = "black";
  }

  ctx.beginPath();
  ctx.moveTo(prevX, prevY);
  ctx.lineTo(x, y);
  ctx.stroke();

  ctx.beginPath();
  ctx.arc(x, y, 4, 0, Math.PI * 2);
  ctx.fill();
}
