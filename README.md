# NestJS_TypeORM

inflearn의 "따라하며 배우는 NestJS" 강의를 수강한 결과물입니다.

## 사용한 기술스택

Nest.js, TypeORM, JWT, Passport, PostgreQL

## 게시판

### 전체 게시판

URI: `/boards`  
Method: `GET`

### 게시글 생성

URI: `/boards`  
Method: `POST`

- Request

  ```json
  {
    "title": "제목",
    "description": "내용"
  }
  ```

- Response

  ```json
  {
    "id": "게시글 ID",
    "title": "제목",
    "description": "내용",
    "status": BoardStatus, // PUBLIC, PRIVATE
    "user": User // id, username, password
  }
  ```

### 게시글 업데이트

URI: `/boards/:id/status`  
Method: `PATCH`

- Request

  ```json
  {
    "status": "PUBLIC" || "PRIVATE",
  }
  ```

- Response

  ```json
  {
    "id": "게시글 ID",
    "title": "제목",
    "description": "내용",
    "status": BoardStatus, // PUBLIC, PRIVATE
    "user": User // id, username, password
  }
  ```

### 게시글 삭제

URI: `/boards/:id`  
Method: `Delete`

- Response: `status 200`

## 인증

### 회원가입

URI: `/boards/:id/status`  
Method: `PATCH`

- Request

  ```json
  {
    "username": "유저명",
    "password": "비밀번호"
  }
  ```

- Response: `status 200`

### 로그인

URI: `/auth/signup`  
Method: `POST`

- Request

  ```json
  {
    "username": "유저명",
    "password": "비밀번호"
  }
  ```

- Response: `access token: string`
