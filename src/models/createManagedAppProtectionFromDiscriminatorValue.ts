import {ManagedAppProtectionImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createManagedAppProtectionFromDiscriminatorValue(parseNode: ParseNode | undefined) : ManagedAppProtectionImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    const mappingValueNode = parseNode.getChildNode("@odata.type");
    if (mappingValueNode) {
        const mappingValue = mappingValueNode.getStringValue();
        if (mappingValue) {
            switch (mappingValue) {
                case "#microsoft.graph.managedAppProtection":
                    return new ManagedAppProtectionImpl();
            }
        }
    }
    return new ManagedAppProtectionImpl();
}
