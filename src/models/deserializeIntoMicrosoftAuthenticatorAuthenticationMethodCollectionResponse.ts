import {createMicrosoftAuthenticatorAuthenticationMethodFromDiscriminatorValue} from './createMicrosoftAuthenticatorAuthenticationMethodFromDiscriminatorValue';
import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import type {MicrosoftAuthenticatorAuthenticationMethod} from './microsoftAuthenticatorAuthenticationMethod';
import type {MicrosoftAuthenticatorAuthenticationMethodCollectionResponse} from './microsoftAuthenticatorAuthenticationMethodCollectionResponse';
import {serializeMicrosoftAuthenticatorAuthenticationMethod} from './serializeMicrosoftAuthenticatorAuthenticationMethod';
import type {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoMicrosoftAuthenticatorAuthenticationMethodCollectionResponse(microsoftAuthenticatorAuthenticationMethodCollectionResponse: MicrosoftAuthenticatorAuthenticationMethodCollectionResponse | undefined = {} as MicrosoftAuthenticatorAuthenticationMethodCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(microsoftAuthenticatorAuthenticationMethodCollectionResponse),
        "value": n => { microsoftAuthenticatorAuthenticationMethodCollectionResponse.value = n.getCollectionOfObjectValues<MicrosoftAuthenticatorAuthenticationMethod>(createMicrosoftAuthenticatorAuthenticationMethodFromDiscriminatorValue); },
    }
}
