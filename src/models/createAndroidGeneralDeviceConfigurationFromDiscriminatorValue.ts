import {AndroidGeneralDeviceConfigurationImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAndroidGeneralDeviceConfigurationFromDiscriminatorValue(parseNode: ParseNode | undefined) : AndroidGeneralDeviceConfigurationImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new AndroidGeneralDeviceConfigurationImpl();
}
