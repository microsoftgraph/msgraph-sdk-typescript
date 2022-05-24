import {DeviceConfigurationImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createDeviceConfigurationFromDiscriminatorValue(parseNode: ParseNode | undefined) : DeviceConfigurationImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    const mappingValueNode = parseNode.getChildNode("@odata.type");
    if (mappingValueNode) {
        const mappingValue = mappingValueNode.getStringValue();
        if (mappingValue) {
            switch (mappingValue) {
                case "#microsoft.graph.deviceConfiguration":
                    return new DeviceConfigurationImpl();
            }
        }
    }
    return new DeviceConfigurationImpl();
}
