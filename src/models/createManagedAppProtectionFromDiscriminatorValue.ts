import {ManagedAppProtectionImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createManagedAppProtectionFromDiscriminatorValue(parseNode: ParseNode | undefined) : ManagedAppProtectionImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ManagedAppProtectionImpl();
}
