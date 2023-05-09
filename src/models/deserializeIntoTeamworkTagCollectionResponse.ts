import {createTeamworkTagFromDiscriminatorValue} from './createTeamworkTagFromDiscriminatorValue';
import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {serializeTeamworkTag} from './serializeTeamworkTag';
import {TeamworkTag} from './teamworkTag';
import {TeamworkTagCollectionResponse} from './teamworkTagCollectionResponse';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoTeamworkTagCollectionResponse(teamworkTagCollectionResponse: TeamworkTagCollectionResponse | undefined = {} as TeamworkTagCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(teamworkTagCollectionResponse),
        "value": n => { teamworkTagCollectionResponse.value = n.getCollectionOfObjectValues<TeamworkTag>(createTeamworkTagFromDiscriminatorValue); },
    }
}
