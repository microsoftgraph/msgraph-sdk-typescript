import {createRoomFromDiscriminatorValue} from './createRoomFromDiscriminatorValue';
import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {Room} from './room';
import {RoomCollectionResponse} from './roomCollectionResponse';
import {serializeRoom} from './serializeRoom';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoRoomCollectionResponse(roomCollectionResponse: RoomCollectionResponse | undefined = {} as RoomCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(roomCollectionResponse),
        "value": n => { roomCollectionResponse.value = n.getCollectionOfObjectValues<Room>(createRoomFromDiscriminatorValue); },
    }
}
