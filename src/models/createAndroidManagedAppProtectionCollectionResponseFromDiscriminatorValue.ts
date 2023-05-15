import {deserializeIntoAndroidManagedAppProtectionCollectionResponse} from './deserializeIntoAndroidManagedAppProtectionCollectionResponse';
import {AndroidManagedAppProtectionCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAndroidManagedAppProtectionCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoAndroidManagedAppProtectionCollectionResponse;
}
