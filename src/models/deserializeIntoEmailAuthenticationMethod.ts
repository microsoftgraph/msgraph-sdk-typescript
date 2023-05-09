import {deserializeIntoAuthenticationMethod} from './deserializeIntoAuthenticationMethod';
import {EmailAuthenticationMethod} from './emailAuthenticationMethod';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoEmailAuthenticationMethod(emailAuthenticationMethod: EmailAuthenticationMethod | undefined = {} as EmailAuthenticationMethod) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoAuthenticationMethod(emailAuthenticationMethod),
        "emailAddress": n => { emailAuthenticationMethod.emailAddress = n.getStringValue(); },
    }
}
