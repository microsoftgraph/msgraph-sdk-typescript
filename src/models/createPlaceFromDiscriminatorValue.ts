import { deserializeIntoPlace } from './deserializeIntoPlace';
import { deserializeIntoRoom } from './deserializeIntoRoom';
import { deserializeIntoRoomList } from './deserializeIntoRoomList';
import { type Place, type Room, type RoomList } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createPlaceFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    const mappingValueNode = parseNode.getChildNode("@odata.type");
    if (mappingValueNode) {
        const mappingValue = mappingValueNode.getStringValue();
        if (mappingValue) {
            switch (mappingValue) {
                case "#microsoft.graph.room":
                    return deserializeIntoRoom;
                case "#microsoft.graph.roomList":
                    return deserializeIntoRoomList;
            }
        }
    }
    return deserializeIntoPlace;
}
