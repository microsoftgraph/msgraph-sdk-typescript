import {DefaultManagedAppProtectionImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createDefaultManagedAppProtectionFromDiscriminatorValue(parseNode: ParseNode | undefined) : DefaultManagedAppProtectionImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new DefaultManagedAppProtectionImpl();
}
