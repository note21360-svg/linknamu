import Image from "next/image";

type ProfileHeaderProps = {
  name: string;
  bio: string;
  imageSrc: string;
};

export default function ProfileHeader({ name, bio, imageSrc }: ProfileHeaderProps) {
  return (
    <header className="flex flex-col items-center text-center">
      <Image
        src={imageSrc}
        alt={`${name} 프로필 사진`}
        width={128}
        height={128}
        className="h-28 w-28 rounded-full object-cover ring-4 ring-white/80 shadow-[0_14px_30px_-10px_rgba(150,80,40,0.45),0_2px_6px_rgba(150,80,40,0.12)] sm:h-32 sm:w-32 dark:ring-white/10"
        unoptimized
        priority
      />
      <h1 className="mt-5 text-2xl font-bold tracking-tight">{name}</h1>
      <p className="mt-2 max-w-xs text-[15px] leading-relaxed text-muted">{bio}</p>
    </header>
  );
}
