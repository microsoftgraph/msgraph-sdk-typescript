import { createEmailAuthenticationMethodFromDiscriminatorValue } from './createEmailAuthenticationMethodFromDiscriminatorValue';
import { deserializeIntoBaseCollectionPaginationCountResponse } from './deserializeIntoBaseCollectionPaginationCountResponse';
import { type EmailAuthenticationMethod } from './emailAuthenticationMethod';
import { type EmailAuthenticationMethodCollectionResponse } from './emailAuthenticationMethodCollectionResponse';
import { serializeEmailAuthenticationMethod } from './serializeEmailAuthenticationMethod';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoEmailAuthenticationMethodCollectionResponse(emailAuthenticationMethodCollectionResponse: EmailAuthenticationMethodCollectionResponse | undefined = {} as EmailAuthenticationMethodCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(emailAuthenticationMethodCollectionResponse),
        "value": n => { emailAuthenticationMethodCollectionResponse.value = n.getCollectionOfObjectValues<EmailAuthenticationMethod>(createEmailAuthenticationMethodFromDiscriminatorValue); },
    }
}
