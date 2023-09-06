import { deserializeIntoManagedAppRegistrationCollectionResponse } from './deserializeIntoManagedAppRegistrationCollectionResponse';
import { type ManagedAppRegistrationCollectionResponse } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createManagedAppRegistrationCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoManagedAppRegistrationCollectionResponse;
}
