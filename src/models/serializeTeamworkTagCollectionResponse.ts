import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeTeamworkTag} from './serializeTeamworkTag';
import type {TeamworkTag} from './teamworkTag';
import type {TeamworkTagCollectionResponse} from './teamworkTagCollectionResponse';
import type {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeTeamworkTagCollectionResponse(writer: SerializationWriter, teamworkTagCollectionResponse: TeamworkTagCollectionResponse | undefined = {} as TeamworkTagCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, teamworkTagCollectionResponse)
        writer.writeCollectionOfObjectValues<TeamworkTag>("value", teamworkTagCollectionResponse.value, serializeTeamworkTag);
}
