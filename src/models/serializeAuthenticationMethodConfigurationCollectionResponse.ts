import type {AuthenticationMethodConfiguration} from './authenticationMethodConfiguration';
import type {AuthenticationMethodConfigurationCollectionResponse} from './authenticationMethodConfigurationCollectionResponse';
import {serializeAuthenticationMethodConfiguration} from './serializeAuthenticationMethodConfiguration';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAuthenticationMethodConfigurationCollectionResponse(writer: SerializationWriter, authenticationMethodConfigurationCollectionResponse: AuthenticationMethodConfigurationCollectionResponse | undefined = {} as AuthenticationMethodConfigurationCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, authenticationMethodConfigurationCollectionResponse)
        writer.writeCollectionOfObjectValues<AuthenticationMethodConfiguration>("value", authenticationMethodConfigurationCollectionResponse.value, serializeAuthenticationMethodConfiguration);
}
