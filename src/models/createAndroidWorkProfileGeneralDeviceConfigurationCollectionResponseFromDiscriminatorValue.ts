import {AndroidWorkProfileGeneralDeviceConfigurationCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAndroidWorkProfileGeneralDeviceConfigurationCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : AndroidWorkProfileGeneralDeviceConfigurationCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new AndroidWorkProfileGeneralDeviceConfigurationCollectionResponse();
}
