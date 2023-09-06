import { deserializeIntoManagedMobileLobAppCollectionResponse } from './deserializeIntoManagedMobileLobAppCollectionResponse';
import { type ManagedMobileLobAppCollectionResponse } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createManagedMobileLobAppCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoManagedMobileLobAppCollectionResponse;
}
