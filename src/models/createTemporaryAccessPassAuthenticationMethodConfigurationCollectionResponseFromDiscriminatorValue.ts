import {TemporaryAccessPassAuthenticationMethodConfigurationCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createTemporaryAccessPassAuthenticationMethodConfigurationCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : TemporaryAccessPassAuthenticationMethodConfigurationCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new TemporaryAccessPassAuthenticationMethodConfigurationCollectionResponse();
}
