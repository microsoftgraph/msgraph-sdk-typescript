import { deserializeIntoAndroidManagedAppProtectionCollectionResponse } from './deserializeIntoAndroidManagedAppProtectionCollectionResponse';
import { type AndroidManagedAppProtectionCollectionResponse } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createAndroidManagedAppProtectionCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoAndroidManagedAppProtectionCollectionResponse;
}
