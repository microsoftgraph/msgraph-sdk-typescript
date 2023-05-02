import {Bitlocker} from './bitlocker';
import {BitlockerRecoveryKey} from './bitlockerRecoveryKey';
import {serializeBitlockerRecoveryKey} from './serializeBitlockerRecoveryKey';
import {serializeEntity} from './serializeEntity';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeBitlocker(writer: SerializationWriter, bitlocker: Bitlocker | undefined = {} as Bitlocker) : void {
        serializeEntity(writer, bitlocker)
        writer.writeCollectionOfObjectValues<BitlockerRecoveryKey>("recoveryKeys", bitlocker.recoveryKeys, serializeBitlockerRecoveryKey);
}
