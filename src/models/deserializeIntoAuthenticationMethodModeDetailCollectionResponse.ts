import { type AuthenticationMethodModeDetail } from './authenticationMethodModeDetail';
import { type AuthenticationMethodModeDetailCollectionResponse } from './authenticationMethodModeDetailCollectionResponse';
import { createAuthenticationMethodModeDetailFromDiscriminatorValue } from './createAuthenticationMethodModeDetailFromDiscriminatorValue';
import { deserializeIntoBaseCollectionPaginationCountResponse } from './deserializeIntoBaseCollectionPaginationCountResponse';
import { serializeAuthenticationMethodModeDetail } from './serializeAuthenticationMethodModeDetail';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoAuthenticationMethodModeDetailCollectionResponse(authenticationMethodModeDetailCollectionResponse: AuthenticationMethodModeDetailCollectionResponse | undefined = {} as AuthenticationMethodModeDetailCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(authenticationMethodModeDetailCollectionResponse),
        "value": n => { authenticationMethodModeDetailCollectionResponse.value = n.getCollectionOfObjectValues<AuthenticationMethodModeDetail>(createAuthenticationMethodModeDetailFromDiscriminatorValue); },
    }
}
