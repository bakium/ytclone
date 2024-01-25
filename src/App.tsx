import { Button } from "./components/Button"
import { PageHeader } from "./layouts/PageHeader"

function App() {
  return (
    <div className="max-h-screen flex flex-col">
      <PageHeader />
      <div className="grid grid-cols-[auto,1fr] flex-grow-1 overflow-auto">
        <aside>Side</aside>
        <section className="overflow-x-hidden px-8 pb-4">
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
          <main className="min-h-[400px] bg-secondary">
            <p>Video 1</p>
            <p>Video 2</p>
          </main>
        </section>
      </div>
    </div >
  )
}

export default App
