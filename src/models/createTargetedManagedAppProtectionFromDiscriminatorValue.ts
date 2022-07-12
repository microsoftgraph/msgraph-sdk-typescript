import {AndroidManagedAppProtection, IosManagedAppProtection, TargetedManagedAppProtection} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createTargetedManagedAppProtectionFromDiscriminatorValue(parseNode: ParseNode | undefined) : TargetedManagedAppProtection {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    const mappingValueNode = parseNode.getChildNode("@odata.type");
    if (mappingValueNode) {
        const mappingValue = mappingValueNode.getStringValue();
        if (mappingValue) {
            switch (mappingValue) {
                case "#microsoft.graph.androidManagedAppProtection":
                    return new AndroidManagedAppProtection();
                case "#microsoft.graph.iosManagedAppProtection":
                    return new IosManagedAppProtection();
            }
        }
    }
    return new TargetedManagedAppProtection();
}
