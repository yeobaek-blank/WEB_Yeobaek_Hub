# YeobaekHub

YeobaekHub는 개발자 커뮤니티를 위한 인터랙티브 웹 포털입니다. React와 TypeScript, Vite를 기반으로 만들어졌으며, AI 챗봇, 프로젝트 소개, 연구실 안내 등 다양한 기능을 제공합니다. 이 문서는 프로젝트를 처음 실행하는 사용자를 위한 사용 설명서입니다.

## 실행 방법

1. Node.js 설치  
이 프로젝트는 Node.js가 필요합니다. [https://nodejs.org](https://nodejs.org)에서 최신 LTS 버전을 설치해주세요.
설치 후 아래 명령어로 버전을 확인하세요:

  
node -v
npm -v

3. 프로젝트 클론  
아래 명령어로 코드를 다운로드하고 폴더로 이동합니다:
  

git clone https://github.com/yeobaek-blank/WEB_Yeobaek_Hub.git
cd WEB_Yeobaek_Hub


5. 패키지 설치  
필요한 라이브러리를 설치합니다:
  

npm install


7. 개발 서버 실행  
로컬에서 프로젝트를 실행합니다:

  
npm run dev

성공적으로 실행되면 브라우저에서 `http://localhost:5173` 주소로 접속해 확인할 수 있습니다.

## 주요 명령어 요약

- `npm install`: 패키지 설치  
- `npm run dev`: 개발 서버 실행  
- `npm run build`: 배포용 빌드 생성  
- `npm run preview`: 빌드 결과물 미리보기  

+) 폴더 구조
WEB_Yeobaek_Hub/
├── public/ # 정적 파일
├── src/
│ ├── YeobaekHub.tsx # 메인 컴포넌트
│ ├── App.tsx # 앱 진입점
│ ├── main.tsx # React DOM 렌더링
│ └── ...
├── package.json # 의존성 및 스크립트 정의
├── tsconfig.json # TypeScript 설정
└── vite.config.ts # Vite 설정


++) **자주 묻는 질문 (FAQ)**

Q. `npm run dev` 실행했는데 브라우저에서 열리지 않아요  
A. `node_modules` 폴더가 잘못 설치되었을 수 있습니다. 아래 명령어를 입력해 재설치하세요:  
rm -rf node_modules
npm install


