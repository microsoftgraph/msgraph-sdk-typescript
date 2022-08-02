import {MacOSDeviceFeaturesConfiguration} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMacOSDeviceFeaturesConfigurationFromDiscriminatorValue(parseNode: ParseNode | undefined) : MacOSDeviceFeaturesConfiguration {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new MacOSDeviceFeaturesConfiguration();
}
