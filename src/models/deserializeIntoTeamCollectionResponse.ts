import {createTeamFromDiscriminatorValue} from './createTeamFromDiscriminatorValue';
import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {serializeTeam} from './serializeTeam';
import {Team} from './team';
import {TeamCollectionResponse} from './teamCollectionResponse';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoTeamCollectionResponse(teamCollectionResponse: TeamCollectionResponse | undefined = {} as TeamCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(teamCollectionResponse),
        "value": n => { teamCollectionResponse.value = n.getCollectionOfObjectValues<Team>(createTeamFromDiscriminatorValue); },
    }
}
