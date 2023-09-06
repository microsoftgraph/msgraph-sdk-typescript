import { deserializeIntoIosManagedAppProtection } from './deserializeIntoIosManagedAppProtection';
import { type IosManagedAppProtection } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createIosManagedAppProtectionFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoIosManagedAppProtection;
}
