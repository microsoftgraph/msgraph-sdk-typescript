import {deserializeIntoAndroidManagedAppRegistration} from './deserializeIntoAndroidManagedAppRegistration';
import {deserializeIntoIosManagedAppRegistration} from './deserializeIntoIosManagedAppRegistration';
import {deserializeIntoManagedAppRegistration} from './deserializeIntoManagedAppRegistration';
import {AndroidManagedAppRegistration, IosManagedAppRegistration, ManagedAppRegistration} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createManagedAppRegistrationFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    const mappingValueNode = parseNode.getChildNode("@odata.type");
    if (mappingValueNode) {
        const mappingValue = mappingValueNode.getStringValue();
        if (mappingValue) {
            switch (mappingValue) {
                case "#microsoft.graph.androidManagedAppRegistration":
                    return deserializeIntoAndroidManagedAppRegistration;
                case "#microsoft.graph.iosManagedAppRegistration":
                    return deserializeIntoIosManagedAppRegistration;
            }
        }
    }
    return deserializeIntoManagedAppRegistration;
}
