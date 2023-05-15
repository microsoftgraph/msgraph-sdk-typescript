import {deserializeIntoManagedEBookAssignmentCollectionResponse} from './deserializeIntoManagedEBookAssignmentCollectionResponse';
import {ManagedEBookAssignmentCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createManagedEBookAssignmentCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoManagedEBookAssignmentCollectionResponse;
}
