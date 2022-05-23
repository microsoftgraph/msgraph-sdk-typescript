import {AndroidManagedAppProtectionImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAndroidManagedAppProtectionFromDiscriminatorValue(parseNode: ParseNode | undefined) : AndroidManagedAppProtectionImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new AndroidManagedAppProtectionImpl();
}
