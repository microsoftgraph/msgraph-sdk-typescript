import { deserializeIntoManagedEBookCollectionResponse } from './deserializeIntoManagedEBookCollectionResponse';
import { type ManagedEBookCollectionResponse } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createManagedEBookCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoManagedEBookCollectionResponse;
}
