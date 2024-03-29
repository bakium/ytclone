import { VideoGridItem } from "./components/VideoGridItem"
import { PageHeader } from "./layouts/PageHeader"
import { videos } from "./data/videos"
import { CategoryPills } from "./components/CategoryPills"
import { categories } from "./data/categories"
import { useState } from "react"

function App() {
  const [selectedCategory, setSelectedCategory] = useState(categories[0])
  return (
    <div className="max-h-screen flex flex-col">
      <PageHeader />
      <div className="grid grid-cols-[auto,1fr] flex-grow-1 overflow-auto">
        <aside>Side</aside>
        <section className="overflow-x-hidden px-2 lg:px-4 pb-4">
          <div className="sticky top-0 bg-white z-10 px-5 pb-4">
            <CategoryPills
              categories={categories}
              selectedCategory={selectedCategory}
              onSelect={setSelectedCategory}
            />
          </div>
          <main className="
            grid gap-2 grid-cols-[repeat(auto-fill,minmax(300px,1fr))]
          ">
            {videos.map((video) =>
              <VideoGridItem
                key={video.id}
                {...video}
              />
            )}
          </main>
        </section>
      </div>
    </div >
  )
}

export default App
