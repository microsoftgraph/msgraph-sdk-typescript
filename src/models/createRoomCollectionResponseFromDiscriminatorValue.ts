import { deserializeIntoRoomCollectionResponse } from './deserializeIntoRoomCollectionResponse';
import { type RoomCollectionResponse } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createRoomCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoRoomCollectionResponse;
}
