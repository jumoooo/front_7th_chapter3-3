/**
 * API 설정 유틸리티
 *
 * 개발 환경에서는 Vite 프록시를 통해 /api 경로 사용
 * 프로덕션 환경에서는 직접 https://dummyjson.com 사용
 */

/**
 * API base URL 반환
 * 개발 환경: /api (Vite 프록시 사용)
 * 프로덕션 환경: https://dummyjson.com (직접 API 호출)
 */
export function getApiBaseUrl(): string {
  // 프로덕션 환경에서는 직접 API 서버 사용
  if (import.meta.env.PROD) {
    return "https://dummyjson.com"
  }

  // 개발 환경에서는 Vite 프록시 사용
  return "/api"
}

/**
 * API URL 생성 헬퍼 함수
 * @param path - API 경로 (예: "/posts", "/users/1")
 * @returns 완전한 API URL
 */
export function getApiUrl(path: string): string {
  const baseUrl = getApiBaseUrl()
  // path가 이미 /로 시작하는지 확인
  const cleanPath = path.startsWith("/") ? path : `/${path}`
  return `${baseUrl}${cleanPath}`
}
