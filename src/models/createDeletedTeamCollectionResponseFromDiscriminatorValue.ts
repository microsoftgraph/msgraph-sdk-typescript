import { deserializeIntoDeletedTeamCollectionResponse } from './deserializeIntoDeletedTeamCollectionResponse';
import { type DeletedTeamCollectionResponse } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createDeletedTeamCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoDeletedTeamCollectionResponse;
}
