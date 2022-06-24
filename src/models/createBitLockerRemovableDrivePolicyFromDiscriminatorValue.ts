import {BitLockerRemovableDrivePolicyImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createBitLockerRemovableDrivePolicyFromDiscriminatorValue(parseNode: ParseNode | undefined) : BitLockerRemovableDrivePolicyImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new BitLockerRemovableDrivePolicyImpl();
}
