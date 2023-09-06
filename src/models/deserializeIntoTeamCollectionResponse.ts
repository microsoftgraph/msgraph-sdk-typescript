import { createTeamFromDiscriminatorValue } from './createTeamFromDiscriminatorValue';
import { deserializeIntoBaseCollectionPaginationCountResponse } from './deserializeIntoBaseCollectionPaginationCountResponse';
import { serializeTeam } from './serializeTeam';
import { type Team } from './team';
import { type TeamCollectionResponse } from './teamCollectionResponse';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoTeamCollectionResponse(teamCollectionResponse: TeamCollectionResponse | undefined = {} as TeamCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(teamCollectionResponse),
        "value": n => { teamCollectionResponse.value = n.getCollectionOfObjectValues<Team>(createTeamFromDiscriminatorValue); },
    }
}
