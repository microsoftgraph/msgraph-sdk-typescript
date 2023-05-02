import {deserializeIntoRoom} from './deserializeIntoRoom';
import {Room} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createRoomFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoRoom;
}
