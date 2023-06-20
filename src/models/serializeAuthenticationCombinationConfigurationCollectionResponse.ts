import {AuthenticationCombinationConfiguration} from './authenticationCombinationConfiguration';
import {AuthenticationCombinationConfigurationCollectionResponse} from './authenticationCombinationConfigurationCollectionResponse';
import {serializeAuthenticationCombinationConfiguration} from './serializeAuthenticationCombinationConfiguration';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAuthenticationCombinationConfigurationCollectionResponse(authenticationCombinationConfigurationCollectionResponse: AuthenticationCombinationConfigurationCollectionResponse | undefined = {} as AuthenticationCombinationConfigurationCollectionResponse, writer: SerializationWriter) : void {
        serializeBaseCollectionPaginationCountResponse(writer, authenticationCombinationConfigurationCollectionResponse)
        writer.writeCollectionOfObjectValues<AuthenticationCombinationConfiguration>("value", authenticationCombinationConfigurationCollectionResponse.value, serializeAuthenticationCombinationConfiguration);
}
