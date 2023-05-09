import {TeamMessagingSettings} from './teamMessagingSettings';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoTeamMessagingSettings(teamMessagingSettings: TeamMessagingSettings | undefined = {} as TeamMessagingSettings) : Record<string, (node: ParseNode) => void> {
    return {
        "allowChannelMentions": n => { teamMessagingSettings.allowChannelMentions = n.getBooleanValue(); },
        "allowOwnerDeleteMessages": n => { teamMessagingSettings.allowOwnerDeleteMessages = n.getBooleanValue(); },
        "allowTeamMentions": n => { teamMessagingSettings.allowTeamMentions = n.getBooleanValue(); },
        "allowUserDeleteMessages": n => { teamMessagingSettings.allowUserDeleteMessages = n.getBooleanValue(); },
        "allowUserEditMessages": n => { teamMessagingSettings.allowUserEditMessages = n.getBooleanValue(); },
        "@odata.type": n => { teamMessagingSettings.odataType = n.getStringValue(); },
    }
}
