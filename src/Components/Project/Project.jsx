import React, { useState, useEffect } from 'react';
import CardItem from '../CardItem/CardItem';
import AddProjectModal from '../AddProjectModal/AddProjectModal';
import './Project.css';
import { Assets, projects as initialProjects } from '../../Assets/Assets';

const Project = () => {
    const [projectList, setProjectList] = useState([]); // State to store project details
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        // Set project details from imported projects
        const updatedProjects = initialProjects.map(project => ({
            ...project,
            image: Assets[project.image.replace(/[^a-zA-Z0-9]/g, '')] // Remove any non-alphanumeric characters from the image key
        }));
        setProjectList(updatedProjects);
    }, []);

    const handleAddProject = (newProject) => {
        const updatedProjects = [
            ...projectList,
            {
                ...newProject,
                id: projectList.length + 1,
                image: newProject.image // Assuming the image URL is directly provided in the form
            }
        ];
        setProjectList(updatedProjects);
    };

    return (
        <div className="project-container">
            <div className="card-grid">
                {/* Map through projects array and render CardItem for each project */}
                {projectList.map(project => (
                    <CardItem
                        key={project.id}
                        imageUrl={project.image}
                        title={project.title}
                        description={project.description}
                        buttonText="Read More"
                    />
                ))}
            </div>
            
            {/* Add Project button */}
            {/* <button 
                className="add-project-btn" 
                onClick={() => {
                    console.log('Add Project button clicked');
                    setShowModal(true);
                }}
            >
                Add Project
            </button> */}

            {/* Add Project modal */}
            {showModal && (
                <AddProjectModal 
                    onClose={() => {
                        console.log('Modal close clicked');
                        setShowModal(false);
                    }} 
                    onAddProject={handleAddProject} 
                />
            )}
        </div>
    );
}

export default Project;
