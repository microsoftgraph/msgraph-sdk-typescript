import { createRoomFromDiscriminatorValue } from './createRoomFromDiscriminatorValue';
import { deserializeIntoPlace } from './deserializeIntoPlace';
import { type Room } from './room';
import { type RoomList } from './roomList';
import { serializeRoom } from './serializeRoom';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoRoomList(roomList: RoomList | undefined = {} as RoomList) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoPlace(roomList),
        "emailAddress": n => { roomList.emailAddress = n.getStringValue(); },
        "rooms": n => { roomList.rooms = n.getCollectionOfObjectValues<Room>(createRoomFromDiscriminatorValue); },
    }
}
