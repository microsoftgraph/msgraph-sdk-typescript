import { deserializeIntoRoomList } from './deserializeIntoRoomList';
import { type RoomList } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createRoomListFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoRoomList;
}
