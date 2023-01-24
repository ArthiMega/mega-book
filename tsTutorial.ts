let nmae:null= null;
// nmae = true;
console.log(nmae);

const array1:string[]= [];
array1.push("Arthi");
console.log(array1);

const numberArray :readonly number[]= [1,2,3]
//numberArray.push(4);  error


const numberArray1 : number[]= [1,2,3]
numberArray1.push(4)
console.log(numberArray1);

let outTuple:readonly[number, boolean, string]

outTuple = [1,true, "Arthi"];
// outTuple.push("something new")// error for read only
console.log(outTuple);

const obj:{id:number,name:string,place?:string} ={
    id:1,
    name:"Arthi"
    }
obj.id = 2;
console.log(obj)

enum coordinates{
    East = 5,
    West,
    North,
    South
}
console.log(coordinates.West);

type Food = string;
type Price = number;
type Tips = boolean;
type Hotel={
    food:Food,
    price:Price,
    tips:Tips
}

const hfood:Food = "Thayer Satham";
const hprice:Price = 100;
const htips:Tips = false;
const hotel:Hotel = {
    food:hfood,
    price:hprice,
    tips:htips
}
console.log(hotel);

interface Televission{
    name:string,
    height:number,
    weight:number,
    width:number
}
interface Led extends Televission{
    color:string
}

const tv:Led= {
    name:"panasonic",
    height:123,
    weight:123,
    width:123,
    color:"all"
}
console.log(tv);

function hi(data:string|number){
    console.log(`hi ${data}`)
}
hi("Arthi")
hi(3)

//casting

const art : unknown = "Arthi";
console.log((art as string).length);
// console.log((<string>art).length);

