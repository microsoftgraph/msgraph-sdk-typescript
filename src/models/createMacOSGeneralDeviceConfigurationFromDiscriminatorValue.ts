import {deserializeIntoMacOSGeneralDeviceConfiguration} from './deserializeIntoMacOSGeneralDeviceConfiguration';
import {MacOSGeneralDeviceConfiguration} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMacOSGeneralDeviceConfigurationFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoMacOSGeneralDeviceConfiguration;
}
