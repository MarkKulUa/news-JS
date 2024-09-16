import AppLoader from './appLoader';
import { INews, ISource } from 'src/interfaces';
import { Endpoints } from 'src/enums';

class AppController extends AppLoader {
    getSources(): Promise<ISource | undefined> {
        return super.getResp<ISource>({
            endpoint: Endpoints.SOURCES,
        });
    }

    getNews(sourceId: string): Promise<INews | undefined> {
        return super.getResp<INews>({
            endpoint: Endpoints.EVERYTHING,
            options: {
                sources: sourceId,
            },
        });
    }
}

export default AppController;
