import {deserializeIntoLocation} from './deserializeIntoLocation';
import {deserializeIntoLocationConstraintItem} from './deserializeIntoLocationConstraintItem';
import {Location, LocationConstraintItem} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createLocationFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    const mappingValueNode = parseNode.getChildNode("@odata.type");
    if (mappingValueNode) {
        const mappingValue = mappingValueNode.getStringValue();
        if (mappingValue) {
            switch (mappingValue) {
                case "#microsoft.graph.locationConstraintItem":
                    return deserializeIntoLocationConstraintItem;
            }
        }
    }
    return deserializeIntoLocation;
}
