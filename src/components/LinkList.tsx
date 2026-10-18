"use client";

import { useEffect, useState } from "react";
import LinkCard from "@/components/LinkCard";

type Link = { id: string; title: string; url: string };

export default function LinkList({ links }: { links: readonly Link[] }) {
  // 데이터를 받기 전에는 모두 0회로 표시
  const [counts, setCounts] = useState<Record<string, number>>({});

  // 페이지가 열릴 때 모든 링크의 클릭 수를 한 번에 가져옴
  useEffect(() => {
    fetch("/api/clicks")
      .then((res) => (res.ok ? res.json() : Promise.reject(res.status)))
      .then((data: Record<string, number>) => setCounts(data))
      .catch((err) => console.warn("클릭 수를 불러오지 못했습니다:", err));
  }, []);

  function handleClick(id: string) {
    // 즉시 +1 표시 후 서버 값으로 맞춤 (새 탭이 열려도 요청이 끊기지 않도록 keepalive)
    setCounts((prev) => ({ ...prev, [id]: (prev[id] ?? 0) + 1 }));
    fetch(`/api/clicks/${id}`, { method: "POST", keepalive: true })
      .then((res) => (res.ok ? res.json() : Promise.reject(res.status)))
      .then((data: { clicks: number }) => setCounts((prev) => ({ ...prev, [id]: data.clicks })))
      .catch((err) => console.warn("클릭 수 저장 실패:", err));
  }

  return (
    <nav className="flex w-full flex-col gap-4 sm:gap-5">
      {links.map((link) => (
        <LinkCard
          key={link.id}
          title={link.title}
          url={link.url}
          clicks={counts[link.id] ?? 0}
          onClick={() => handleClick(link.id)}
        />
      ))}
    </nav>
  );
}
