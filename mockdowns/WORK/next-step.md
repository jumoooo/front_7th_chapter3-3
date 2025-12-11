# 다음에 수행할 Step

## 📋 Step 정보

**Phase**: Phase 1 (기초 작업)
**Step**: Step 1.1 (TypeScript 타입 정의)
**우선순위**: 최우선 (첫 번째 작업)
**예상 소요 시간**: 30-60분

---

## 🎯 작업 목표

TypeScript 타입 정의 및 기본 구조 생성

**핵심 원칙 준수:**
- ⭐⭐⭐ **안정성**: 새 파일만 생성, 기존 코드 변경 없음
- ⚡ **속도**: 타입 체크만 사용 (`tsc --noEmit`)
- 🎯 **정확성**: 타입 정의를 먼저 작성
- 🔧 **최소한의 작업**: 필요한 타입만 정의

---

## 📋 구체적인 작업 순서

### Step 1: User 타입 정의

1. **파일 생성**
   - `src/entities/user/model/types.ts` 생성

2. **타입 정의**
   - User 인터페이스 정의
   - Address 인터페이스 정의
   - Company 인터페이스 정의
   - `mockdowns/RULES/api-response-structure.md` 참고하여 정확한 구조 작성

3. **검증**
   ```bash
   # ✅ Agent가 직접 실행 가능 (pnpm 불필요)
   tsc --noEmit
   # 오류가 없어야 함
   ```
   
   **타입 체크 실패 시:**
   - 오류 메시지를 확인하고 해당 타입 정의 수정
   - 오류가 계속되면 `current-step.md`의 "문제점 및 해결 방법"에 기록
   - 참고 문서 (`mockdowns/RULES/api-response-structure.md`) 재확인

---

### Step 2: Post 타입 정의

1. **파일 생성**
   - `src/entities/post/model/types.ts` 생성

2. **타입 정의**
   - Post 인터페이스 정의
   - Reactions 인터페이스 정의
   - User 타입 import (의존성 확인)

3. **검증**
   ```bash
   # ✅ Agent가 직접 실행 가능 (pnpm 불필요)
   tsc --noEmit
   # 오류가 없어야 함
   ```

---

### Step 3: Comment 타입 정의

1. **파일 생성**
   - `src/entities/comment/model/types.ts` 생성

2. **타입 정의**
   - Comment 인터페이스 정의
   - User 타입 import (의존성 확인)

3. **검증**
   ```bash
   # ✅ Agent가 직접 실행 가능 (pnpm 불필요)
   tsc --noEmit
   # 오류가 없어야 함
   ```

---

### Step 4: API 응답 타입 정의

1. **각 엔티티별 Response 타입 추가**
   - `mockdowns/RULES/api-response-structure.md` 참고
   - UserResponse, PostsResponse, CommentsResponse 등

2. **검증**
   ```bash
   # ✅ Agent가 직접 실행 가능 (pnpm 불필요)
   tsc --noEmit
   # 오류가 없어야 함
   ```

---

### Step 5: DTO 타입 정의

1. **Create, Update DTO 타입 추가**
   - CreateUserDto, UpdateUserDto
   - CreatePostDto, UpdatePostDto
   - CreateCommentDto, UpdateCommentDto

2. **검증**
   ```bash
   # ✅ Agent가 직접 실행 가능 (pnpm 불필요)
   tsc --noEmit
   # 오류가 없어야 함
   ```

---

### Step 6: index.ts 생성

1. **각 엔티티별 index.ts 생성**
   - `mockdowns/RULES/index-export-rules.md` 참고
   - `src/entities/user/model/index.ts`
   - `src/entities/post/model/index.ts`
   - `src/entities/comment/model/index.ts`

2. **검증**
   ```bash
   # ✅ Agent가 직접 실행 가능 (pnpm 불필요)
   tsc --noEmit
   # 오류가 없어야 함
   ```

---

## 📚 필요한 참고 문서

