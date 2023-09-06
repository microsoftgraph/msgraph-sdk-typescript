import { deserializeIntoAndroidManagedAppProtection } from './deserializeIntoAndroidManagedAppProtection';
import { type AndroidManagedAppProtection } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createAndroidManagedAppProtectionFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoAndroidManagedAppProtection;
}
