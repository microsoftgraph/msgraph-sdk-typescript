import {BookingType} from './bookingType';
import {Room} from './room';
import {serializePlace} from './serializePlace';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeRoom(writer: SerializationWriter, room: Room | undefined = {} as Room) : void {
        serializePlace(writer, room)
        writer.writeStringValue("audioDeviceName", room.audioDeviceName);
        writer.writeEnumValue<BookingType>("bookingType", room.bookingType);
        writer.writeStringValue("building", room.building);
        writer.writeNumberValue("capacity", room.capacity);
        writer.writeStringValue("displayDeviceName", room.displayDeviceName);
        writer.writeStringValue("emailAddress", room.emailAddress);
        writer.writeStringValue("floorLabel", room.floorLabel);
        writer.writeNumberValue("floorNumber", room.floorNumber);
        writer.writeBooleanValue("isWheelChairAccessible", room.isWheelChairAccessible);
        writer.writeStringValue("label", room.label);
        writer.writeStringValue("nickname", room.nickname);
        writer.writeCollectionOfPrimitiveValues<string>("tags", room.tags);
        writer.writeStringValue("videoDeviceName", room.videoDeviceName);
}
