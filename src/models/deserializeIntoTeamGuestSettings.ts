import {TeamGuestSettings} from './teamGuestSettings';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoTeamGuestSettings(teamGuestSettings: TeamGuestSettings | undefined = {} as TeamGuestSettings) : Record<string, (node: ParseNode) => void> {
    return {
        "allowCreateUpdateChannels": n => { teamGuestSettings.allowCreateUpdateChannels = n.getBooleanValue(); },
        "allowDeleteChannels": n => { teamGuestSettings.allowDeleteChannels = n.getBooleanValue(); },
        "@odata.type": n => { teamGuestSettings.odataType = n.getStringValue(); },
    }
}
