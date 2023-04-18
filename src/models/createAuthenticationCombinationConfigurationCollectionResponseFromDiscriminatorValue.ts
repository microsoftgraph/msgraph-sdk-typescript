import {AuthenticationCombinationConfigurationCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAuthenticationCombinationConfigurationCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : AuthenticationCombinationConfigurationCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new AuthenticationCombinationConfigurationCollectionResponse();
}
