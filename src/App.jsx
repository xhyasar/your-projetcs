import ProjectsSidebar from "./components/ProjectsSidebar.jsx";
import NewProjects from "./components/NewProjects.jsx";
import NoProjectSelected from "./components/NoProjectSelected.jsx";
import {useState} from "react";

function App() {
    const [projectsState, setProjectsState] = useState({
        selectedProjectId: undefined,
        projects: []
    });

    function handleStartAddProject() {
        setProjectsState(prevState=> {
            return {
                ...prevState,
                selectedProjectId: null,
            };
        });
    }

    let content;

    if(projectsState.selectedProjectId === null){
        content= <NewProjects />
    } else if(projectsState.selectedProjectId === undefined){
        content= <NoProjectSelected />
    }

    return (
        <main className="h-screen my-8 flex gap-8">
            <ProjectsSidebar onStartAddProject={handleStartAddProject} />
            {content}
        </main>
    );
}

export default App;
