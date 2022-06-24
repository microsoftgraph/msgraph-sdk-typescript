import {PlaceImpl, RoomImpl, RoomListImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createPlaceFromDiscriminatorValue(parseNode: ParseNode | undefined) : PlaceImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    const mappingValueNode = parseNode.getChildNode("@odata.type");
    if (mappingValueNode) {
        const mappingValue = mappingValueNode.getStringValue();
        if (mappingValue) {
            switch (mappingValue) {
                case "#microsoft.graph.room":
                    return new RoomImpl();
                case "#microsoft.graph.roomList":
                    return new RoomListImpl();
            }
        }
    }
    return new PlaceImpl();
}
