import {IosUpdateConfigurationCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createIosUpdateConfigurationCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : IosUpdateConfigurationCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new IosUpdateConfigurationCollectionResponse();
}
