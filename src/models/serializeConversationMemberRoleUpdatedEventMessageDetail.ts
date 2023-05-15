import {ConversationMemberRoleUpdatedEventMessageDetail} from './conversationMemberRoleUpdatedEventMessageDetail';
import {IdentitySet} from './identitySet';
import {serializeEventMessageDetail} from './serializeEventMessageDetail';
import {serializeIdentitySet} from './serializeIdentitySet';
import {serializeTeamworkUserIdentity} from './serializeTeamworkUserIdentity';
import {TeamworkUserIdentity} from './teamworkUserIdentity';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeConversationMemberRoleUpdatedEventMessageDetail(writer: SerializationWriter, conversationMemberRoleUpdatedEventMessageDetail: ConversationMemberRoleUpdatedEventMessageDetail | undefined = {} as ConversationMemberRoleUpdatedEventMessageDetail) : void {
        serializeEventMessageDetail(writer, conversationMemberRoleUpdatedEventMessageDetail)
        writer.writeCollectionOfPrimitiveValues<string>("conversationMemberRoles", conversationMemberRoleUpdatedEventMessageDetail.conversationMemberRoles);
        writer.writeObjectValue<TeamworkUserIdentity>("conversationMemberUser", conversationMemberRoleUpdatedEventMessageDetail.conversationMemberUser, serializeTeamworkUserIdentity);
        writer.writeObjectValue<IdentitySet>("initiator", conversationMemberRoleUpdatedEventMessageDetail.initiator, serializeIdentitySet);
}
