import {RoomListImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createRoomListFromDiscriminatorValue(parseNode: ParseNode | undefined) : RoomListImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new RoomListImpl();
}
