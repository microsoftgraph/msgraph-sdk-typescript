import { deserializeIntoAndroidManagedAppProtection } from './deserializeIntoAndroidManagedAppProtection';
import { deserializeIntoIosManagedAppProtection } from './deserializeIntoIosManagedAppProtection';
import { deserializeIntoTargetedManagedAppProtection } from './deserializeIntoTargetedManagedAppProtection';
import { type AndroidManagedAppProtection, type IosManagedAppProtection, type TargetedManagedAppProtection } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createTargetedManagedAppProtectionFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    const mappingValueNode = parseNode.getChildNode("@odata.type");
    if (mappingValueNode) {
        const mappingValue = mappingValueNode.getStringValue();
        if (mappingValue) {
            switch (mappingValue) {
                case "#microsoft.graph.androidManagedAppProtection":
                    return deserializeIntoAndroidManagedAppProtection;
                case "#microsoft.graph.iosManagedAppProtection":
                    return deserializeIntoIosManagedAppProtection;
            }
        }
    }
    return deserializeIntoTargetedManagedAppProtection;
}
