var Car = /** @class */ (function () {
    function Car(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
        this.currentSpeed = 0;
    }
    Car.prototype.accelerate = function (speed) {
        this.currentSpeed += speed;
        console.log("Accelerating to ".concat(this.currentSpeed, "\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B mph..."));
    };
    Car.prototype.decelerate = function (speed) {
        this.currentSpeed -= speed;
        console.log("Decelerating to ".concat(this.currentSpeed, "\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B mph..."));
    };
    Car.prototype.stop = function () {
        this.currentSpeed = 0;
        console.log('Stopping the car...');
    };
    return Car;
}());
var car = new Car('Toyota', 'Corolla', 2022);
console.log(car);
car.accelerate(40);
car.decelerate(100);
car.stop();
//<https://teams.microsoft.com/l/message/19:q3MyoluBJTVCwE9DeINfBEUdMPpeunOZs0FLZHx3Hf41@thread.tacv2/1680171362430?tenantId=a4431f4b-c207-4733-9530-34c08a9b2b8d&amp;groupId=80bcaaae-9f72-4eb4-ae78-0c30cf8f48db&amp;parentMessageId=1680171362430&amp;teamName=Sigma Warriors&amp;channelName=General&amp;createdTime=1680171362430&amp;allowXTenantAccess=false>
