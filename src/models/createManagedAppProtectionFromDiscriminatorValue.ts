import {deserializeIntoAndroidManagedAppProtection} from './deserializeIntoAndroidManagedAppProtection';
import {deserializeIntoDefaultManagedAppProtection} from './deserializeIntoDefaultManagedAppProtection';
import {deserializeIntoIosManagedAppProtection} from './deserializeIntoIosManagedAppProtection';
import {deserializeIntoManagedAppProtection} from './deserializeIntoManagedAppProtection';
import {deserializeIntoTargetedManagedAppProtection} from './deserializeIntoTargetedManagedAppProtection';
import {AndroidManagedAppProtection, DefaultManagedAppProtection, IosManagedAppProtection, ManagedAppProtection, TargetedManagedAppProtection} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createManagedAppProtectionFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    const mappingValueNode = parseNode.getChildNode("@odata.type");
    if (mappingValueNode) {
        const mappingValue = mappingValueNode.getStringValue();
        if (mappingValue) {
            switch (mappingValue) {
                case "#microsoft.graph.androidManagedAppProtection":
                    return deserializeIntoAndroidManagedAppProtection;
                case "#microsoft.graph.defaultManagedAppProtection":
                    return deserializeIntoDefaultManagedAppProtection;
                case "#microsoft.graph.iosManagedAppProtection":
                    return deserializeIntoIosManagedAppProtection;
                case "#microsoft.graph.targetedManagedAppProtection":
                    return deserializeIntoTargetedManagedAppProtection;
            }
        }
    }
    return deserializeIntoManagedAppProtection;
}
