import {Location, LocationConstraintItem} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createLocationFromDiscriminatorValue(parseNode: ParseNode | undefined) : Location {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    const mappingValueNode = parseNode.getChildNode("@odata.type");
    if (mappingValueNode) {
        const mappingValue = mappingValueNode.getStringValue();
        if (mappingValue) {
            switch (mappingValue) {
                case "#microsoft.graph.locationConstraintItem":
                    return new LocationConstraintItem();
            }
        }
    }
    return new Location();
}
