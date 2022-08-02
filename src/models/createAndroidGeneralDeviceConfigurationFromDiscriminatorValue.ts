import {AndroidGeneralDeviceConfiguration} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAndroidGeneralDeviceConfigurationFromDiscriminatorValue(parseNode: ParseNode | undefined) : AndroidGeneralDeviceConfiguration {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new AndroidGeneralDeviceConfiguration();
}
