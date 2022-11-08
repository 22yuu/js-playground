## 캔버스(Canvas) 기본 사용법

### <canvas> 요소

```HTML
<canvas id="tutorial" width="150" height="150"></canvas>
```

`<canvas>`는 src 및 alt 속성이 없다는 점만 제외하면 `<img>` 요소처럼 보입니다. 실제로 `<canvas>`요소에는 `width`와 `height` 두 속성만 있습니다. width와 height  속성을 지정하지 않으면 처음 너비는 `300px`이고 높이는 `150px`로 지정됩니다. 요소는 CSS에 의해 임의로 크기를 정할 수 있지만 렌더링하는 동안 이미지는 레이아웃 크기에 맞게 크기가 조정됩니다. CSS 크기 지정이 초기 캔버스의 비율을 고려하지 않으면 왜곡되어 나타납니다.


<aside style="display: flex; width: 100%; border-radius: 3px; padding: 16px 16px 16px 12px; border: 1px solid rgba(55, 53, 47, 0.16); color: rgb(55, 53, 47);">
    만약 렌더링이 왜곡된 것처럼 보이는 경우 CSS를 사용하지 않고 속성에서 width, height 속성을 명시적으로 지정하십시오.
</aside>

대체로 항상 `id` 속성을 사용해 주는 것이 좋습니다. `<canvas>`요소는 일반적인 이미지처럼 스타일을 적용시킬 수 있지만 실제 캔버스 위에 그리는 것에는 영향을 끼치지 않습니다. 캔버스에 스타일링이 따로 지정 되있지 않았다면, 캔버스 스타일은 `투명`으로 설정되어 있습니다.

### 대체 콘텐츠 (Accessible content)
`<canvas>` 요소는 `<img>`, `<video>`, `<audio>`, `<picture>` 요소들과는 달리 익스플로러 9이하의 버전이나 텍스트 기반 브라우저 등과 같은 캔버스를 지원하지 않는 오래된 브라우저들을 위한 대체 컨텐츠를 정의하기 쉽습니다. 그러한 브라우저들을 위한 대체 컨텐츠를 제공해야 합니다.

대체 컨텐츠를 제공하는 것은 매우 간단합니다. `<canvas>` 태그 안에서 대체 컨텐츠를 삽입합니다. `<canvas>`태그 를 지원하지 않는 브라우저는 컨테이너를 무시하고 컨테이너 내부의 대체 콘텐츠를 렌더링 합니다. `<canvas>`를 지원하는 브라우저는 컨테이너 내부의 내용을 무시하고 캔버스를 정상적으로 렌더링합니다.

예를 들어, 캔버스 내용에 대한 텍스트 설명을 제공하거나 동적으로 렌더링 된 내용의 정적 이미지를 제공 할 수 있습니다.

```javascript
<canvas id="stockGraph" width="150" height="150">
  current stock price: $3.15 +0.15
</canvas>

<canvas id="clock" width="150" height="150">
  <img src="images/clock.png" width="150" height="150" alt=""/>
</canvas>
```

### `</canvas>` 태그 필수
대체 컨텐츠가 제공되는 방식때문에, `<img>` 요소와 달리, `<canvas>` 요소는 닫는 태그(`</canvas>`)가 필요합니다. 닫는 태그가 없다면, 문서의 나머지 부분이 대체 컨텐츠로 간주되고 보이지 않을 것입니다.

대체 컨텐츠가 필요하지 않다면, 단순히 `<canvas id="foo" ...></canvas>`가 모든 미지원 브라우저에서 완전하게 호환됩니다.

### 렌더링 컨텍스트
`<canvas>` 엘리먼트는 고정 크기의 드로잉 영역을 생성하고 하나 이상의 **렌더링 컨텍스(rendering contexts)**를 노출하여, 출력할 컨텐츠를 생성하고 다루게 됩니다. 본 튜토리얼에서는, 2D 렌더링 컨텍스트를 집중적으로 다룹니다. 다른 컨텍스트는 다른 렌더링 타입을 제공합니다. 예를 들어, WebGL은 OpenGL ES 을 기반으로 하는 3D 컨텍스트를 사용합니다.

캔버스는 처음에 비어있습니다. 무언가를 표시하기 위해서, 어떤 스크립트가 랜더링 컨텍스트에 접근하여 그리도록 할 필요가 있습니다. `<canvas>` 요소는 getContext() 메서드를 이용해서, 랜더링 컨텍스트와 (렌더링 컨텍스트의) 그리기 함수들을 사용할 수 있습니다. getContext() 메서드는 렌더링 컨텍스트 타입을 지정하는 하나의 파라메터를 가집니다. 본 튜토리얼에서 다루고 있는 2D 그래픽의 경우, CanvasRenderingContext2D (en-US)을 얻기위해 "2d"로 지정합니다.


```javascript
var canvas = document.getElementById('tutorial');
var ctx = canvas.getContext('2d');
```

### 지원여부 검사
대체 콘텐츠는 `<canvas>`를 지원하지 않는 브라우저에 표시됩니다. 스크립트 역시 간단하게 getContext() 메소드의 존재 여부를 테스트함으로써 프로그래밍 방식으로 지원하는지를 확인할 수 있습니다.

```javascript
var canvas = document.getElementById('tutorial');

if (canvas.getContext){
  var ctx = canvas.getContext('2d');
  // drawing code here
} else {
  // canvas-unsupported code here
}

```



[참고 사이트]

[MDN: Canvas Tutorial - 1.Basic usage](https://developer.mozilla.org/ko/docs/Web/API/Canvas_API/Tutorial/Basic_usage)