import {BaseItemImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createBaseItemFromDiscriminatorValue(parseNode: ParseNode | undefined) : BaseItemImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    const mappingValueNode = parseNode.getChildNode("@odata.type");
    if (mappingValueNode) {
        const mappingValue = mappingValueNode.getStringValue();
        if (mappingValue) {
            switch (mappingValue) {
                case "#microsoft.graph.baseItem":
                    return new BaseItemImpl();
            }
        }
    }
    return new BaseItemImpl();
}
