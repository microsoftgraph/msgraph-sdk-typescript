import {AppleDeviceFeaturesConfigurationBaseImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAppleDeviceFeaturesConfigurationBaseFromDiscriminatorValue(parseNode: ParseNode | undefined) : AppleDeviceFeaturesConfigurationBaseImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new AppleDeviceFeaturesConfigurationBaseImpl();
}
