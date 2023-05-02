import {TeamMemberSettings} from './teamMemberSettings';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoTeamMemberSettings(teamMemberSettings: TeamMemberSettings | undefined = {} as TeamMemberSettings) : Record<string, (node: ParseNode) => void> {
    return {
        "allowAddRemoveApps": n => { teamMemberSettings.allowAddRemoveApps = n.getBooleanValue(); },
        "allowCreatePrivateChannels": n => { teamMemberSettings.allowCreatePrivateChannels = n.getBooleanValue(); },
        "allowCreateUpdateChannels": n => { teamMemberSettings.allowCreateUpdateChannels = n.getBooleanValue(); },
        "allowCreateUpdateRemoveConnectors": n => { teamMemberSettings.allowCreateUpdateRemoveConnectors = n.getBooleanValue(); },
        "allowCreateUpdateRemoveTabs": n => { teamMemberSettings.allowCreateUpdateRemoveTabs = n.getBooleanValue(); },
        "allowDeleteChannels": n => { teamMemberSettings.allowDeleteChannels = n.getBooleanValue(); },
        "@odata.type": n => { teamMemberSettings.odataType = n.getStringValue(); },
    }
}
