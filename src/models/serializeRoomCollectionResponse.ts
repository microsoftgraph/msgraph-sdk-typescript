import {Room} from './room';
import {RoomCollectionResponse} from './roomCollectionResponse';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeRoom} from './serializeRoom';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeRoomCollectionResponse(writer: SerializationWriter, roomCollectionResponse: RoomCollectionResponse | undefined = {} as RoomCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, roomCollectionResponse)
        writer.writeCollectionOfObjectValues<Room>("value", roomCollectionResponse.value, serializeRoom);
}
