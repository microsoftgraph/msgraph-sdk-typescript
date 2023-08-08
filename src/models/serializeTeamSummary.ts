import type {TeamSummary} from './teamSummary';
import type {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeTeamSummary(writer: SerializationWriter, teamSummary: TeamSummary | undefined = {} as TeamSummary) : void {
        writer.writeNumberValue("guestsCount", teamSummary.guestsCount);
        writer.writeNumberValue("membersCount", teamSummary.membersCount);
        writer.writeStringValue("@odata.type", teamSummary.odataType);
        writer.writeNumberValue("ownersCount", teamSummary.ownersCount);
        writer.writeAdditionalData(teamSummary.additionalData);
}
