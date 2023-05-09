import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeTeamworkTagMember} from './serializeTeamworkTagMember';
import {TeamworkTagMember} from './teamworkTagMember';
import {TeamworkTagMemberCollectionResponse} from './teamworkTagMemberCollectionResponse';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeTeamworkTagMemberCollectionResponse(writer: SerializationWriter, teamworkTagMemberCollectionResponse: TeamworkTagMemberCollectionResponse | undefined = {} as TeamworkTagMemberCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, teamworkTagMemberCollectionResponse)
        writer.writeCollectionOfObjectValues<TeamworkTagMember>("value", teamworkTagMemberCollectionResponse.value, serializeTeamworkTagMember);
}
