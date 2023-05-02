import {deserializeIntoIosMobileAppConfiguration} from './deserializeIntoIosMobileAppConfiguration';
import {deserializeIntoManagedDeviceMobileAppConfiguration} from './deserializeIntoManagedDeviceMobileAppConfiguration';
import {IosMobileAppConfiguration, ManagedDeviceMobileAppConfiguration} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createManagedDeviceMobileAppConfigurationFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    const mappingValueNode = parseNode.getChildNode("@odata.type");
    if (mappingValueNode) {
        const mappingValue = mappingValueNode.getStringValue();
        if (mappingValue) {
            switch (mappingValue) {
                case "#microsoft.graph.iosMobileAppConfiguration":
                    return deserializeIntoIosMobileAppConfiguration;
            }
        }
    }
    return deserializeIntoManagedDeviceMobileAppConfiguration;
}
