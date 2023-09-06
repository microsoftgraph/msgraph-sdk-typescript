import { type Bitlocker } from './bitlocker';
import { type BitlockerRecoveryKey } from './bitlockerRecoveryKey';
import { serializeBitlockerRecoveryKey } from './serializeBitlockerRecoveryKey';
import { serializeEntity } from './serializeEntity';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeBitlocker(writer: SerializationWriter, bitlocker: Bitlocker | undefined = {} as Bitlocker) : void {
        serializeEntity(writer, bitlocker)
        writer.writeCollectionOfObjectValues<BitlockerRecoveryKey>("recoveryKeys", bitlocker.recoveryKeys, serializeBitlockerRecoveryKey);
}
