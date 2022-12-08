export const enum Endpoints {
    SOURCES = 'sources',
    EVERYTHING = 'everything',
}

export const enum Methods {
    GET = 'GET',
}

export const enum SourceSelectors {
    temp = '#sourceItemTemp',
    sources = '.sources',
    name = '.source__item-name',
    item = '.source__item',
    dataId = 'data-source-id',
}

export const enum NewsSelectors {
    temp = '#newsItemTemp',
    news = '.news',
    photo = '.news__meta-photo',
    author = '.news__meta-author',
    date = '.news__meta-date',
    title = '.news__description-title',
    source = '.news__description-source',
    content = '.news__description-content',
    item = '.news__item',
    readMore = '.news__read-more a',
}