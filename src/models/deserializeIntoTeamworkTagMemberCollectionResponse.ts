import {createTeamworkTagMemberFromDiscriminatorValue} from './createTeamworkTagMemberFromDiscriminatorValue';
import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {serializeTeamworkTagMember} from './serializeTeamworkTagMember';
import {TeamworkTagMember} from './teamworkTagMember';
import {TeamworkTagMemberCollectionResponse} from './teamworkTagMemberCollectionResponse';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoTeamworkTagMemberCollectionResponse(teamworkTagMemberCollectionResponse: TeamworkTagMemberCollectionResponse | undefined = {} as TeamworkTagMemberCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(teamworkTagMemberCollectionResponse),
        "value": n => { teamworkTagMemberCollectionResponse.value = n.getCollectionOfObjectValues<TeamworkTagMember>(createTeamworkTagMemberFromDiscriminatorValue); },
    }
}
