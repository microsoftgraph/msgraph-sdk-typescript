import {MacOSDeviceFeaturesConfigurationImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMacOSDeviceFeaturesConfigurationFromDiscriminatorValue(parseNode: ParseNode | undefined) : MacOSDeviceFeaturesConfigurationImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new MacOSDeviceFeaturesConfigurationImpl();
}
