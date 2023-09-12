import { deserializeIntoManagedAppStatusCollectionResponse } from './deserializeIntoManagedAppStatusCollectionResponse';
import { type ManagedAppStatusCollectionResponse } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createManagedAppStatusCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoManagedAppStatusCollectionResponse;
}
