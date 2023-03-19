import { Project } from "../model/project";
import { ProjectStatus } from "../model/project";
// Project State Management
type Listener<T> = (items: T[]) => void;

// State 관리 Component Class
class State<T> {
  protected listeners: Listener<T>[] = [];

  // 리스너 추가. 데이터 변경될 때마다 함수 목록 호출.
  addListener(listenerFn: Listener<T>) {
    this.listeners.push(listenerFn);
  }
}

export class ProjectState extends State<Project> {
  private projects: Project[] = [];
  private static instance: ProjectState;

  private constructor() {
    super();
  }
  static getInstance() {
    if (this.instance) {
      return this.instance;
    }
    this.instance = new ProjectState();
    return this.instance;
  }

  addProject(title: string, description: string, people: number) {
    const newProject = new Project(
      Math.random().toString(),
      title,
      description,
      people,
      ProjectStatus.Active
    );

    this.projects.push(newProject);

    this.updateListeners();
  }

  moveProject(projectId: string, newStatus: ProjectStatus) {
    const project = this.projects.find((prj) => prj.id === projectId);
    if (project && project.status !== newStatus) {
      project.status = newStatus;
      this.updateListeners();
    }
  }

  private updateListeners() {
    for (const listenerFn of this.listeners) {
      listenerFn(this.projects.slice());
    }
  }
}

export const projectState = ProjectState.getInstance(); // 싱글톤 패턴. 앱에서 하나의 클래스에 한가지 유형의 객체를 가짐. 이것으로 상태관리.
// 하나의 상태관리 객체만 필요
