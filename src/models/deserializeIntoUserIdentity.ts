import { deserializeIntoIdentity } from './deserializeIntoIdentity';
import { type UserIdentity } from './userIdentity';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoUserIdentity(userIdentity: UserIdentity | undefined = {} as UserIdentity) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoIdentity(userIdentity),
        "ipAddress": n => { userIdentity.ipAddress = n.getStringValue(); },
        "userPrincipalName": n => { userIdentity.userPrincipalName = n.getStringValue(); },
    }
}
