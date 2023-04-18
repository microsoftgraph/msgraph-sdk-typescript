import {AuthenticationMethodModeDetailCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAuthenticationMethodModeDetailCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : AuthenticationMethodModeDetailCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new AuthenticationMethodModeDetailCollectionResponse();
}
