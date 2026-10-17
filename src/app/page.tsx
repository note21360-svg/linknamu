import LinkCard from "@/components/LinkCard";
import ProfileHeader from "@/components/ProfileHeader";

// TODO: 보여주기용 더미 값. 실제 내용으로 교체 예정
const profile = {
  name: "이형우",
  bio: "풀스택 개발자 | 요즘에는 AI 개발에 관심이 많아요",
  imageSrc: "https://placehold.co/128x128/orange/white",
};

const links = [
  { title: "GitHub", url: "https://github.com/" },
  { title: "LinkedIn", url: "https://www.linkedin.com/" },
  { title: "Blog", url: "https://example.com/" },
];

export default function Home() {
  return (
    <div className="relative isolate flex flex-1 justify-center overflow-hidden">
      {/* 글래스 카드 뒤로 은은하게 비치는 배경 빛 */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-24 -left-24 -z-10 h-80 w-80 rounded-full bg-(--blob-1) opacity-60 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute top-1/3 -right-28 -z-10 h-96 w-96 rounded-full bg-(--blob-2) opacity-70 blur-3xl"
      />
      <main className="flex w-full max-w-md flex-col items-center gap-12 px-7 py-16 sm:px-8 sm:py-24">
        <ProfileHeader {...profile} />
        <nav className="flex w-full flex-col gap-4 sm:gap-5">
          {links.map((link) => (
            <LinkCard key={link.title} {...link} />
          ))}
        </nav>
      </main>
    </div>
  );
}
