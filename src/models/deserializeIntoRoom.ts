import {BookingType} from './bookingType';
import {deserializeIntoPlace} from './deserializeIntoPlace';
import {Room} from './room';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoRoom(room: Room | undefined = {} as Room) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoPlace(room),
        "audioDeviceName": n => { room.audioDeviceName = n.getStringValue(); },
        "bookingType": n => { room.bookingType = n.getEnumValue<BookingType>(BookingType); },
        "building": n => { room.building = n.getStringValue(); },
        "capacity": n => { room.capacity = n.getNumberValue(); },
        "displayDeviceName": n => { room.displayDeviceName = n.getStringValue(); },
        "emailAddress": n => { room.emailAddress = n.getStringValue(); },
        "floorLabel": n => { room.floorLabel = n.getStringValue(); },
        "floorNumber": n => { room.floorNumber = n.getNumberValue(); },
        "isWheelChairAccessible": n => { room.isWheelChairAccessible = n.getBooleanValue(); },
        "label": n => { room.label = n.getStringValue(); },
        "nickname": n => { room.nickname = n.getStringValue(); },
        "tags": n => { room.tags = n.getCollectionOfPrimitiveValues<string>(); },
        "videoDeviceName": n => { room.videoDeviceName = n.getStringValue(); },
    }
}
