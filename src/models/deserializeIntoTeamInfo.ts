import { createTeamFromDiscriminatorValue } from './createTeamFromDiscriminatorValue';
import { deserializeIntoEntity } from './deserializeIntoEntity';
import { serializeTeam } from './serializeTeam';
import { type Team } from './team';
import { type TeamInfo } from './teamInfo';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoTeamInfo(teamInfo: TeamInfo | undefined = {} as TeamInfo) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(teamInfo),
        "displayName": n => { teamInfo.displayName = n.getStringValue(); },
        "team": n => { teamInfo.team = n.getObjectValue<Team>(createTeamFromDiscriminatorValue); },
        "tenantId": n => { teamInfo.tenantId = n.getStringValue(); },
    }
}
