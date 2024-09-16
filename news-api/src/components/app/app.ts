import AppController from '../controller/controller';
import { AppView } from '../view/appView';
import { INews, ISource } from 'src/interfaces';

const isClickedSource = (target: HTMLElement): boolean | undefined => {
    return target.classList.contains('source__item') || target.parentElement?.classList.contains('source__item');
};

const sourceClickHandler = async function (controller: AppController, view: AppView, e: Event): Promise<void> {
    const currentTarget = e.currentTarget as HTMLElement;
    const target = e.target as HTMLElement;

    if (isClickedSource(target)) {
        const sourceId = target.getAttribute('data-source-id') || target.parentElement?.getAttribute('data-source-id');
        if (sourceId === currentTarget.getAttribute('data-source')) return;

        currentTarget.setAttribute('data-source', sourceId || '');
        const data: INews | undefined = await controller.getNews(sourceId || '');
        if (data) {
            view.drawNews(data);
        }
    }
};

class App {
    private controller: AppController;
    private view: AppView;

    constructor() {
        this.controller = new AppController();
        this.view = new AppView();
    }

    async start() {
        document
            .querySelector('.sources')
            ?.addEventListener('click', (e) => sourceClickHandler(this.controller, this.view, e));

        const data: ISource | undefined = await this.controller.getSources();
        if (data) {
            this.view.drawSources(data);
        }
    }

    // start() {
    //     document
    //         .querySelector('.sources')
    //         ?.addEventListener('click', (e) => this.controller.getNews(e, (data) => this.view.drawNews(data)));
    //     this.controller.getSources((data: object) => this.view.drawSources(data));
    // }
}

export default App;
