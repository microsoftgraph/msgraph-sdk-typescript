import {AndroidWorkProfileGeneralDeviceConfigurationImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAndroidWorkProfileGeneralDeviceConfigurationFromDiscriminatorValue(parseNode: ParseNode | undefined) : AndroidWorkProfileGeneralDeviceConfigurationImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new AndroidWorkProfileGeneralDeviceConfigurationImpl();
}
