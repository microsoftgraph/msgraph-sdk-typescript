import { deserializeIntoIdentityBuiltInUserFlowAttribute } from './deserializeIntoIdentityBuiltInUserFlowAttribute';
import { deserializeIntoIdentityCustomUserFlowAttribute } from './deserializeIntoIdentityCustomUserFlowAttribute';
import { deserializeIntoIdentityUserFlowAttribute } from './deserializeIntoIdentityUserFlowAttribute';
import { type IdentityBuiltInUserFlowAttribute, type IdentityCustomUserFlowAttribute, type IdentityUserFlowAttribute } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createIdentityUserFlowAttributeFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    const mappingValueNode = parseNode.getChildNode("@odata.type");
    if (mappingValueNode) {
        const mappingValue = mappingValueNode.getStringValue();
        if (mappingValue) {
            switch (mappingValue) {
                case "#microsoft.graph.identityBuiltInUserFlowAttribute":
                    return deserializeIntoIdentityBuiltInUserFlowAttribute;
                case "#microsoft.graph.identityCustomUserFlowAttribute":
                    return deserializeIntoIdentityCustomUserFlowAttribute;
            }
        }
    }
    return deserializeIntoIdentityUserFlowAttribute;
}
