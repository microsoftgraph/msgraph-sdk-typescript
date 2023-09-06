import { deserializeIntoBitlockerRecoveryKey } from './deserializeIntoBitlockerRecoveryKey';
import { type BitlockerRecoveryKey } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createBitlockerRecoveryKeyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoBitlockerRecoveryKey;
}
