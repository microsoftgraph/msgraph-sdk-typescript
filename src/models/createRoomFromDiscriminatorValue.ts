import { deserializeIntoRoom } from './deserializeIntoRoom';
import { type Room } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createRoomFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoRoom;
}
