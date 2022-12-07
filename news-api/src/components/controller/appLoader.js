import Loader from './loader';

class AppLoader extends Loader {
    constructor() {
        super('https://newsapi.org/v2/', {
            apiKey: 'd601275ef2844de59549ba3247de080a', // получите свой ключ https://newsapi.org/
        });
    }
}

export default AppLoader;
