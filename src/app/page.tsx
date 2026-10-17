import LinkCard from "@/components/LinkCard";
import ProfileHeader from "@/components/ProfileHeader";

// TODO: 보여주기용 더미 값. 실제 내용으로 교체 예정
const profile = {
  name: "홍길동",
  bio: "웹 개발자 · 링크나무에 오신 걸 환영합니다",
  imageSrc: "/profile-placeholder.svg",
};

const links = [
  { title: "GitHub", url: "https://github.com/" },
  { title: "LinkedIn", url: "https://www.linkedin.com/" },
  { title: "Blog", url: "https://example.com/" },
];

export default function Home() {
  return (
    <div className="flex flex-1 justify-center bg-zinc-50 dark:bg-black">
      <main className="flex w-full max-w-md flex-col items-center gap-8 px-4 py-12 sm:py-16">
        <ProfileHeader {...profile} />
        <nav className="flex w-full flex-col gap-5">
          {links.map((link) => (
            <LinkCard key={link.title} {...link} />
          ))}
        </nav>
      </main>
    </div>
  );
}
