import { deserializeIntoAndroidGeneralDeviceConfiguration } from './deserializeIntoAndroidGeneralDeviceConfiguration';
import { type AndroidGeneralDeviceConfiguration } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createAndroidGeneralDeviceConfigurationFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoAndroidGeneralDeviceConfiguration;
}
