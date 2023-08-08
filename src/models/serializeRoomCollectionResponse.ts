import type {Room} from './room';
import type {RoomCollectionResponse} from './roomCollectionResponse';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeRoom} from './serializeRoom';
import type {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeRoomCollectionResponse(writer: SerializationWriter, roomCollectionResponse: RoomCollectionResponse | undefined = {} as RoomCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, roomCollectionResponse)
        writer.writeCollectionOfObjectValues<Room>("value", roomCollectionResponse.value, serializeRoom);
}
