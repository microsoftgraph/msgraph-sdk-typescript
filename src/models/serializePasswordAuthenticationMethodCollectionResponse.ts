import { type PasswordAuthenticationMethod } from './passwordAuthenticationMethod';
import { type PasswordAuthenticationMethodCollectionResponse } from './passwordAuthenticationMethodCollectionResponse';
import { serializeBaseCollectionPaginationCountResponse } from './serializeBaseCollectionPaginationCountResponse';
import { serializePasswordAuthenticationMethod } from './serializePasswordAuthenticationMethod';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializePasswordAuthenticationMethodCollectionResponse(writer: SerializationWriter, passwordAuthenticationMethodCollectionResponse: PasswordAuthenticationMethodCollectionResponse | undefined = {} as PasswordAuthenticationMethodCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, passwordAuthenticationMethodCollectionResponse)
        writer.writeCollectionOfObjectValues<PasswordAuthenticationMethod>("value", passwordAuthenticationMethodCollectionResponse.value, serializePasswordAuthenticationMethod);
}
