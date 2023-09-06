import { deserializeIntoTeamsAppCollectionResponse } from './deserializeIntoTeamsAppCollectionResponse';
import { type TeamsAppCollectionResponse } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createTeamsAppCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoTeamsAppCollectionResponse;
}
