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

export class CardProduct {
    img : string
    title : string
    text : string[]
    cost : number
    link : string

    constructor(img : string, title : string, text : string[], cost : number, link : string) {
        this.img = img
        this.title = title
        this.text = text
        this.cost = cost
        this.link = link
    }
}