import { deserializeIntoAuthenticationMethod } from './deserializeIntoAuthenticationMethod';
import { type EmailAuthenticationMethod } from './emailAuthenticationMethod';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoEmailAuthenticationMethod(emailAuthenticationMethod: EmailAuthenticationMethod | undefined = {} as EmailAuthenticationMethod) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoAuthenticationMethod(emailAuthenticationMethod),
        "emailAddress": n => { emailAuthenticationMethod.emailAddress = n.getStringValue(); },
    }
}
