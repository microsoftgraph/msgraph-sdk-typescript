import {IosCustomConfigurationCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createIosCustomConfigurationCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : IosCustomConfigurationCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new IosCustomConfigurationCollectionResponse();
}
