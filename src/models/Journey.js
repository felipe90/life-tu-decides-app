class Journey {
  constructor({ ...params }) {
    this.id = params.id;
    this.type = params.type;
    this.title = params.title;
    this.path = params.path;
    this.videoUrl = params.videoUrl;
    this.before = params.before;
    this.after = params.after;
  }
}
export default Journey;
