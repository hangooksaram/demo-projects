import { Component } from "./base-components";
import { Validatable, validate } from "../util/validation";
import { projectState } from "../state/project";
import { AutoBind } from "../decorator/autobind";

export class ProjectInput extends Component<HTMLDivElement, HTMLFormElement> {
  titleInputElement: HTMLInputElement;
  descriptionInputElement: HTMLInputElement;
  peopleInputElement: HTMLInputElement;

  constructor() {
    super("project-input", "app", true, "user-input");
    this.titleInputElement = document.getElementById(
      "title"
    ) as HTMLInputElement;
    this.descriptionInputElement = document.getElementById(
      "description"
    ) as HTMLInputElement;
    this.peopleInputElement = document.getElementById(
      "people"
    ) as HTMLInputElement;

    this.configure();
  }

  private gatherUserInput(): [string, string, number] | boolean {
    const titleValidatable: Validatable = {
      value: this.titleInputElement.value,
      required: true,
      minLength: 5,
    };
    const descriptionValidatable: Validatable = {
      value: this.descriptionInputElement.value,
      required: true,
      minLength: 5,
    };

    const peopleValidatable: Validatable = {
      value: +this.peopleInputElement.value,
      required: true,
      min: 0,
      max: 10,
    };

    if (
      validate(titleValidatable) &&
      validate(descriptionValidatable) &&
      validate(peopleValidatable)
    ) {
      return [
        titleValidatable.value.toString(),
        descriptionValidatable.value.toString(),
        +peopleValidatable.value,
      ];
    } else {
      alert("invalid");
      return false;
    }
  }

  private clearUserInput(): void {
    this.titleInputElement.value = "";
    this.descriptionInputElement.value = "";
    this.peopleInputElement.value = "";
  }

  @AutoBind
  private submitHandler(event: Event) {
    event.preventDefault();

    const userInput = this.gatherUserInput();

    if (Array.isArray(userInput)) {
      const [title, description, people] = userInput;
      projectState.addProject(title, description, people);
      this.clearUserInput();
    }
  }
  renderContent(): void {}
  configure() {
    this.element.addEventListener("submit", this.submitHandler);
  }
}
