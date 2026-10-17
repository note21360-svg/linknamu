import Image from "next/image";

type ProfileHeaderProps = {
  name: string;
  bio: string;
  imageSrc: string;
};

export default function ProfileHeader({ name, bio, imageSrc }: ProfileHeaderProps) {
  return (
    <header className="flex flex-col items-center gap-3 text-center">
      <Image
        src={imageSrc}
        alt={`${name} 프로필 사진`}
        width={128}
        height={128}
        className="h-32 w-32 rounded-full object-cover ring-2 ring-zinc-200 dark:ring-zinc-700"
        unoptimized
        priority
      />
      <h1 className="text-xl font-semibold">{name}</h1>
      <p className="text-sm text-zinc-600 dark:text-zinc-400">{bio}</p>
    </header>
  );
}
