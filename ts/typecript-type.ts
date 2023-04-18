enum ShapeKind {
  Circle = 1,
  Square = 2,
}

interface Circle {
  kind: ShapeKind.Circle;
  radius: number;
}

interface Square {
  kind: ShapeKind.Square;
  sideLength: number;
}

let c: Circle = {
  kind: ShapeKind.Square,
  //    ~~~~~~~~~~~~~~~~ Error!
  radius: 100,
}