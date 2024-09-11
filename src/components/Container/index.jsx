function Container({ children }) {
    return (
        <section className="w-full min-h-[90vh] flex flex-col items-center py-[30px] gap-4">
            { children }
        </section>
    )
}

export default Container;