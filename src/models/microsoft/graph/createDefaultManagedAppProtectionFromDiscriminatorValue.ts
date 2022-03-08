import {DefaultManagedAppProtection} from './defaultManagedAppProtection';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createDefaultManagedAppProtectionFromDiscriminatorValue(parseNode: ParseNode | undefined) : DefaultManagedAppProtection {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new DefaultManagedAppProtection();
}
