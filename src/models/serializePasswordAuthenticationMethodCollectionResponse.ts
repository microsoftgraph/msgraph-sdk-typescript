import {PasswordAuthenticationMethod} from './passwordAuthenticationMethod';
import {PasswordAuthenticationMethodCollectionResponse} from './passwordAuthenticationMethodCollectionResponse';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializePasswordAuthenticationMethod} from './serializePasswordAuthenticationMethod';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializePasswordAuthenticationMethodCollectionResponse(writer: SerializationWriter, passwordAuthenticationMethodCollectionResponse: PasswordAuthenticationMethodCollectionResponse | undefined = {} as PasswordAuthenticationMethodCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, passwordAuthenticationMethodCollectionResponse)
        writer.writeCollectionOfObjectValues<PasswordAuthenticationMethod>("value", passwordAuthenticationMethodCollectionResponse.value, serializePasswordAuthenticationMethod);
}
