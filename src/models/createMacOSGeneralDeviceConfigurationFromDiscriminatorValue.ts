import {MacOSGeneralDeviceConfiguration} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMacOSGeneralDeviceConfigurationFromDiscriminatorValue(parseNode: ParseNode | undefined) : MacOSGeneralDeviceConfiguration {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new MacOSGeneralDeviceConfiguration();
}
