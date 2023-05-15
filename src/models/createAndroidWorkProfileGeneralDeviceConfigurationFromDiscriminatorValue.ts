import {deserializeIntoAndroidWorkProfileGeneralDeviceConfiguration} from './deserializeIntoAndroidWorkProfileGeneralDeviceConfiguration';
import {AndroidWorkProfileGeneralDeviceConfiguration} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAndroidWorkProfileGeneralDeviceConfigurationFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoAndroidWorkProfileGeneralDeviceConfiguration;
}
