import {IdentityUserFlowAttribute} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createIdentityUserFlowAttributeFromDiscriminatorValue(parseNode: ParseNode | undefined) : IdentityUserFlowAttribute {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    const mappingValueNode = parseNode.getChildNode("@odata.type");
    if (mappingValueNode) {
        const mappingValue = mappingValueNode.getStringValue();
        if (mappingValue) {
            switch (mappingValue) {
                case "#microsoft.graph.identityUserFlowAttribute":
                    return new IdentityUserFlowAttribute();
            }
        }
    }
    return new IdentityUserFlowAttribute();
}
