import { createTeamworkTagMemberFromDiscriminatorValue } from './createTeamworkTagMemberFromDiscriminatorValue';
import { deserializeIntoBaseCollectionPaginationCountResponse } from './deserializeIntoBaseCollectionPaginationCountResponse';
import { serializeTeamworkTagMember } from './serializeTeamworkTagMember';
import { type TeamworkTagMember } from './teamworkTagMember';
import { type TeamworkTagMemberCollectionResponse } from './teamworkTagMemberCollectionResponse';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoTeamworkTagMemberCollectionResponse(teamworkTagMemberCollectionResponse: TeamworkTagMemberCollectionResponse | undefined = {} as TeamworkTagMemberCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(teamworkTagMemberCollectionResponse),
        "value": n => { teamworkTagMemberCollectionResponse.value = n.getCollectionOfObjectValues<TeamworkTagMember>(createTeamworkTagMemberFromDiscriminatorValue); },
    }
}
