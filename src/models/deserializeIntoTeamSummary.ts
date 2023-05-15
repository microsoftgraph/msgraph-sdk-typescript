import {TeamSummary} from './teamSummary';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoTeamSummary(teamSummary: TeamSummary | undefined = {} as TeamSummary) : Record<string, (node: ParseNode) => void> {
    return {
        "guestsCount": n => { teamSummary.guestsCount = n.getNumberValue(); },
        "membersCount": n => { teamSummary.membersCount = n.getNumberValue(); },
        "@odata.type": n => { teamSummary.odataType = n.getStringValue(); },
        "ownersCount": n => { teamSummary.ownersCount = n.getNumberValue(); },
    }
}
