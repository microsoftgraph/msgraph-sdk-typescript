import { serializeBaseCollectionPaginationCountResponse } from './serializeBaseCollectionPaginationCountResponse';
import { serializeTeamworkTagMember } from './serializeTeamworkTagMember';
import { type TeamworkTagMember } from './teamworkTagMember';
import { type TeamworkTagMemberCollectionResponse } from './teamworkTagMemberCollectionResponse';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeTeamworkTagMemberCollectionResponse(writer: SerializationWriter, teamworkTagMemberCollectionResponse: TeamworkTagMemberCollectionResponse | undefined = {} as TeamworkTagMemberCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, teamworkTagMemberCollectionResponse)
        writer.writeCollectionOfObjectValues<TeamworkTagMember>("value", teamworkTagMemberCollectionResponse.value, serializeTeamworkTagMember);
}
