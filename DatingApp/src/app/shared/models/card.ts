export class Card {
    icon : string
    img : string
    title : string
    text : string[]

    constructor(icon : string, img : string, title : string, text : string[]) {
        this.icon = icon
        this.img = img
        this.title = title
        this.text = text
    }
}