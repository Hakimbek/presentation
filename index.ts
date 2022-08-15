
   class Car {
       make: string;
       color: string;
       doors: number;

       start(): void {
           console.log('Start')
       }

       stop(): void {
           console.log('Stop')
       }
   }


   class ElectricCar extends Car {
     range: string;

     charge() {
         console.log('Charge')
     }
   }


