import {deserializeIntoAndroidGeneralDeviceConfiguration} from './deserializeIntoAndroidGeneralDeviceConfiguration';
import {AndroidGeneralDeviceConfiguration} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAndroidGeneralDeviceConfigurationFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoAndroidGeneralDeviceConfiguration;
}
