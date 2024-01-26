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
            <div className="aspect-video">
                <img
                    src={thumbnailUrl}
                    className="block h-full w-full object-cover rounded-xl"
                />
            </div>
            <section className="flex gap-2 flex-shrink-0">
                <img src={channel.profileUrl}
                    alt={channel.name}
                    className="w-10 h-10 rounded-full"
                />
                <section className="flex flex-col gap-1">
                    <h3 className="font-bold">{title}</h3>
                    <span>{channel.name}</span>
                    <span className="text-secondary-text text-sm">
                        {`${views} Views • ${postedAt.toString().length - 60} day ago`}
                    </span>
                </section>
            </section>
        </article>
    )
}

export { VideoGridItem }
