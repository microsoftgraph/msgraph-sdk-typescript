import {Room} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createRoomFromDiscriminatorValue(parseNode: ParseNode | undefined) : Room {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Room();
}
