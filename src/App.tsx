import { PageHeader } from "./layouts/PageHeader"

function App() {
  return (
    <div className="max-h-screen flex flex-col">
      <PageHeader />
      <div className="grid grid-cols-[auto,1fr] overflow-auto">
        <aside>Sidebar</aside>
        <main className="min-h-[500px] border-2 border-secondary-dark bg-secondary">
          Futur main content
        </main>
      </div>
    </div>
  )
}

export default App
