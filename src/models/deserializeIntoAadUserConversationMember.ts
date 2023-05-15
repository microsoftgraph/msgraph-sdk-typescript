import {AadUserConversationMember} from './aadUserConversationMember';
import {createUserFromDiscriminatorValue} from './createUserFromDiscriminatorValue';
import {deserializeIntoConversationMember} from './deserializeIntoConversationMember';
import {serializeUser} from './serializeUser';
import {User} from './user';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoAadUserConversationMember(aadUserConversationMember: AadUserConversationMember | undefined = {} as AadUserConversationMember) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoConversationMember(aadUserConversationMember),
        "email": n => { aadUserConversationMember.email = n.getStringValue(); },
        "tenantId": n => { aadUserConversationMember.tenantId = n.getStringValue(); },
        "user": n => { aadUserConversationMember.user = n.getObjectValue<User>(createUserFromDiscriminatorValue); },
        "userId": n => { aadUserConversationMember.userId = n.getStringValue(); },
    }
}
