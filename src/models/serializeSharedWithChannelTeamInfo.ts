import { type ConversationMember } from './conversationMember';
import { serializeConversationMember } from './serializeConversationMember';
import { serializeTeamInfo } from './serializeTeamInfo';
import { type SharedWithChannelTeamInfo } from './sharedWithChannelTeamInfo';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeSharedWithChannelTeamInfo(writer: SerializationWriter, sharedWithChannelTeamInfo: SharedWithChannelTeamInfo | undefined = {} as SharedWithChannelTeamInfo) : void {
        serializeTeamInfo(writer, sharedWithChannelTeamInfo)
        writer.writeCollectionOfObjectValues<ConversationMember>("allowedMembers", sharedWithChannelTeamInfo.allowedMembers, serializeConversationMember);
        writer.writeBooleanValue("isHostTeam", sharedWithChannelTeamInfo.isHostTeam);
}
