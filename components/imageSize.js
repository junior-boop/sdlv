export default class ImagSize{
    constructor(src){
        this.src = src
        this.with;
        this.height;
        this.ratio;
        this.image = new Image()
    }

    getImageProps(){
        this.image.src = this.src ;
        this.with = this.image.width;
        this.height = this.image.height;
        this.ratio = this.with/this.height
    }
}
    