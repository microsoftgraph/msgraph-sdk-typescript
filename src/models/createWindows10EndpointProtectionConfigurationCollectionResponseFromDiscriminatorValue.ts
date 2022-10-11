import {Windows10EndpointProtectionConfigurationCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createWindows10EndpointProtectionConfigurationCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : Windows10EndpointProtectionConfigurationCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Windows10EndpointProtectionConfigurationCollectionResponse();
}
