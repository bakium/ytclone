import { Button } from "./components/Button"
import { PageHeader } from "./layouts/PageHeader"

function App() {
  return (
    <div className="max-h-screen flex flex-col">
      <PageHeader />
      <div className="grid grid-cols-[auto,1fr] flex-grow-1 overflow-auto">
        <aside>Side</aside>
        <section className="overflow-x-hidden px-2 lg:px-4 pb-4">
          <div className="sticky top-0 bg-white z-10 px-5 pb-4">
            <ul className="flex gap-2">
              <li>
                <Button>All</Button>
              </li>
              <li>
                <Button>JavaScript</Button>
              </li>
            </ul>
          </div>
          <main className="min-h-[300px] min-w-[300px] bg-secondary
            grid gap-2 grid-cols-[repeat(auto-fill,minmax(300px,1fr))]
          ">
            {[...Array(5).keys()].map((_, i) =>
              <p
                className="bg-secondary-hover flex justify-center items-center min-h-[200px]"
                key={i + 1}>{`Video ${i + 1}`}
              </p>
            )}
          </main>
        </section>
      </div>
    </div >
  )
}

export default App
