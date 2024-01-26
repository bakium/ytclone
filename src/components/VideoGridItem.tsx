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
        <article
            className="flex flex-col gap-2"
        >
            <img
                src={thumbnailUrl}
                className="block h-full w-full object-cover rounded-xl" />
            <section className="flex flex-gap-2
                min-h-[50px] border-2 border-black
            ">
            </section>
        </article>
    )
}

export { VideoGridItem }
