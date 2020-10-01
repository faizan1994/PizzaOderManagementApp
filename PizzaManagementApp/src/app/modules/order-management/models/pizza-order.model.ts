export class PizzaOrderReceivedModel{
    Id: number;
    CustomerName: string;
    NoOfItemsOrdered: number;
    CurrentStatus: Status
}

enum Status{
    Recieved,
    Preparing,
    Ready
}