type LinkCardProps = {
  title: string;
  url: string;
  clicks: number;
  onClick?: () => void;
};

export default function LinkCard({ title, url, clicks, onClick }: LinkCardProps) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      onClick={onClick}
      className="relative block w-full rounded-2xl border border-white/70 bg-white/45 px-16 py-[18px] text-center text-[15px] font-semibold tracking-tight shadow-[0_6px_24px_-12px_rgba(150,80,40,0.25)] backdrop-blur-xl transition duration-300 ease-out hover:-translate-y-px hover:bg-white/65 hover:shadow-[0_10px_28px_-12px_rgba(150,80,40,0.35)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#e08a5a] dark:border-white/10 dark:bg-white/5 dark:hover:bg-white/10"
    >
      {title}
      {/* 제목은 가운데에 두고 클릭 수만 오른쪽에 작게 */}
      <span
        aria-label={`클릭 수 ${clicks}회`}
        className="absolute top-1/2 right-6 -translate-y-1/2 text-xs font-medium tabular-nums text-muted"
      >
        {clicks}회
      </span>
    </a>
  );
}
