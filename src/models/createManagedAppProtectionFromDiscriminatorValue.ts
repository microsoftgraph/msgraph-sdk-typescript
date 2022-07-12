import {DefaultManagedAppProtection, ManagedAppProtection, TargetedManagedAppProtection} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createManagedAppProtectionFromDiscriminatorValue(parseNode: ParseNode | undefined) : ManagedAppProtection {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    const mappingValueNode = parseNode.getChildNode("@odata.type");
    if (mappingValueNode) {
        const mappingValue = mappingValueNode.getStringValue();
        if (mappingValue) {
            switch (mappingValue) {
                case "#microsoft.graph.defaultManagedAppProtection":
                    return new DefaultManagedAppProtection();
                case "#microsoft.graph.targetedManagedAppProtection":
                    return new TargetedManagedAppProtection();
            }
        }
    }
    return new ManagedAppProtection();
}
