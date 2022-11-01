import {RoomListCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createRoomListCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : RoomListCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new RoomListCollectionResponse();
}
