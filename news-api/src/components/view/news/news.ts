import './news.css';
import { INewsData } from 'src/interfaces';
import { NewsSelectors } from 'src/enums';

class News {
    draw(data: INewsData[]) {
        const news: readonly INewsData[] = data.length >= 10 ? data.filter((_item, idx) => idx < 10) : data;

        const fragment = document.createDocumentFragment() as DocumentFragment;
        const newsItemTemp = document.querySelector(NewsSelectors.temp) as HTMLTemplateElement;
        const newsWrapper = document.querySelector(NewsSelectors.news) as Element;

        news.forEach((item, idx) => {
            const newsClone = newsItemTemp.content.cloneNode(true) as HTMLElement;

            if (idx % 2) newsClone.querySelector(NewsSelectors.item).classList.add('alt');

            const title = newsClone.querySelector(NewsSelectors.title) as HTMLElement;
            const author = newsClone.querySelector(NewsSelectors.author) as HTMLElement;
            const photo = newsClone.querySelector(NewsSelectors.photo) as HTMLElement;
            const date = newsClone.querySelector(NewsSelectors.date) as HTMLElement;
            const content = newsClone.querySelector(NewsSelectors.content) as HTMLElement;
            const source = newsClone.querySelector(NewsSelectors.source) as HTMLElement;

            title.textContent = item.title;
            author.textContent = item.author || item.source.name;
            photo.style.backgroundImage = `url(${
                item.urlToImage || 'img/news_placeholder.jpg'
            })`;

            date.textContent = item.publishedAt.toString()
                .slice(0, 10)
                .split('-')
                .reverse()
                .join('-');

            content.textContent = item.description; //content;
            source.textContent = item.source.name;

            newsClone.querySelector(NewsSelectors.readMore)?.setAttribute('href', item.url);

            fragment.append(newsClone);
        });

        newsWrapper.innerHTML = '';
        newsWrapper.appendChild(fragment);
    }
}

export default News;
