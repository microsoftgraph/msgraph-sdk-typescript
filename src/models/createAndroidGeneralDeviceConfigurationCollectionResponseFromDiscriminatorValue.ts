import {AndroidGeneralDeviceConfigurationCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAndroidGeneralDeviceConfigurationCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : AndroidGeneralDeviceConfigurationCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new AndroidGeneralDeviceConfigurationCollectionResponse();
}
