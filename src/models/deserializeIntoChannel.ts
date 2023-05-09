import {Channel} from './channel';
import {ChannelMembershipType} from './channelMembershipType';
import {ChatMessage} from './chatMessage';
import {ConversationMember} from './conversationMember';
import {createChatMessageFromDiscriminatorValue} from './createChatMessageFromDiscriminatorValue';
import {createConversationMemberFromDiscriminatorValue} from './createConversationMemberFromDiscriminatorValue';
import {createDriveItemFromDiscriminatorValue} from './createDriveItemFromDiscriminatorValue';
import {createSharedWithChannelTeamInfoFromDiscriminatorValue} from './createSharedWithChannelTeamInfoFromDiscriminatorValue';
import {createTeamsTabFromDiscriminatorValue} from './createTeamsTabFromDiscriminatorValue';
import {deserializeIntoEntity} from './deserializeIntoEntity';
import {DriveItem} from './driveItem';
import {serializeChatMessage} from './serializeChatMessage';
import {serializeConversationMember} from './serializeConversationMember';
import {serializeDriveItem} from './serializeDriveItem';
import {serializeSharedWithChannelTeamInfo} from './serializeSharedWithChannelTeamInfo';
import {serializeTeamsTab} from './serializeTeamsTab';
import {SharedWithChannelTeamInfo} from './sharedWithChannelTeamInfo';
import {TeamsTab} from './teamsTab';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoChannel(channel: Channel | undefined = {} as Channel) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(channel),
        "createdDateTime": n => { channel.createdDateTime = n.getDateValue(); },
        "description": n => { channel.description = n.getStringValue(); },
        "displayName": n => { channel.displayName = n.getStringValue(); },
        "email": n => { channel.email = n.getStringValue(); },
        "filesFolder": n => { channel.filesFolder = n.getObjectValue<DriveItem>(createDriveItemFromDiscriminatorValue); },
        "isFavoriteByDefault": n => { channel.isFavoriteByDefault = n.getBooleanValue(); },
        "members": n => { channel.members = n.getCollectionOfObjectValues<ConversationMember>(createConversationMemberFromDiscriminatorValue); },
        "membershipType": n => { channel.membershipType = n.getEnumValue<ChannelMembershipType>(ChannelMembershipType); },
        "messages": n => { channel.messages = n.getCollectionOfObjectValues<ChatMessage>(createChatMessageFromDiscriminatorValue); },
        "sharedWithTeams": n => { channel.sharedWithTeams = n.getCollectionOfObjectValues<SharedWithChannelTeamInfo>(createSharedWithChannelTeamInfoFromDiscriminatorValue); },
        "tabs": n => { channel.tabs = n.getCollectionOfObjectValues<TeamsTab>(createTeamsTabFromDiscriminatorValue); },
        "tenantId": n => { channel.tenantId = n.getStringValue(); },
        "webUrl": n => { channel.webUrl = n.getStringValue(); },
    }
}
