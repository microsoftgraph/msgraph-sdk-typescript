import {AppleDeviceFeaturesConfigurationBaseImpl, IosDeviceFeaturesConfigurationImpl, MacOSDeviceFeaturesConfigurationImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAppleDeviceFeaturesConfigurationBaseFromDiscriminatorValue(parseNode: ParseNode | undefined) : AppleDeviceFeaturesConfigurationBaseImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    const mappingValueNode = parseNode.getChildNode("@odata.type");
    if (mappingValueNode) {
        const mappingValue = mappingValueNode.getStringValue();
        if (mappingValue) {
            switch (mappingValue) {
                case "#microsoft.graph.iosDeviceFeaturesConfiguration":
                    return new IosDeviceFeaturesConfigurationImpl();
                case "#microsoft.graph.macOSDeviceFeaturesConfiguration":
                    return new MacOSDeviceFeaturesConfigurationImpl();
            }
        }
    }
    return new AppleDeviceFeaturesConfigurationBaseImpl();
}
