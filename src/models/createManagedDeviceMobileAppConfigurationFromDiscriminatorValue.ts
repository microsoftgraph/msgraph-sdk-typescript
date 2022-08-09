import {IosMobileAppConfiguration, ManagedDeviceMobileAppConfiguration} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createManagedDeviceMobileAppConfigurationFromDiscriminatorValue(parseNode: ParseNode | undefined) : ManagedDeviceMobileAppConfiguration {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    const mappingValueNode = parseNode.getChildNode("@odata.type");
    if (mappingValueNode) {
        const mappingValue = mappingValueNode.getStringValue();
        if (mappingValue) {
            switch (mappingValue) {
                case "#microsoft.graph.iosMobileAppConfiguration":
                    return new IosMobileAppConfiguration();
            }
        }
    }
    return new ManagedDeviceMobileAppConfiguration();
}
