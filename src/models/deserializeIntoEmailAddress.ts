import { type EmailAddress } from './emailAddress';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoEmailAddress(emailAddress: EmailAddress | undefined = {} as EmailAddress) : Record<string, (node: ParseNode) => void> {
    return {
        "address": n => { emailAddress.address = n.getStringValue(); },
        "name": n => { emailAddress.name = n.getStringValue(); },
        "@odata.type": n => { emailAddress.odataType = n.getStringValue(); },
    }
}
