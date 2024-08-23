import { Provider } from "react-redux"
import FilterOptions from "./components/FilterOptions"
import NavBar from "./components/NavBar"
import TodoInput from "./components/TodoInput"
import TodoLists from "./components/TodoLists"
import store from "./redux/store"
import { Toaster } from "react-hot-toast"

function App() {
  return (
    <Provider store={store}>
      <NavBar></NavBar>
      <div className="h-[90vh] w-full flex justify-center items-center bg-gradient-to-br from-sky-100 to-purple-100">
        <div className="w-full max-w-[600px] bg-white p-2 md:p-4 lg:p-6 mx-2 rounded-lg shadow-lg">
          <TodoInput></TodoInput>
          <TodoLists></TodoLists>
          <FilterOptions></FilterOptions>
        </div>
      </div>
      <Toaster />
    </Provider>
  )
}

export default App
