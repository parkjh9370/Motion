import { PageComponent } from "./components/page.js";

class App {
  private readonly page: PageComponent;
  constructor(appRoot: HTMLElement) {
    this.page = new PageComponent();
    this.page.attachTo(appRoot);
  }
}

// type assersion, 해당 document는 HTML 파일에서 정의 해두었기 때문에 설정 가능
new App(document.querySelector(".document")! as HTMLElement);
