import { type AuthenticationMethodModeDetail } from './authenticationMethodModeDetail';
import { type AuthenticationMethodModeDetailCollectionResponse } from './authenticationMethodModeDetailCollectionResponse';
import { serializeAuthenticationMethodModeDetail } from './serializeAuthenticationMethodModeDetail';
import { serializeBaseCollectionPaginationCountResponse } from './serializeBaseCollectionPaginationCountResponse';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeAuthenticationMethodModeDetailCollectionResponse(writer: SerializationWriter, authenticationMethodModeDetailCollectionResponse: AuthenticationMethodModeDetailCollectionResponse | undefined = {} as AuthenticationMethodModeDetailCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, authenticationMethodModeDetailCollectionResponse)
        writer.writeCollectionOfObjectValues<AuthenticationMethodModeDetail>("value", authenticationMethodModeDetailCollectionResponse.value, serializeAuthenticationMethodModeDetail);
}
