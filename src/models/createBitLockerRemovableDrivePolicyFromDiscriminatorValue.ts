import { deserializeIntoBitLockerRemovableDrivePolicy } from './deserializeIntoBitLockerRemovableDrivePolicy';
import { type BitLockerRemovableDrivePolicy } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createBitLockerRemovableDrivePolicyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoBitLockerRemovableDrivePolicy;
}
