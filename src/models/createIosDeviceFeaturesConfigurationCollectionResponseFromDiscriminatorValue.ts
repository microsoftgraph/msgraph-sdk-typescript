import {IosDeviceFeaturesConfigurationCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createIosDeviceFeaturesConfigurationCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : IosDeviceFeaturesConfigurationCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new IosDeviceFeaturesConfigurationCollectionResponse();
}
