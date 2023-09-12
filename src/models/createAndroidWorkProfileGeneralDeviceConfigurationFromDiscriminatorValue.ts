import { deserializeIntoAndroidWorkProfileGeneralDeviceConfiguration } from './deserializeIntoAndroidWorkProfileGeneralDeviceConfiguration';
import { type AndroidWorkProfileGeneralDeviceConfiguration } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createAndroidWorkProfileGeneralDeviceConfigurationFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoAndroidWorkProfileGeneralDeviceConfiguration;
}
