
const services = {

    coloring: "600 uah",
    shaving: "80 uah",
    washing : "100 uah",

    get prices(){
    return `${this.coloring} ${this.shaving} ${this.washing}`
    },
    

    addService(serviseName,price){
        this[serviseName] = price
    },

    get max_price(){
        return Math.max
        (parseInt(this.shaving),
        parseInt(this.washing),
        parseInt(this.coloring))


    },
    get min_price(){
        return Math.min(
        parseInt(this.shaving),
        parseInt(this.washing),
        parseInt(this.coloring)
    )
    }
}
// console.log(services.addService("anything", "90 uah"))
console.log(services.prices)
console.log(services.max_price)
console.log(services.min_price)

