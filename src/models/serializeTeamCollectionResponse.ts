import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeTeam} from './serializeTeam';
import {Team} from './team';
import {TeamCollectionResponse} from './teamCollectionResponse';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeTeamCollectionResponse(writer: SerializationWriter, teamCollectionResponse: TeamCollectionResponse | undefined = {} as TeamCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, teamCollectionResponse)
        writer.writeCollectionOfObjectValues<Team>("value", teamCollectionResponse.value, serializeTeam);
}
