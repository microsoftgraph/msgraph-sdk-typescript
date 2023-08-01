import type {MicrosoftAuthenticatorAuthenticationMethod} from './microsoftAuthenticatorAuthenticationMethod';
import type {MicrosoftAuthenticatorAuthenticationMethodCollectionResponse} from './microsoftAuthenticatorAuthenticationMethodCollectionResponse';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeMicrosoftAuthenticatorAuthenticationMethod} from './serializeMicrosoftAuthenticatorAuthenticationMethod';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeMicrosoftAuthenticatorAuthenticationMethodCollectionResponse(writer: SerializationWriter, microsoftAuthenticatorAuthenticationMethodCollectionResponse: MicrosoftAuthenticatorAuthenticationMethodCollectionResponse | undefined = {} as MicrosoftAuthenticatorAuthenticationMethodCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, microsoftAuthenticatorAuthenticationMethodCollectionResponse)
        writer.writeCollectionOfObjectValues<MicrosoftAuthenticatorAuthenticationMethod>("value", microsoftAuthenticatorAuthenticationMethodCollectionResponse.value, serializeMicrosoftAuthenticatorAuthenticationMethod);
}
