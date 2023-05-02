import {deserializeIntoDefaultManagedAppProtectionCollectionResponse} from './deserializeIntoDefaultManagedAppProtectionCollectionResponse';
import {DefaultManagedAppProtectionCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createDefaultManagedAppProtectionCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoDefaultManagedAppProtectionCollectionResponse;
}
