import type {AuthenticationMethodConfiguration} from './authenticationMethodConfiguration';
import type {AuthenticationMethodConfigurationCollectionResponse} from './authenticationMethodConfigurationCollectionResponse';
import {createAuthenticationMethodConfigurationFromDiscriminatorValue} from './createAuthenticationMethodConfigurationFromDiscriminatorValue';
import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {serializeAuthenticationMethodConfiguration} from './serializeAuthenticationMethodConfiguration';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoAuthenticationMethodConfigurationCollectionResponse(authenticationMethodConfigurationCollectionResponse: AuthenticationMethodConfigurationCollectionResponse | undefined = {} as AuthenticationMethodConfigurationCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(authenticationMethodConfigurationCollectionResponse),
        "value": n => { authenticationMethodConfigurationCollectionResponse.value = n.getCollectionOfObjectValues<AuthenticationMethodConfiguration>(createAuthenticationMethodConfigurationFromDiscriminatorValue); },
    }
}
