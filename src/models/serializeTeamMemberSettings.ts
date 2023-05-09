import {TeamMemberSettings} from './teamMemberSettings';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeTeamMemberSettings(writer: SerializationWriter, teamMemberSettings: TeamMemberSettings | undefined = {} as TeamMemberSettings) : void {
        writer.writeBooleanValue("allowAddRemoveApps", teamMemberSettings.allowAddRemoveApps);
        writer.writeBooleanValue("allowCreatePrivateChannels", teamMemberSettings.allowCreatePrivateChannels);
        writer.writeBooleanValue("allowCreateUpdateChannels", teamMemberSettings.allowCreateUpdateChannels);
        writer.writeBooleanValue("allowCreateUpdateRemoveConnectors", teamMemberSettings.allowCreateUpdateRemoveConnectors);
        writer.writeBooleanValue("allowCreateUpdateRemoveTabs", teamMemberSettings.allowCreateUpdateRemoveTabs);
        writer.writeBooleanValue("allowDeleteChannels", teamMemberSettings.allowDeleteChannels);
        writer.writeStringValue("@odata.type", teamMemberSettings.odataType);
        writer.writeAdditionalData(teamMemberSettings.additionalData);
}
