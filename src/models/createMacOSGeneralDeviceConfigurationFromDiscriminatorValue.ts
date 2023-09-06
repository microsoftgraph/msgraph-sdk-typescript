import { deserializeIntoMacOSGeneralDeviceConfiguration } from './deserializeIntoMacOSGeneralDeviceConfiguration';
import { type MacOSGeneralDeviceConfiguration } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createMacOSGeneralDeviceConfigurationFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoMacOSGeneralDeviceConfiguration;
}
