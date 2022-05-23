import {BitlockerRecoveryKeyImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createBitlockerRecoveryKeyFromDiscriminatorValue(parseNode: ParseNode | undefined) : BitlockerRecoveryKeyImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new BitlockerRecoveryKeyImpl();
}
