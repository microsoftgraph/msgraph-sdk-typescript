import {RoomCollectionResponseImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createRoomCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : RoomCollectionResponseImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new RoomCollectionResponseImpl();
}
