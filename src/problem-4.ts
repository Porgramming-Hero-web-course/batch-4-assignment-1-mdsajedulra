// Problem 4

type Circle = {
    shape: "circle", 
    radius: 5,
}
type Rectangle = {
    shape: "rectangle"
    width: number, 
    height: number,
}

type Shape = Circle |   Rectangle;



const calculateShapeArea = (shape:Shape):number=>{

if(shape.shape === "rectangle"){

    const area  = shape.height * shape.width;
    return area;

}
else if(shape.shape === "circle"){
    const area = Math.PI * shape.radius * shape.radius;
    return area
}

return 0;
}


const circleArea = calculateShapeArea({ shape: "circle", radius: 5 });


const rectangleArea = calculateShapeArea({
shape: "rectangle",
width: 4,
height: 6,
});

console.log(circleArea, rectangleArea)

