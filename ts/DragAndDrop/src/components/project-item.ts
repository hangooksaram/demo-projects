import {Draggable} from "../model/drag-drop"
import {Component} from "../components/base-components"
import {Project} from "../model/project"
import {AutoBind} from "../decorator/autobind"

    // Project Item Class
export class ProjectItem extends Component<HTMLUListElement, HTMLLIElement> implements Draggable{
    private project:Project
    
    get persons(){
      const personStr = this.project.people === 1 ? "person" : "persons";
  
      return `${this.project.people} ${personStr} assigned`
    }
  
    constructor(hostId:string, project:Project){
      super('single-project', hostId, false, project.id);
      this.project = project;
  
      this.configure();
      this.renderContent();
    }
  
    
  
    configure(): void {
      this.element.addEventListener("dragstart", this.dragStartHandler);
      this.element.addEventListener("dragend", this.dragEndHandler);
    }
  
    renderContent(): void {
      this.element.querySelector('h2')!.textContent = this.project.title;
      this.element.querySelector('h3')!.textContent = this.persons;
      this.element.querySelector('p')!.textContent = this.project.description;
    }
  
    @AutoBind
    dragStartHandler(event: DragEvent): void {
      event.dataTransfer!.setData('text/plain', this.project.id)
      event.dataTransfer!.effectAllowed = 'move';
    }
  
    dragEndHandler(event: DragEvent): void {
  
    }
  }
