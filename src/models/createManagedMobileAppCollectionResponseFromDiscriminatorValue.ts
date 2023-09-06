import { deserializeIntoManagedMobileAppCollectionResponse } from './deserializeIntoManagedMobileAppCollectionResponse';
import { type ManagedMobileAppCollectionResponse } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createManagedMobileAppCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoManagedMobileAppCollectionResponse;
}
