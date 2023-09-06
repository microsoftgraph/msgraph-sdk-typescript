import { type RoomList } from './roomList';
import { type RoomListCollectionResponse } from './roomListCollectionResponse';
import { serializeBaseCollectionPaginationCountResponse } from './serializeBaseCollectionPaginationCountResponse';
import { serializeRoomList } from './serializeRoomList';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeRoomListCollectionResponse(writer: SerializationWriter, roomListCollectionResponse: RoomListCollectionResponse | undefined = {} as RoomListCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, roomListCollectionResponse)
        writer.writeCollectionOfObjectValues<RoomList>("value", roomListCollectionResponse.value, serializeRoomList);
}
