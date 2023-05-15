import {AuthenticationMethodModeDetail} from './authenticationMethodModeDetail';
import {AuthenticationMethodModeDetailCollectionResponse} from './authenticationMethodModeDetailCollectionResponse';
import {serializeAuthenticationMethodModeDetail} from './serializeAuthenticationMethodModeDetail';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAuthenticationMethodModeDetailCollectionResponse(writer: SerializationWriter, authenticationMethodModeDetailCollectionResponse: AuthenticationMethodModeDetailCollectionResponse | undefined = {} as AuthenticationMethodModeDetailCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, authenticationMethodModeDetailCollectionResponse)
        writer.writeCollectionOfObjectValues<AuthenticationMethodModeDetail>("value", authenticationMethodModeDetailCollectionResponse.value, serializeAuthenticationMethodModeDetail);
}
