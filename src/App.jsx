import ProjectsSidebar from "./components/ProjectsSidebar.jsx";
import NewProjects from "./components/NewProjects.jsx";

function App() {
    return (
        <main className="h-screen my-8 flex gap-8">
            <ProjectsSidebar/>
            <NewProjects/>
        </main>
    );
}

export default App;
