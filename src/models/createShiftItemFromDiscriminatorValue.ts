import {OpenShiftItem, ShiftItem} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createShiftItemFromDiscriminatorValue(parseNode: ParseNode | undefined) : ShiftItem {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    const mappingValueNode = parseNode.getChildNode("@odata.type");
    if (mappingValueNode) {
        const mappingValue = mappingValueNode.getStringValue();
        if (mappingValue) {
            switch (mappingValue) {
                case "#microsoft.graph.openShiftItem":
                    return new OpenShiftItem();
            }
        }
    }
    return new ShiftItem();
}
