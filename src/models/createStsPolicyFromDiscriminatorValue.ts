import {StsPolicyImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createStsPolicyFromDiscriminatorValue(parseNode: ParseNode | undefined) : StsPolicyImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    const mappingValueNode = parseNode.getChildNode("@odata.type");
    if (mappingValueNode) {
        const mappingValue = mappingValueNode.getStringValue();
        if (mappingValue) {
            switch (mappingValue) {
                case "#microsoft.graph.stsPolicy":
                    return new StsPolicyImpl();
            }
        }
    }
    return new StsPolicyImpl();
}
