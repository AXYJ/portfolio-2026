"use client";

import Image from "next/image";
import { useState } from "react";
import { Play } from "lucide-react";
import type { JSX } from "react/jsx-runtime";
import type { Video } from "@/lib/project-detail";

// Poster only until clicked: the YouTube iframe (and its trackers) loads on demand.
export default function YouTubeVideo({
  video,
}: {
  video: Video;
}): JSX.Element {
  const [playing, setPlaying] = useState(false);

  if (playing) {
    return (
      <iframe
        src={`https://www.youtube-nocookie.com/embed/${video.youtubeId}?autoplay=1`}
        title={video.title}
        allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
        allowFullScreen
        className="aspect-video w-full"
      />
    );
  }

  return (
    <button
      type="button"
      onClick={() => setPlaying(true)}
      aria-label={`Lire la vidéo : ${video.title}`}
      className="group relative block aspect-video w-full cursor-pointer"
    >
      <Image
        src={video.poster.src}
        alt={video.poster.alt}
        fill
        sizes="(min-width: 1024px) 50vw, 100vw"
        className="object-cover"
      />
      <span
        aria-hidden
        className="absolute inset-0 m-auto flex size-20 items-center justify-center rounded-full bg-black/70 text-white transition-transform group-hover:scale-110"
      >
        <Play className="size-8 fill-current" />
      </span>
    </button>
  );
}
