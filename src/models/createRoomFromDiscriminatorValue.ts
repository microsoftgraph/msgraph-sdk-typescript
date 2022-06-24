import {RoomImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createRoomFromDiscriminatorValue(parseNode: ParseNode | undefined) : RoomImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new RoomImpl();
}
