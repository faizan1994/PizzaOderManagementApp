export class PizzaOrderReceivedModel{
    Id: number;
    CustomerName: string;
    NoOfItemsOrdered: number;
    CurrentStatus: string
}

export const Status = {
    Recieved: "Recieved",
    Preparing: "Being Prepared",
    Ready: "Ready to serve"
}