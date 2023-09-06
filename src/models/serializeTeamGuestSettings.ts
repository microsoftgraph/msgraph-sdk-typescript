import { type TeamGuestSettings } from './teamGuestSettings';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeTeamGuestSettings(writer: SerializationWriter, teamGuestSettings: TeamGuestSettings | undefined = {} as TeamGuestSettings) : void {
        writer.writeBooleanValue("allowCreateUpdateChannels", teamGuestSettings.allowCreateUpdateChannels);
        writer.writeBooleanValue("allowDeleteChannels", teamGuestSettings.allowDeleteChannels);
        writer.writeStringValue("@odata.type", teamGuestSettings.odataType);
        writer.writeAdditionalData(teamGuestSettings.additionalData);
}
