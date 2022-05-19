import {ManagedAppPolicy} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createManagedAppPolicyFromDiscriminatorValue(parseNode: ParseNode | undefined) : ManagedAppPolicy {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    const mappingValueNode = parseNode.getChildNode("@odata.type");
    if (mappingValueNode) {
        const mappingValue = mappingValueNode.getStringValue();
        if (mappingValue) {
            switch (mappingValue) {
                case "#microsoft.graph.managedAppPolicy":
                    return new ManagedAppPolicy();
            }
        }
    }
    return new ManagedAppPolicy();
}