### 필수 읽기 (작업 시작 전 반드시)

1. **`mockdowns/WORK/core-principles.md`** ⭐⭐⭐
   - 핵심 원칙: 안정성, 속도, 정확성, 최소한의 작업
   - **읽는 시간**: 2-3분

2. **`mockdowns/RULES/api-response-structure.md`**
   - API 응답 구조
   - 정확한 타입 정의를 위한 참고
   - **읽는 시간**: 1-2분

3. **`mockdowns/RULES/index-export-rules.md`**
   - index.ts export 규칙
   - **읽는 시간**: 1분

### 선택적 읽기 (필요 시 참고)

4. **`mockdowns/PLANS/typescript-types-migration-plan.md`**
   - 타입 정의 상세 계획
   - 타입 구조 및 예시
   - **읽는 시간**: 5-10분 (전체 읽기), 1-2분 (해당 섹션만)

5. **`mockdowns/PLANS/workflow.md`**
   - 전체 워크플로우 (Phase 1, Step 1.1)
   - **읽는 시간**: 3-5분 (해당 Step만)

6. **`mockdowns/RULES/refactoring-safety-guide.md`**
   - 기능 보존 가이드
   - **읽는 시간**: 3-5분

---

## ✅ 검증 방법

### 1. 타입 체크 (필수)

```bash
# ✅ Agent가 직접 실행 가능 (pnpm 불필요)
tsc --noEmit
```

- 오류가 없어야 함
- 오류 발생 시 해당 타입 정의 수정

### 2. Import 테스트 (선택적)

```typescript
// 테스트 파일 생성 (임시)
import { Post, User, Comment } from "./entities/post/model/types"
// 타입 오류가 없으면 성공
```

---

## 🚨 주의사항

### 절대 하지 말아야 할 것들

1. ❌ **기존 코드 변경** (안정성 위반)
2. ❌ **불필요한 빌드 실행** (속도 저하)
3. ❌ **any 타입 사용** (정확성 저하)
4. ❌ **한 번에 모든 타입 정의** (안정성 위반)

### 반드시 해야 할 것들

1. ✅ **작은 단위로 작업** (한 번에 하나의 타입만)
2. ✅ **타입 체크 수행** (각 파일 생성 후 즉시)
3. ✅ **의존성 확인** (User 타입이 먼저 정의되어야 함)
4. ✅ **참고 문서 확인** (정확한 구조 작성)

---

## 🔄 작업 완료 후

**반드시 다음을 수행하세요:**

1. **`current-step.md` 업데이트**
   - 완료된 작업 체크
   - 검증 결과 기록

2. **`next-step.md` 업데이트**
   - 다음 Step (1.2) 명시
   - 필요한 참고 문서 명시

3. **`phase-1.md` 업데이트**
   - Step 1.1 완료 상태 업데이트

4. **`progress.md` 업데이트**
   - 전체 진행률 업데이트

---

## 💡 작업 팁

### 빠른 작업을 위한 팁

1. **타입 체크만 사용**: `tsc --noEmit` (pnpm 불필요, 빠름)
2. **한 번에 하나씩**: 작은 단위로 작업하고 즉시 검증
3. **참고 문서 활용**: `RULES/api-response-structure.md`로 정확한 구조 확인

### 안전한 작업을 위한 팁

1. **기존 코드 보존**: 새 파일만 생성, 기존 코드 변경 없음
2. **검증 필수**: 각 파일 생성 후 타입 체크 수행
3. **의존성 확인**: User 타입이 먼저 정의되어야 함

### 정확한 작업을 위한 팁

1. **타입 먼저**: 타입 정의를 먼저 작성
2. **참고 문서**: `RULES/api-response-structure.md`로 정확한 구조 확인
3. **명확한 네이밍**: 변수명과 타입명은 의도를 명확히 표현

---

**이 Step을 완료하면 Step 1.2 (Entities API 기본 구조 생성)로 진행합니다! 🚀**

