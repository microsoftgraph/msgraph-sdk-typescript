import {TeamMessagingSettings} from './teamMessagingSettings';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeTeamMessagingSettings(writer: SerializationWriter, teamMessagingSettings: TeamMessagingSettings | undefined = {} as TeamMessagingSettings) : void {
        writer.writeBooleanValue("allowChannelMentions", teamMessagingSettings.allowChannelMentions);
        writer.writeBooleanValue("allowOwnerDeleteMessages", teamMessagingSettings.allowOwnerDeleteMessages);
        writer.writeBooleanValue("allowTeamMentions", teamMessagingSettings.allowTeamMentions);
        writer.writeBooleanValue("allowUserDeleteMessages", teamMessagingSettings.allowUserDeleteMessages);
        writer.writeBooleanValue("allowUserEditMessages", teamMessagingSettings.allowUserEditMessages);
        writer.writeStringValue("@odata.type", teamMessagingSettings.odataType);
        writer.writeAdditionalData(teamMessagingSettings.additionalData);
}
