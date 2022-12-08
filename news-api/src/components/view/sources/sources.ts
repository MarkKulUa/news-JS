import './sources.css';
import { ISourceData } from 'src/interfaces';
import { SourceSelectors } from 'src/enums';

class Sources {
    draw(data: ISourceData[]) {
        const fragment = document.createDocumentFragment() as DocumentFragment;
        const sourceItemTemp = document.querySelector(SourceSelectors.temp) as HTMLTemplateElement;

        data.forEach((item) => {
            const sourceClone = sourceItemTemp.content.cloneNode(true) as HTMLElement;
            const name = sourceClone.querySelector(SourceSelectors.name) as Element;

            sourceClone.querySelector(SourceSelectors.item)?.setAttribute(SourceSelectors.dataId, item.id);
            name.textContent = item.name;

            fragment.append(sourceClone);
        });

        document.querySelector(SourceSelectors.sources)?.append(fragment);
    }
}

export default Sources;
