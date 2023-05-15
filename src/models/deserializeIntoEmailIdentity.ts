import {deserializeIntoIdentity} from './deserializeIntoIdentity';
import {EmailIdentity} from './emailIdentity';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoEmailIdentity(emailIdentity: EmailIdentity | undefined = {} as EmailIdentity) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoIdentity(emailIdentity),
        "email": n => { emailIdentity.email = n.getStringValue(); },
    }
}
