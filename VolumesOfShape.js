class Cylinder{
    constructor(radius, height){
        this.radius = radius;
        this.height= height;
    }

    getVolume(){
       
        let cylinderVolume = 3.142*this.radius*this.radius*this.height;
        return cylinderVolume.toFixed(4);
    }

}
 
class Sphere{

    constructor(radius){
        this.radius = radius;
    }

    getVolume(){
        let sphereVolume = (4/3)*3.142*(this.radius*this.radius*this.radius);
        return sphereVolume.toFixed(4);
    }

}

class Cone{

    constructor(radius, height){
        this.radius = radius;
        this.height= height;
    }

    getVolume(){
       
        let coneVolume = (3.142*this.radius*this.radius*this.height)/3;
        return coneVolume.toFixed(4);
    }

}



let cylinder1 = new Cylinder(6,8);
let result = cylinder1.getVolume();
console.log(result);

let sphere1 = new Sphere(3);
let result1 = sphere1.getVolume();
console.log(result1);

let cone1 = new Cone(6,8);
let result2 = cone1.getVolume();
console.log(result2);