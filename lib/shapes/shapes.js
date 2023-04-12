class shape {
    constructor() {
        this.color = '';
    }

    setColor(color) {
        this.color = color;  
    }       
}

class square extends shape {
    render () {
        return `<circle cx='150' cy='100' r='80' fill='${this.color}'/>`
    }
}

module.exports = {circle};