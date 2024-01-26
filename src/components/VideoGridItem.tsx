type VideoGridItemProps = {
    children: string
}

const VideoGridItem = ({ children }: VideoGridItemProps) => {
    return (
        <article
            className="bg-secondary-hover flex justify-center items-center min-h-[200px]"
        >{children}
        </article>
    )
}

export { VideoGridItem }
