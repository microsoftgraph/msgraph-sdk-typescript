import {MacOSDeviceFeaturesConfigurationCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMacOSDeviceFeaturesConfigurationCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : MacOSDeviceFeaturesConfigurationCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new MacOSDeviceFeaturesConfigurationCollectionResponse();
}
