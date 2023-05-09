import {ConversationMemberRoleUpdatedEventMessageDetail} from './conversationMemberRoleUpdatedEventMessageDetail';
import {createIdentitySetFromDiscriminatorValue} from './createIdentitySetFromDiscriminatorValue';
import {createTeamworkUserIdentityFromDiscriminatorValue} from './createTeamworkUserIdentityFromDiscriminatorValue';
import {deserializeIntoEventMessageDetail} from './deserializeIntoEventMessageDetail';
import {IdentitySet} from './identitySet';
import {serializeIdentitySet} from './serializeIdentitySet';
import {serializeTeamworkUserIdentity} from './serializeTeamworkUserIdentity';
import {TeamworkUserIdentity} from './teamworkUserIdentity';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoConversationMemberRoleUpdatedEventMessageDetail(conversationMemberRoleUpdatedEventMessageDetail: ConversationMemberRoleUpdatedEventMessageDetail | undefined = {} as ConversationMemberRoleUpdatedEventMessageDetail) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEventMessageDetail(conversationMemberRoleUpdatedEventMessageDetail),
        "conversationMemberRoles": n => { conversationMemberRoleUpdatedEventMessageDetail.conversationMemberRoles = n.getCollectionOfPrimitiveValues<string>(); },
        "conversationMemberUser": n => { conversationMemberRoleUpdatedEventMessageDetail.conversationMemberUser = n.getObjectValue<TeamworkUserIdentity>(createTeamworkUserIdentityFromDiscriminatorValue); },
        "initiator": n => { conversationMemberRoleUpdatedEventMessageDetail.initiator = n.getObjectValue<IdentitySet>(createIdentitySetFromDiscriminatorValue); },
    }
}
