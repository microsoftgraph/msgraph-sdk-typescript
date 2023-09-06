import { deserializeIntoIosManagedAppProtectionCollectionResponse } from './deserializeIntoIosManagedAppProtectionCollectionResponse';
import { type IosManagedAppProtectionCollectionResponse } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createIosManagedAppProtectionCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoIosManagedAppProtectionCollectionResponse;
}
