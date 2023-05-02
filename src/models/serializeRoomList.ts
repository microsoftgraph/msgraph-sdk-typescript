import {Room} from './room';
import {RoomList} from './roomList';
import {serializePlace} from './serializePlace';
import {serializeRoom} from './serializeRoom';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeRoomList(writer: SerializationWriter, roomList: RoomList | undefined = {} as RoomList) : void {
        serializePlace(writer, roomList)
        writer.writeStringValue("emailAddress", roomList.emailAddress);
        writer.writeCollectionOfObjectValues<Room>("rooms", roomList.rooms, serializeRoom);
}
