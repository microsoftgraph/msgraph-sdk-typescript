import {deserializeIntoRoomList} from './deserializeIntoRoomList';
import {RoomList} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createRoomListFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoRoomList;
}
