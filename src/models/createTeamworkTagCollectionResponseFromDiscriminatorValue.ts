import { deserializeIntoTeamworkTagCollectionResponse } from './deserializeIntoTeamworkTagCollectionResponse';
import { type TeamworkTagCollectionResponse } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createTeamworkTagCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoTeamworkTagCollectionResponse;
}
