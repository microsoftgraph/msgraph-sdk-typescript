import {Bitlocker} from './bitlocker';
import {BitlockerRecoveryKey} from './bitlockerRecoveryKey';
import {createBitlockerRecoveryKeyFromDiscriminatorValue} from './createBitlockerRecoveryKeyFromDiscriminatorValue';
import {deserializeIntoEntity} from './deserializeIntoEntity';
import {serializeBitlockerRecoveryKey} from './serializeBitlockerRecoveryKey';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoBitlocker(bitlocker: Bitlocker | undefined = {} as Bitlocker) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(bitlocker),
        "recoveryKeys": n => { bitlocker.recoveryKeys = n.getCollectionOfObjectValues<BitlockerRecoveryKey>(createBitlockerRecoveryKeyFromDiscriminatorValue); },
    }
}
