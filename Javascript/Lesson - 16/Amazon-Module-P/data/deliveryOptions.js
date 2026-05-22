
import dayjs from "https://unpkg.com/supersimpledev@8.5.0/dayjs/esm/index.js";
export let deliveryOptions = [
    {
        id : '1',
        deliveryDays : 7,
        priceCents : 0
    },
    {

        id : '2',
        deliveryDays : 3,
        priceCents : 499
    },
    {
        id : '3',
        deliveryDays : 1,
        priceCents : 999
    }
];

export function getDeliveryOption(deliveryOptionId){

    let deliveryOption;

    deliveryOptions.forEach((option)=>{
        if(option.id === deliveryOptionId){
            deliveryOption = option;
        }
    });

    return deliveryOption || deliveryOptions[0];
}

export function calculateDeliveryDate(deliveryOption){

    let todayDate = new dayjs();
    let deliveryDays = deliveryOption.deliveryDays;

     

    let deliveryDate = todayDate.add(deliveryDays, "days");

     
    
    function isWeekend(date){

        let weekendDay = date.format("dddd");

        return weekendDay === 'Saturday' || weekendDay === 'Sunday';
    }


    let deliveryDatePos = isWeekend(deliveryDate);

    if(deliveryDatePos){
        deliveryDate = deliveryDate.add(3, "days");
    }

    return deliveryDate;
}