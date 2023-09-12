import { serializeBaseCollectionPaginationCountResponse } from './serializeBaseCollectionPaginationCountResponse';
import { serializeTeam } from './serializeTeam';
import { type Team } from './team';
import { type TeamCollectionResponse } from './teamCollectionResponse';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeTeamCollectionResponse(writer: SerializationWriter, teamCollectionResponse: TeamCollectionResponse | undefined = {} as TeamCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, teamCollectionResponse)
        writer.writeCollectionOfObjectValues<Team>("value", teamCollectionResponse.value, serializeTeam);
}
