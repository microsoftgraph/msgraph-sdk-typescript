import { deserializeIntoRoomListCollectionResponse } from './deserializeIntoRoomListCollectionResponse';
import { type RoomListCollectionResponse } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createRoomListCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoRoomListCollectionResponse;
}
