import {deserializeIntoIosManagedAppProtection} from './deserializeIntoIosManagedAppProtection';
import {IosManagedAppProtection} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createIosManagedAppProtectionFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoIosManagedAppProtection;
}
