import { createRoomListFromDiscriminatorValue } from './createRoomListFromDiscriminatorValue';
import { deserializeIntoBaseCollectionPaginationCountResponse } from './deserializeIntoBaseCollectionPaginationCountResponse';
import { type RoomList } from './roomList';
import { type RoomListCollectionResponse } from './roomListCollectionResponse';
import { serializeRoomList } from './serializeRoomList';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoRoomListCollectionResponse(roomListCollectionResponse: RoomListCollectionResponse | undefined = {} as RoomListCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(roomListCollectionResponse),
        "value": n => { roomListCollectionResponse.value = n.getCollectionOfObjectValues<RoomList>(createRoomListFromDiscriminatorValue); },
    }
}
