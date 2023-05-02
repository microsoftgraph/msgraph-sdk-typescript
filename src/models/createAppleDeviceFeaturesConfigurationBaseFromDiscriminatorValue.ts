import {deserializeIntoAppleDeviceFeaturesConfigurationBase} from './deserializeIntoAppleDeviceFeaturesConfigurationBase';
import {deserializeIntoIosDeviceFeaturesConfiguration} from './deserializeIntoIosDeviceFeaturesConfiguration';
import {deserializeIntoMacOSDeviceFeaturesConfiguration} from './deserializeIntoMacOSDeviceFeaturesConfiguration';
import {AppleDeviceFeaturesConfigurationBase, IosDeviceFeaturesConfiguration, MacOSDeviceFeaturesConfiguration} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAppleDeviceFeaturesConfigurationBaseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    const mappingValueNode = parseNode.getChildNode("@odata.type");
    if (mappingValueNode) {
        const mappingValue = mappingValueNode.getStringValue();
        if (mappingValue) {
            switch (mappingValue) {
                case "#microsoft.graph.iosDeviceFeaturesConfiguration":
                    return deserializeIntoIosDeviceFeaturesConfiguration;
                case "#microsoft.graph.macOSDeviceFeaturesConfiguration":
                    return deserializeIntoMacOSDeviceFeaturesConfiguration;
            }
        }
    }
    return deserializeIntoAppleDeviceFeaturesConfigurationBase;
}
