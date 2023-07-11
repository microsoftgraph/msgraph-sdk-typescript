import {RoomList} from './roomList';
import {RoomListCollectionResponse} from './roomListCollectionResponse';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeRoomList} from './serializeRoomList';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeRoomListCollectionResponse(writer: SerializationWriter, roomListCollectionResponse: RoomListCollectionResponse | undefined = {} as RoomListCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, roomListCollectionResponse)
        writer.writeCollectionOfObjectValues<RoomList>("value", roomListCollectionResponse.value, serializeRoomList);
}
