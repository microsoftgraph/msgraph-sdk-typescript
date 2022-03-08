import {ManagedAppProtection} from './managedAppProtection';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createManagedAppProtectionFromDiscriminatorValue(parseNode: ParseNode | undefined) : ManagedAppProtection {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ManagedAppProtection();
}
