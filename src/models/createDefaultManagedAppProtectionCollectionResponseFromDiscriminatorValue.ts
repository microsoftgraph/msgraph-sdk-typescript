import { deserializeIntoDefaultManagedAppProtectionCollectionResponse } from './deserializeIntoDefaultManagedAppProtectionCollectionResponse';
import { type DefaultManagedAppProtectionCollectionResponse } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createDefaultManagedAppProtectionCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoDefaultManagedAppProtectionCollectionResponse;
}
