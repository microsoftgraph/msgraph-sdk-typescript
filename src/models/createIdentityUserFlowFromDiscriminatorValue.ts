import {IdentityUserFlowImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createIdentityUserFlowFromDiscriminatorValue(parseNode: ParseNode | undefined) : IdentityUserFlowImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    const mappingValueNode = parseNode.getChildNode("@odata.type");
    if (mappingValueNode) {
        const mappingValue = mappingValueNode.getStringValue();
        if (mappingValue) {
            switch (mappingValue) {
                case "#microsoft.graph.identityUserFlow":
                    return new IdentityUserFlowImpl();
            }
        }
    }
    return new IdentityUserFlowImpl();
}
