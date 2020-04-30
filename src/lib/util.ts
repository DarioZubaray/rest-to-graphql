export function getWikipediaMobileUrl(url: String) {
    return (url) ? url.replace('wikipedia', 'm.wikipedia') : '';
}