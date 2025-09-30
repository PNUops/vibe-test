# Vibe Test Monorepo

프론트엔드(React)와 백엔드(Spring Boot)로 구성된 모노레포 프로젝트입니다.

## 프로젝트 구조

```
vibe-test/
├── frontend/          # React TypeScript 애플리케이션
├── backend/           # Spring Boot 애플리케이션
├── package.json       # 모노레포 설정
└── README.md
```

## 기술 스택

### Frontend
- React 18
- TypeScript
- Create React App

### Backend
- Spring Boot 3.1.0
- Java 17
- Gradle

## 설치 및 실행

### 전체 설치
```bash
npm run install:all
```

### 개발 서버 실행 (프론트엔드 + 백엔드 동시 실행)
```bash
npm run dev
```

### 개별 실행

#### 백엔드만 실행
```bash
npm run start:backend
# 또는
cd backend && ./gradlew bootRun
```

#### 프론트엔드만 실행
```bash
npm run start:frontend
# 또는
cd frontend && npm start
```

## API 엔드포인트

- `GET /api/hello` - Hello 메시지 반환
- `GET /api/status` - 서버 상태 정보 반환
- `POST /api/echo` - 요청 데이터를 그대로 반환

## 포트 정보

- 프론트엔드: http://localhost:3000
- 백엔드: http://localhost:8080

## 빌드

### 프론트엔드 빌드
```bash
npm run build:frontend
```

### 백엔드 빌드
```bash
npm run build:backend
# 또는
cd backend && ./gradlew build
```

## 테스트

### 프론트엔드 테스트
```bash
npm run test:frontend
```

### 백엔드 테스트
```bash
npm run test:backend
# 또는
cd backend && ./gradlew test
```