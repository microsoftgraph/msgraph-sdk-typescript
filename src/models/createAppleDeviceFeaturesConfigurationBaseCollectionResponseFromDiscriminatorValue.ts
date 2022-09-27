import {AppleDeviceFeaturesConfigurationBaseCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAppleDeviceFeaturesConfigurationBaseCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : AppleDeviceFeaturesConfigurationBaseCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new AppleDeviceFeaturesConfigurationBaseCollectionResponse();
}
