import {TargetedManagedAppProtectionImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createTargetedManagedAppProtectionFromDiscriminatorValue(parseNode: ParseNode | undefined) : TargetedManagedAppProtectionImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new TargetedManagedAppProtectionImpl();
}
