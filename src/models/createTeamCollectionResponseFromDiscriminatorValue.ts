import { deserializeIntoTeamCollectionResponse } from './deserializeIntoTeamCollectionResponse';
import { type TeamCollectionResponse } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createTeamCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoTeamCollectionResponse;
}
