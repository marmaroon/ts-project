interface Square {
    side: number
    area: number
}

interface Rect {
    a: number
    b: number
    area: number
}

function calculateArea(side: number): Square // перегрузка функций
function calculateArea(a: number, b: number): Rect
function calculateArea(a: number, b?: number): Square | Rect {
    if (b) {
        const rect: Rect = {
            a, b,
            area: a * b
        }
        return rect
    } else {
        const square: Square = {
            side: a,
            area: a * a
        }
        return square
    }
}

calculateArea(1)
calculateArea(1,2)