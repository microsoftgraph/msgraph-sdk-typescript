import {createRoomListFromDiscriminatorValue} from './createRoomListFromDiscriminatorValue';
import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {RoomList} from './roomList';
import {RoomListCollectionResponse} from './roomListCollectionResponse';
import {serializeRoomList} from './serializeRoomList';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoRoomListCollectionResponse(roomListCollectionResponse: RoomListCollectionResponse | undefined = {} as RoomListCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(roomListCollectionResponse),
        "value": n => { roomListCollectionResponse.value = n.getCollectionOfObjectValues<RoomList>(createRoomListFromDiscriminatorValue); },
    }
}
