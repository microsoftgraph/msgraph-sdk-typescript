import { deserializeIntoManagedAppPolicyCollectionResponse } from './deserializeIntoManagedAppPolicyCollectionResponse';
import { type ManagedAppPolicyCollectionResponse } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createManagedAppPolicyCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoManagedAppPolicyCollectionResponse;
}
