import { type TeamSummary } from './teamSummary';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoTeamSummary(teamSummary: TeamSummary | undefined = {} as TeamSummary) : Record<string, (node: ParseNode) => void> {
    return {
        "guestsCount": n => { teamSummary.guestsCount = n.getNumberValue(); },
        "membersCount": n => { teamSummary.membersCount = n.getNumberValue(); },
        "@odata.type": n => { teamSummary.odataType = n.getStringValue(); },
        "ownersCount": n => { teamSummary.ownersCount = n.getNumberValue(); },
    }
}
