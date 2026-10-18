// 페이지에 보여줄 링크 목록. id는 클릭 수 저장 키로 쓰이므로 바꾸면 기존 집계가 끊긴다.
// TODO: 보여주기용 더미 URL. 실제 주소로 교체 예정
export const links = [
  { id: "github", title: "GitHub", url: "https://github.com/" },
  { id: "linkedin", title: "LinkedIn", url: "https://www.linkedin.com/" },
  { id: "blog", title: "Blog", url: "https://example.com/" },
] as const;

export type LinkId = (typeof links)[number]["id"];

export function isLinkId(id: string): id is LinkId {
  return links.some((link) => link.id === id);
}
