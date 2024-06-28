document.addEventListener("DOMContentLoaded", () => {
  const canvas = document.getElementById("gameCanvas");
  const ctx = canvas.getContext("2d");
  const restartButton = document.getElementById("restartButton");
  const scoreDisplay = document.getElementById("score");
  const gridSize = 20;
  let snake = [{ x: 200, y: 200 }];
  let direction = { x: 0, y: 0 };
  let food = { x: 0, y: 0 };
  let score = 0;
  let gameInterval;

  function resetGame() {
    snake = [{ x: 200, y: 200 }];
    direction = { x: 0, y: 0 };
    score = 0;
    scoreDisplay.textContent = score;
    placeFood();
    clearInterval(gameInterval);
    gameInterval = setInterval(gameLoop, 100);
  }

  function placeFood() {
    food.x = Math.floor((Math.random() * canvas.width) / gridSize) * gridSize;
    food.y = Math.floor((Math.random() * canvas.height) / gridSize) * gridSize;
  }

  function drawSnake() {
    ctx.fillStyle = "lime";
    snake.forEach((segment) => {
      ctx.fillRect(segment.x, segment.y, gridSize, gridSize);
    });
  }

  function drawFood() {
    ctx.fillStyle = "red";
    ctx.fillRect(food.x, food.y, gridSize, gridSize);
  }

  function updateSnake() {
    const head = { x: snake[0].x + direction.x, y: snake[0].y + direction.y };
    snake.unshift(head);

    if (head.x === food.x && head.y === food.y) {
      score++;
      scoreDisplay.textContent = score;
      placeFood();
    } else {
      snake.pop();
    }

    if (
      head.x < 0 ||
      head.x >= canvas.width ||
      head.y < 0 ||
      head.y >= canvas.height ||
      snake
        .slice(1)
        .some((segment) => segment.x === head.x && segment.y === head.y)
    ) {
      gameOver();
    }
  }

  function gameOver() {
    clearInterval(gameInterval);
    restartButton.style.display = "block";
  }

  function gameLoop() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawFood();
    drawSnake();
    updateSnake();
  }

  document.addEventListener("keydown", (e) => {
    switch (e.key) {
      case "ArrowUp":
        if (direction.y === 0) direction = { x: 0, y: -gridSize };
        break;
      case "ArrowDown":
        if (direction.y === 0) direction = { x: 0, y: gridSize };
        break;
      case "ArrowLeft":
        if (direction.x === 0) direction = { x: -gridSize, y: 0 };
        break;
      case "ArrowRight":
        if (direction.x === 0) direction = { x: gridSize, y: 0 };
        break;
    }
  });

  restartButton.addEventListener("click", () => {
    restartButton.style.display = "none";
    resetGame();
  });

  resetGame();
});
