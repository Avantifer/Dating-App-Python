export class SimpleOption {
    name : string
    value : string

    constructor(name : string, value : string) {
        this.name = name
        this.value = value
    }
}

export class MediumOption {
    name : string
    placeholder : string
    length : number

    constructor(name : string, placeholder : string, length : number) {
        this.name = name
        this.placeholder = placeholder
        this.length = length
    }
}