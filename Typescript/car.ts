class Car {​​​​​​​​
make: string;
model: string;
year: number;
currentSpeed: number;

constructor(make: string, model: string, year: number) {​​​​​​​​
this.make = make;
this.model = model;
this.year = year;
this.currentSpeed = 0;
    }​​​​​​​​

accelerate(speed: number): void {​​​​​​​​
this.currentSpeed += speed;
console.log(`Accelerating to ${​​​​​​​​this.currentSpeed}​​​​​​​​ mph...`);
    }​​​​​​​​

decelerate(speed: number): void {​​​​​​​​
this.currentSpeed -= speed;
console.log(`Decelerating to ${​​​​​​​​this.currentSpeed}​​​​​​​​ mph...`);
    }​​​​​​​​

stop(): void {​​​​​​​​
this.currentSpeed = 0;
console.log('Stopping the car...');
    }​​​​​​​​
  }​​​​​​​​

const car = new Car('Toyota', 'Corolla', 2022);
console.log(car); 
car.accelerate(40); 
car.decelerate(100); 
car.stop(); 


//<https://teams.microsoft.com/l/message/19:q3MyoluBJTVCwE9DeINfBEUdMPpeunOZs0FLZHx3Hf41@thread.tacv2/1680171362430?tenantId=a4431f4b-c207-4733-9530-34c08a9b2b8d&amp;groupId=80bcaaae-9f72-4eb4-ae78-0c30cf8f48db&amp;parentMessageId=1680171362430&amp;teamName=Sigma Warriors&amp;channelName=General&amp;createdTime=1680171362430&amp;allowXTenantAccess=false>