import type {AuthenticationMethod} from './authenticationMethod';
import type {AuthenticationMethodCollectionResponse} from './authenticationMethodCollectionResponse';
import {createAuthenticationMethodFromDiscriminatorValue} from './createAuthenticationMethodFromDiscriminatorValue';
import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {serializeAuthenticationMethod} from './serializeAuthenticationMethod';
import type {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoAuthenticationMethodCollectionResponse(authenticationMethodCollectionResponse: AuthenticationMethodCollectionResponse | undefined = {} as AuthenticationMethodCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(authenticationMethodCollectionResponse),
        "value": n => { authenticationMethodCollectionResponse.value = n.getCollectionOfObjectValues<AuthenticationMethod>(createAuthenticationMethodFromDiscriminatorValue); },
    }
}
