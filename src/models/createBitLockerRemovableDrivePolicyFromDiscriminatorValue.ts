import {BitLockerRemovableDrivePolicy} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createBitLockerRemovableDrivePolicyFromDiscriminatorValue(parseNode: ParseNode | undefined) : BitLockerRemovableDrivePolicy {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new BitLockerRemovableDrivePolicy();
}
