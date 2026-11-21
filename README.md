# 🌿 프로젝트 : 제리에의 정원 (garden-of-serie)🌿

재사용 가능한 아이소메트릭 픽셀 아트 기반 인터랙티브 월드 엔진

## 📖 Project Overview

제리에의 정원(garden-of-serie)는 다양한 웹 서비스에 적용할 수 있는 2D 아이소메트릭 픽셀 아트 기반의 인터랙티브 게임 엔진 개발 프로젝트입니다.

Phaser와 TypeScript를 활용하여 캐릭터 이동, 가구 배치, 오브젝트 상호작용, 맵 전환, 날씨 변경 등의 공통 기능을 모듈화하고, 웹 서비스의 특성에 따라 확장할 수 있는 재사용 가능한 라이브러리 구축을 목표로 합니다.

첫 번째 적용 프로젝트인 **Music Garden**에서는 음원 스트리밍 서비스와 게임 요소를 결합하여, 사용자가 자신만의 음악방과 정원을 꾸미고 음악을 감상할 수 있는 인터랙티브 마이페이지를 구현하고자 합니다.

## 🎯 Project Goals

- Reusability: 다양한 웹 서비스에서 활용할 수 있는 독립적인 게임 엔진 설계
- Modularity: 캐릭터, 가구, 맵, 상호작용 등의 기능을 모듈 단위로 분리
- Customization: 사용자별 공간 꾸미기 및 환경 설정 지원
- Extensibility: 외부 웹 서비스 및 API와 연동할 수 있는 확장 가능한 구조 설계

## ✨ Key Features

| 기능 | 설명 |
|---|---|
| Character System | 캐릭터 이동, 방향별 애니메이션 및 충돌 처리 |
| Furniture System | 가구 배치, 이동, 회전 및 배치 정보 저장 |
| Interaction System | 오브젝트 클릭 및 사용자 상호작용 |
| Map System | 아이소메트릭 맵 구성 및 공간 전환 |
| Weather System | 비, 눈, 낮과 밤 등 환경 효과 |
| Customization | 사용자별 캐릭터 및 공간 꾸미기 |
| Service Integration | 외부 웹 서비스의 기능과 이벤트 연동 |

## 🛠 Tech Stack

| Category | Technologies |
|---|---|
| Language | TypeScript |
| Frontend | React, Vite |
| Game Engine | Phaser |
| State Management | Zustand |
| Backend | NestJS |
| Database | PostgreSQL |
| ORM | Prisma |
| Map Editor | Tiled |
| Pixel Art | LibreSprite |
| DevOps | Docker, GitHub Actions |

## 🏗 Project Structure

본 프로젝트는 Monorepo 아키텍처를 기반으로 공통 게임 엔진과 실제 웹 서비스를 분리하여 개발합니다.

### 01. Pixel World Engine

Phaser와 TypeScript 기반의 공통 게임 시스템으로, 특정 웹 서비스에 종속되지 않는 독립적인 라이브러리를 목표로 합니다.

### 02. Music Garden

React 기반 음원 스트리밍 웹 서비스로, Pixel World Engine을 활용하여 음악방과 야외 정원을 구현하는 첫 번째 적용 프로젝트입니다.

## 🚀 Development Roadmap

| 단계 | 개발 내용 | 기술 스택 | 결과물 |
|---|---|---|---|
| 01 | 픽셀 아트 및 맵 제작 | LibreSprite, Tiled, Figma | 정원 맵 및 기본 에셋 |
| 02 | 공통 게임 엔진 개발 | TypeScript, Phaser | 독립형 Pixel World Engine |
| 03 | 가구 배치 시스템 | Phaser, TypeScript, Zod | 가구 편집 시스템 |
| 04 | 환경 및 상호작용 | Phaser, Web Audio API | 인터랙티브 힐링 정원 |
| 05 | React SDK 개발 및 Music Garden 연동 | React, Vite, Zustand, Web Audio API | React SDK 및 Music Garden 프론트엔드 |
| 06 | 백엔드 및 데이터 저장 | NestJS, Prisma, PostgreSQL, Docker | 데이터 저장 및 조회 시스템 |
| 07 | 재사용성 검증 및 배포 | pnpm Workspaces, Vitest, GitHub Actions | 재사용 가능한 SDK 및 적용 사례 |

### 🎯 Development Goals

- Pixel World Engine: 캐릭터 이동, 가구 배치, 상호작용, 맵 전환 등을 제공하는 독립적인 게임 엔진
- Music Garden: Pixel World Engine을 활용한 인터랙티브 음원 스트리밍 웹사이트
- Reusability: 다양한 웹 서비스에 적용할 수 있는 공통 라이브러리 개발

## 🚀 Future Plans

- 아이소메트릭 픽셀 아트 월드 구현
- 캐릭터 이동 및 오브젝트 상호작용 시스템 개발
- 가구 배치 및 사용자별 공간 저장 기능 구현
- Music Garden 음원 스트리밍 서비스 연동
- 재사용 가능한 라이브러리 패키징
- 포트폴리오 및 커뮤니티 등 다른 웹 서비스로 적용 범위 확장.
