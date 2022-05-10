import {AndroidManagedAppProtectionCollectionResponseImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAndroidManagedAppProtectionCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : AndroidManagedAppProtectionCollectionResponseImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new AndroidManagedAppProtectionCollectionResponseImpl();
}
