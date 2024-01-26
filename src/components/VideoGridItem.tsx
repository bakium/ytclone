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
    console.log(title, id, channel, views, postedAt, duration, thumbnailUrl, videoUrl)
    return (
        <article className="flex flex-col gap-2 mb-4">
            <a href={`/watch?v=${id}`} className="aspect-video">
                <img
                    src={thumbnailUrl}
                    className="block h-full w-full object-cover rounded-xl"
                />
            </a>
            <section className="flex gap-2 flex-shrink-0">
                <a href={`@${channel.id}`}>
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
                        {channel.name}</a>
                    <span
                        className="text-secondary-text text-sm">
                        {`${views} Views • ${postedAt.toString().length - 60} day ago`}
                    </span>
                </section>
            </section>
        </article>
    )
}

export { VideoGridItem }
