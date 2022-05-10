import {IosManagedAppProtectionImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createIosManagedAppProtectionFromDiscriminatorValue(parseNode: ParseNode | undefined) : IosManagedAppProtectionImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new IosManagedAppProtectionImpl();
}
