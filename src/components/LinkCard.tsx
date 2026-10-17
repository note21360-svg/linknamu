type LinkCardProps = {
  title: string;
  url: string;
};

export default function LinkCard({ title, url }: LinkCardProps) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="block w-full rounded-2xl border border-white/70 bg-white/45 px-6 py-[18px] text-center text-[15px] font-semibold tracking-tight shadow-[0_6px_24px_-12px_rgba(150,80,40,0.25)] backdrop-blur-xl transition duration-300 ease-out hover:-translate-y-px hover:bg-white/65 hover:shadow-[0_10px_28px_-12px_rgba(150,80,40,0.35)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#e08a5a] dark:border-white/10 dark:bg-white/5 dark:hover:bg-white/10"
    >
      {title}
    </a>
  );
}
