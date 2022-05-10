import {ManagedEBookAssignmentCollectionResponseImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createManagedEBookAssignmentCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : ManagedEBookAssignmentCollectionResponseImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ManagedEBookAssignmentCollectionResponseImpl();
}
