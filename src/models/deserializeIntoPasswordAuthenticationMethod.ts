import { deserializeIntoAuthenticationMethod } from './deserializeIntoAuthenticationMethod';
import { type PasswordAuthenticationMethod } from './passwordAuthenticationMethod';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoPasswordAuthenticationMethod(passwordAuthenticationMethod: PasswordAuthenticationMethod | undefined = {} as PasswordAuthenticationMethod) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoAuthenticationMethod(passwordAuthenticationMethod),
        "createdDateTime": n => { passwordAuthenticationMethod.createdDateTime = n.getDateValue(); },
        "password": n => { passwordAuthenticationMethod.password = n.getStringValue(); },
    }
}
