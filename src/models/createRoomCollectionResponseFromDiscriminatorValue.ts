import {RoomCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createRoomCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : RoomCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new RoomCollectionResponse();
}