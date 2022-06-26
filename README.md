### 배포

Netlify 무료 호스팅 서비스에 배포하였습니다.

<a href="https://scintillating-elf-6ad26c.netlify.app/" target="_blank"> 배포 링크 (우클릭 새탭에서 열기) </a>

---

### 배포 사이트 Preview

## ![deploy](https://user-images.githubusercontent.com/82442974/175777550-4c350add-df02-48a9-9578-3015c219b5ed.gif)

---

### Localhost에서 Project 실행 방법

1. 다운로드 받거나 `git clone https://github.com/yunjaekim00/triple-assignment-yjk.git`
2. 받은 폴더 내에서 `npm install`
3. `npm start`
4. Browser에서 `http://localhost:3000`

---

### Test Code 실행 방법

`npm run test`로 실행

---

### 기술 stack과 사용 이유

1. `React 18.2.0`: Virtual DOM을 사용하고 이는 실제 DOM과 비교를 하여 변화가 필요한 곳에만 렌더링합니다. 즉, 실제 browser에서 DOM의 조작을 최소화해 줄 수 있습니다. 또한 코드의 component화를 통해 가독성 높고 재사용이 가능한 component로 구성시 협업에 용이합니다. Uni-directional 데이터 흐름으로 큰 프로젝트에서 디버깅도 용이합니다.
   - 개선방향: `Next.js`로 SSR(Server Side Rendering)을 통해 초기 페이지 로딩 시점을 개선.
2. `Javascript`: 최근 WASM으로 다양한 언어를 브라우저에서 동작시키려는 시도가 있지만 아직 초기단계이기 때문에, Javascript는 HTML, CSS와 함께 Web browser에서 동작하는 유일한 언어입니다. 각 브라우저 제조사는 ECMAScript 표준을 구현하는 엔진을 보유하고 있습니다.
   - 개선방향: 런타임이 아닌 컴파일 단계에서 오류를 검출할 수 있는 `Typescript`로 구현.
3. `ESLint`: 트리플에서 작성하는 JS/TS 작성 가이드에 맞는 규칙 적용.
   https://github.com/titicacadev/eslint-config-triple
4. `Netlify`: 서버나 DB서버가 아닌 정적 파일만 존재시 무료로 호스팅해주는 곳 중 Github와 연동이 되어 코드가 변경될 때마다 자동으로 재배포 해주는 Netlify를 선택하였습니다.
5. `Jest & RTL(React Testing Library)`: RTL은 React의 virtual DOM을 이용하는 테스트코드를 짤 수 있게 해주고 Jest와 함께 CRA(Create React App)에 포함되어있습니다. 또한 다른 component를 수정해도 기존 코드에 영향을 주는 지 여부에 대한 QA시간을 단축시킬 수 있습니다.
   - 개선방향: Jest뿐 아니라 Cypress 혹은 Selenium을 이용해 E2E(End-to-End) test도 해보는 방법.

---

### 전체적인 Folder Structure

```js
.
├── README.md
├── src
│   ├── assets
│   │   ├── images   // 모든 이미지 파일을 저장
│   │   ├── styles   // index.html에 reset css를 하지 않고
styled component의 GlobalStyles.js로 CSS reset, font-style 지정,
theme.js로 글자색, 배경색을 Context로 넘겨줍니다.
│   ├── data   // 반드시 서버에 넘겨주지 않아도
모든 text와 img경로를 한 곳에서 관리
│   ├── pages
│   │   ├── MainPage   // components라는 이름의 폴더로 구성하는 것이
보통이고 각 회사별 folder structure를 따르는 것이 우선이지만,
가독성을 높이기 위해 pages라는 폴더에 nested 구조로 component화 하였습니다.
│   │   │   ├── LogoSection   // 왼쪽 이미지 영역
│   │   │   ├── StatsSection   // 오른쪽 위쪽 영역
│   │   │   ├── AwardSection   // 오른쪽 아래쪽 영역
│   ├── utils
│   │   ├── css   // 여러 component에서 재사용 할 가능성이 있는 animation 알고리즘을 분리
```

---

### 추가적인 사항

`Bundler`: CRA(Create React App) 자체의 webpack bundler를 사용하고 Parcel, Rollup, Vite등은 따로 사용하지 않았습니다.
