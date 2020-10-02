export interface OrderDetailModel {
Id: number;
Items: PizzaDetialModel[];
AddressLine1: string;
AddressLine2: string;
City: string;
Landmark: string;
Pincode: number;
State: string
} 

export interface PizzaDetialModel{
id: number;
name: string;
init: string;
pizza: string;
image: string;
price: number;
base: string;
type: string
}
