import {AndroidWorkProfileGeneralDeviceConfiguration} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAndroidWorkProfileGeneralDeviceConfigurationFromDiscriminatorValue(parseNode: ParseNode | undefined) : AndroidWorkProfileGeneralDeviceConfiguration {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new AndroidWorkProfileGeneralDeviceConfiguration();
}
