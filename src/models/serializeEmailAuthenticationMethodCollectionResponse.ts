import {EmailAuthenticationMethod} from './emailAuthenticationMethod';
import {EmailAuthenticationMethodCollectionResponse} from './emailAuthenticationMethodCollectionResponse';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeEmailAuthenticationMethod} from './serializeEmailAuthenticationMethod';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeEmailAuthenticationMethodCollectionResponse(writer: SerializationWriter, emailAuthenticationMethodCollectionResponse: EmailAuthenticationMethodCollectionResponse | undefined = {} as EmailAuthenticationMethodCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, emailAuthenticationMethodCollectionResponse)
        writer.writeCollectionOfObjectValues<EmailAuthenticationMethod>("value", emailAuthenticationMethodCollectionResponse.value, serializeEmailAuthenticationMethod);
}
