import type {AuthenticationMethod} from './authenticationMethod';
import type {AuthenticationMethodCollectionResponse} from './authenticationMethodCollectionResponse';
import {serializeAuthenticationMethod} from './serializeAuthenticationMethod';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAuthenticationMethodCollectionResponse(writer: SerializationWriter, authenticationMethodCollectionResponse: AuthenticationMethodCollectionResponse | undefined = {} as AuthenticationMethodCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, authenticationMethodCollectionResponse)
        writer.writeCollectionOfObjectValues<AuthenticationMethod>("value", authenticationMethodCollectionResponse.value, serializeAuthenticationMethod);
}
