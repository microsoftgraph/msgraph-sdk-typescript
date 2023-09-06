import { type EmailAuthenticationMethod } from './emailAuthenticationMethod';
import { type EmailAuthenticationMethodCollectionResponse } from './emailAuthenticationMethodCollectionResponse';
import { serializeBaseCollectionPaginationCountResponse } from './serializeBaseCollectionPaginationCountResponse';
import { serializeEmailAuthenticationMethod } from './serializeEmailAuthenticationMethod';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeEmailAuthenticationMethodCollectionResponse(writer: SerializationWriter, emailAuthenticationMethodCollectionResponse: EmailAuthenticationMethodCollectionResponse | undefined = {} as EmailAuthenticationMethodCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, emailAuthenticationMethodCollectionResponse)
        writer.writeCollectionOfObjectValues<EmailAuthenticationMethod>("value", emailAuthenticationMethodCollectionResponse.value, serializeEmailAuthenticationMethod);
}
