import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeTeamworkTag} from './serializeTeamworkTag';
import {TeamworkTag} from './teamworkTag';
import {TeamworkTagCollectionResponse} from './teamworkTagCollectionResponse';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeTeamworkTagCollectionResponse(writer: SerializationWriter, teamworkTagCollectionResponse: TeamworkTagCollectionResponse | undefined = {} as TeamworkTagCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, teamworkTagCollectionResponse)
        writer.writeCollectionOfObjectValues<TeamworkTag>("value", teamworkTagCollectionResponse.value, serializeTeamworkTag);
}
