import { deserializeIntoIdentity } from './deserializeIntoIdentity';
import { type EmailIdentity } from './emailIdentity';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoEmailIdentity(emailIdentity: EmailIdentity | undefined = {} as EmailIdentity) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoIdentity(emailIdentity),
        "email": n => { emailIdentity.email = n.getStringValue(); },
    }
}
