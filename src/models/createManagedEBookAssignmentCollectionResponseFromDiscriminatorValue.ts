import { deserializeIntoManagedEBookAssignmentCollectionResponse } from './deserializeIntoManagedEBookAssignmentCollectionResponse';
import { type ManagedEBookAssignmentCollectionResponse } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createManagedEBookAssignmentCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoManagedEBookAssignmentCollectionResponse;
}
