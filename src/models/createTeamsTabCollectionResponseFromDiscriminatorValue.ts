import { deserializeIntoTeamsTabCollectionResponse } from './deserializeIntoTeamsTabCollectionResponse';
import { type TeamsTabCollectionResponse } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createTeamsTabCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoTeamsTabCollectionResponse;
}
