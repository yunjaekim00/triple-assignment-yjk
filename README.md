### 배포

<a href='https://cozy-gaufre-0b8f08.netlify.app/' target='_blank'>Netlify 배포 링크</a>

### Project 실행 방법

1. `npm install`
2. `npm start`
3. `http://localhost:3000`

### 기술 stack과 사용 이유

1. `React`: Behind the scenes에서 `Virtual DOM`을 사용하고 이는 기존의 DOM과 비교를 하여 변화가 필요한 곳에만 렌더링합니다. 즉, 실제 browser에서 DOM의 조작을 최소화해 줄 수 있습니다. 또한 component로 가독성 높고 재사용이 가능한 component로 협업에 용이. Uni-directional 데이터 흐름으로 큰 프로젝트에서 디버깅이 용이.
   - 개선방향: Next.js로 SSR(Server Side Rendering)을 통해 초기 페이지 로딩 시점을 개선할 수 있다.
2. `Javascript`: HTML, CSS와 함께 Web browser에서 동작하는 유일한 언어. 각 브라우저 제조사는 ECMAScript 표준을 구현하는 엔진을 보유.
   - 개선방향: 컴파일 단계에서 오류를 검출할 수 있는 Typescript로 구현.
3. `ESLint`: 트리플에서 작성하는 JS/TS 작성 가이드에 맞는 규칙 적용.
   https://github.com/titicacadev/eslint-config-triple
4. `Prettier`: `.js`, `.ts`, `.tsx`을 제외한 나머지 파일에 적용.

### 전체적인 Folder Structure

```js
.
├── README.md
├── src
│   ├── assets
│   │   ├── images   // 모든 이미지 파일을 저장

```
