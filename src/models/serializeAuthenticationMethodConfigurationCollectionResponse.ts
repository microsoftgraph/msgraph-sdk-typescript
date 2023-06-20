import {AuthenticationMethodConfiguration} from './authenticationMethodConfiguration';
import {AuthenticationMethodConfigurationCollectionResponse} from './authenticationMethodConfigurationCollectionResponse';
import {serializeAuthenticationMethodConfiguration} from './serializeAuthenticationMethodConfiguration';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAuthenticationMethodConfigurationCollectionResponse(authenticationMethodConfigurationCollectionResponse: AuthenticationMethodConfigurationCollectionResponse | undefined = {} as AuthenticationMethodConfigurationCollectionResponse, writer: SerializationWriter) : void {
        serializeBaseCollectionPaginationCountResponse(writer, authenticationMethodConfigurationCollectionResponse)
        writer.writeCollectionOfObjectValues<AuthenticationMethodConfiguration>("value", authenticationMethodConfigurationCollectionResponse.value, serializeAuthenticationMethodConfiguration);
}
