export class PageURL {
  static create(params: string) {
    const newUrl = window.location.origin + window.location.pathname + (params ? '?' + params : '');
    return newUrl;
  }

  static update(params: string) {
    const url = PageURL.create(params);
    history.pushState({}, '', url);
  }
}
