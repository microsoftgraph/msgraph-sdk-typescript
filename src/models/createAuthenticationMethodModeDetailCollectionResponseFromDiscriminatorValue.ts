import {deserializeIntoAuthenticationMethodModeDetailCollectionResponse} from './deserializeIntoAuthenticationMethodModeDetailCollectionResponse';
import {AuthenticationMethodModeDetailCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAuthenticationMethodModeDetailCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoAuthenticationMethodModeDetailCollectionResponse;
}
