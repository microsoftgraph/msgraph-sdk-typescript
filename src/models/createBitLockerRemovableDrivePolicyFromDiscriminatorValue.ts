import {deserializeIntoBitLockerRemovableDrivePolicy} from './deserializeIntoBitLockerRemovableDrivePolicy';
import {BitLockerRemovableDrivePolicy} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createBitLockerRemovableDrivePolicyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoBitLockerRemovableDrivePolicy;
}
