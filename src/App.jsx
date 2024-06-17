import AppRoutes from "./AppRoutes"
import { Navbar, Footer, ScrollToTop } from "./components"

const App = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="min-h-[91vh] ">
        <ScrollToTop />
        <AppRoutes />
        <Footer />
      </div>
    </div>
  )
}

export default App
