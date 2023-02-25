let sales: number = 123_456_789
let course: string = "Typescript"
let is_published: boolean = true 

let numbers: number[] = []

let user: [number, string] = [1, "Omar"]

const enum Size { Small = 1, Medium = 2, Large = 3}
let mySize: Size = Size.Small

function calculateTax(income: number, taxYear: number = 2022): number {
    if (taxYear < 2022)
        return income * 1.2
    return income * 1.3
}

calculateTax(10000)

let employee: {
    readonly id: number,
    name: string,
    retire: (date: Date) => void
} = {
    id: 1,
    name: 'Mosh',
    retire: (date: Date) => {
        console.log(date)
    }
}
 
type Employee = {
    readonly id: number,
    name: string,
    retire: (date: Date) => void
}

let myEmployee: Employee = {
    id: 1,
    name: 'Mosh',
    retire: (date: Date) => {
        console.log(date)
    }
}

function kgToLbs(weight: number | string): number {
    if (typeof weight === 'number')
        return weight * 2.2
    else 
        return parseInt(weight) * 2.2
}

type Draggable = {
    drag: () => void
}

type Resizable = {
    resize: () => void
}

type UIWidget = Draggable & Resizable

let textBox: UIWidget = {
    drag: () => {},
    resize: () => {}
}

type Quantity = 50 | 100
let quantity: Quantity = 100

type Metric = "cm" | "m"
