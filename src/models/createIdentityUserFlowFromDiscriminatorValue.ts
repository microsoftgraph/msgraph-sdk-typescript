import {B2xIdentityUserFlow, IdentityUserFlow} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createIdentityUserFlowFromDiscriminatorValue(parseNode: ParseNode | undefined) : IdentityUserFlow {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    const mappingValueNode = parseNode.getChildNode("@odata.type");
    if (mappingValueNode) {
        const mappingValue = mappingValueNode.getStringValue();
        if (mappingValue) {
            switch (mappingValue) {
                case "#microsoft.graph.b2xIdentityUserFlow":
                    return new B2xIdentityUserFlow();
            }
        }
    }
    return new IdentityUserFlow();
}
