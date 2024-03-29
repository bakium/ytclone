import { useEffect, useRef, useState } from "react";
import { formatDuration } from "../utils/formatDuration";
import { formatTimeAgo } from "../utils/formatTimeAgo";

type VideoGridItemProps = {
    id: string;
    title: string;
    channel: {
        name: string;
        id: string;
        profileUrl: string;
    };
    views: number;
    postedAt: Date;
    duration: number;
    thumbnailUrl: string;
    videoUrl: string;
}

const VIEW_FORMATTER = Intl.NumberFormat('en-US', { notation: "compact" })
// en-US is needed to get 1K
// withou it we get 1 K
// because of the browser locales

const VideoGridItem = ({
    title,
    id,
    channel,
    views,
    postedAt,
    duration,
    thumbnailUrl,
    videoUrl,
}: VideoGridItemProps) => {
    const [isVideoPlaying, setIsVideoPlaying] = useState(false)
    const videoRef = useRef<HTMLVideoElement>(null)

    useEffect(() => {
        if (videoRef.current == null) return

        if (isVideoPlaying) {
            videoRef.current.currentTime = 0
            videoRef.current.play()
        } else {
            videoRef.current.pause()
        }
    }, [isVideoPlaying])

    return (
        <article className="flex flex-col gap-2 mb-4" >
            <a href={`/watch?v=${id}`} className="aspect-video relative"
                onMouseEnter={() => setIsVideoPlaying(true)}
                onMouseLeave={() => setIsVideoPlaying(false)}
            >
                <img
                    src={thumbnailUrl}
                    className={`block h-full w-full object-cover transition-[border-radius] duration-200
                    ${isVideoPlaying ? "border-none" : "rounded-xl"}`}
                />
                <span className="absolute bottom-1 right-1 bg-secondary-dark text-secondary text-sm px-1 rounded-md">
                    {formatDuration(duration)}
                </span>
                <video src={videoUrl}
                    className={`block absolute h-full object-cover inset-0 transition-opacity duration-200
                        ${isVideoPlaying ? "opacity-100 delay-200" : "opacity-0"}
                    `}
                    muted playsInline
                    ref={videoRef}
                />
            </a>
            <section className="flex gap-2 flex-shrink-0">
                <a href={`@${channel.id}`} className="flex-shrink-0">

                    <img src={channel.profileUrl}
                        alt={channel.name}
                        className="w-10 h-10 rounded-full"
                    />
                </a>
                <section className="flex flex-col gap-1">
                    <a href={`/watch?v=${id}`}>
                        <h3 className="font-bold">{title}</h3>
                    </a>
                    <a
                        href={`/@${channel.id}`}
                        className="text-secondary-text text-sm"
                    >
                        {channel.name}
                    </a>
                    <span
                        className="text-secondary-text text-sm">
                        {`${VIEW_FORMATTER.format(views)} Views • ${formatTimeAgo(postedAt)}`}
                    </span>
                </section>
            </section>
        </article >
    )
}

export { VideoGridItem }
