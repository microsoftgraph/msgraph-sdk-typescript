import {PolicyBaseImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createPolicyBaseFromDiscriminatorValue(parseNode: ParseNode | undefined) : PolicyBaseImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    const mappingValueNode = parseNode.getChildNode("@odata.type");
    if (mappingValueNode) {
        const mappingValue = mappingValueNode.getStringValue();
        if (mappingValue) {
            switch (mappingValue) {
                case "#microsoft.graph.policyBase":
                    return new PolicyBaseImpl();
            }
        }
    }
    return new PolicyBaseImpl();
}
