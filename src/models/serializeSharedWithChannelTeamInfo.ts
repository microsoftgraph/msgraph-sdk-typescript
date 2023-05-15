import {ConversationMember} from './conversationMember';
import {serializeConversationMember} from './serializeConversationMember';
import {serializeTeamInfo} from './serializeTeamInfo';
import {SharedWithChannelTeamInfo} from './sharedWithChannelTeamInfo';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeSharedWithChannelTeamInfo(writer: SerializationWriter, sharedWithChannelTeamInfo: SharedWithChannelTeamInfo | undefined = {} as SharedWithChannelTeamInfo) : void {
        serializeTeamInfo(writer, sharedWithChannelTeamInfo)
        writer.writeCollectionOfObjectValues<ConversationMember>("allowedMembers", sharedWithChannelTeamInfo.allowedMembers, serializeConversationMember);
        writer.writeBooleanValue("isHostTeam", sharedWithChannelTeamInfo.isHostTeam);
}
