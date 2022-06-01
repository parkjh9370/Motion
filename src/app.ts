import { ImageComponent } from "./components/page/item/image.js";
import { NoteComponent } from "./components/page/item/note.js";
import { TodoComponent } from "./components/page/item/todo.js";
import { VideoComponent } from "./components/page/item/video.js";
import { PageComponent } from "./components/page/page.js";

class App {
  private readonly page: PageComponent;
  constructor(appRoot: HTMLElement) {
    this.page = new PageComponent();
    this.page.attachTo(appRoot);

    const image = new ImageComponent(
      "Image Title",
      "https://picsum.photos/600/300"
    );
    image.attachTo(appRoot, "beforeend");

    const video = new VideoComponent(
      "Video Title",
      "https://www.youtube.com/embed/gd4cwivKWfM"
    );
    video.attachTo(appRoot, "beforeend");

    const note = new NoteComponent("Note title", "Note Body");
    note.attachTo(appRoot, "beforeend");

    const todo = new TodoComponent("Todo Title", "Todo Item");
    todo.attachTo(appRoot, "beforeend");
  }
}

// type assersion, 해당 document는 HTML 파일에서 정의 해두었기 때문에 설정 가능
new App(document.querySelector(".document")! as HTMLElement);
