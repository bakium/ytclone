const PageHeader = () => {
    return (
        <header className="flex space-between gap-10 lg:gap-20
          [&>*]:border-2 [&>*]:border-sky-500
        ">
            <section>Left section</section>
            <section>Middle section</section>
            <section>Right section</section>
        </header>
    )
}

export { PageHeader }
