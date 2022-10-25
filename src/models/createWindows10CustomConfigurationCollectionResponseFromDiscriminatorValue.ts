import {Windows10CustomConfigurationCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createWindows10CustomConfigurationCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : Windows10CustomConfigurationCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Windows10CustomConfigurationCollectionResponse();
}
