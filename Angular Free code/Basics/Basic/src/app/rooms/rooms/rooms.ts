export interface Rooms {

    totalRooms:number;
    availableRooms:number;
    bookedRooms:number;

}

export interface RoomList{
    roomNumber:number;
    roomtype:string;
    amenities:string;
    price:number;
    photos:string;
    checkintime:Date;
    checkoutTime:Date;
    rating:number;
}