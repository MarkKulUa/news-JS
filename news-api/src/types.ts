import { Endpoints } from 'src/enums';

export type configs = {
    endpoint: Endpoints.EVERYTHING | Endpoints.SOURCES;
    options?: { sources?: string };
};
