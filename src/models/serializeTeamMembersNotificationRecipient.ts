import { serializeTeamworkNotificationRecipient } from './serializeTeamworkNotificationRecipient';
import { type TeamMembersNotificationRecipient } from './teamMembersNotificationRecipient';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeTeamMembersNotificationRecipient(writer: SerializationWriter, teamMembersNotificationRecipient: TeamMembersNotificationRecipient | undefined = {} as TeamMembersNotificationRecipient) : void {
        serializeTeamworkNotificationRecipient(writer, teamMembersNotificationRecipient)
        writer.writeStringValue("teamId", teamMembersNotificationRecipient.teamId);
}
