

function draw() {
    const canvas = document.querySelector('#canvas');

    if(canvas.getContext) {
        let ctx = canvas.getContext('2d');

        ctx.fillStyle = "rgb(200, 0, 0)"; // 그릴 객체의 속성을 지정
        ctx.fillRect(10, 10, 50, 50); // 해당 좌표에 지정된 크기의 객체를 그림 x, y, width, height -> (10,10) 좌표에 가로 50 세로 50 너비의 사각형을 그림

        ctx.fillStyle = "rgba(0, 0, 200, 0.5)";
        ctx.fillRect(30, 30, 50, 50);
        
    }
}

draw();