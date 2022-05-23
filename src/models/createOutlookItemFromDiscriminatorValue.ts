import {OutlookItemImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createOutlookItemFromDiscriminatorValue(parseNode: ParseNode | undefined) : OutlookItemImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    const mappingValueNode = parseNode.getChildNode("@odata.type");
    if (mappingValueNode) {
        const mappingValue = mappingValueNode.getStringValue();
        if (mappingValue) {
            switch (mappingValue) {
                case "#microsoft.graph.outlookItem":
                    return new OutlookItemImpl();
            }
        }
    }
    return new OutlookItemImpl();
}
