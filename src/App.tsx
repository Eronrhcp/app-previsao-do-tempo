import { Header } from "./components/header";
import { SearchField } from "./components/search";
import { Footer } from "./components/footer";

export function App() {
  return (
    <div className="h-screen flex flex-col pb-6 bg-zinc-100 dark:bg-neutral-900">
      <main className="h-full flex flex-col justify-center">
        <Header />
        <SearchField />
      </main>

      <Footer />
    </div>
  )
}