import {AuthenticationCombinationConfiguration} from './authenticationCombinationConfiguration';
import {AuthenticationCombinationConfigurationCollectionResponse} from './authenticationCombinationConfigurationCollectionResponse';
import {createAuthenticationCombinationConfigurationFromDiscriminatorValue} from './createAuthenticationCombinationConfigurationFromDiscriminatorValue';
import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {serializeAuthenticationCombinationConfiguration} from './serializeAuthenticationCombinationConfiguration';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoAuthenticationCombinationConfigurationCollectionResponse(authenticationCombinationConfigurationCollectionResponse: AuthenticationCombinationConfigurationCollectionResponse | undefined = {} as AuthenticationCombinationConfigurationCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(authenticationCombinationConfigurationCollectionResponse),
        "value": n => { authenticationCombinationConfigurationCollectionResponse.value = n.getCollectionOfObjectValues<AuthenticationCombinationConfiguration>(createAuthenticationCombinationConfigurationFromDiscriminatorValue); },
    }
}
