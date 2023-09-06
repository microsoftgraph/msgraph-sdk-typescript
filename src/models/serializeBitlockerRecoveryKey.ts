import { type BitlockerRecoveryKey } from './bitlockerRecoveryKey';
import { serializeEntity } from './serializeEntity';
import { VolumeType } from './volumeType';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeBitlockerRecoveryKey(writer: SerializationWriter, bitlockerRecoveryKey: BitlockerRecoveryKey | undefined = {} as BitlockerRecoveryKey) : void {
        serializeEntity(writer, bitlockerRecoveryKey)
        writer.writeDateValue("createdDateTime", bitlockerRecoveryKey.createdDateTime);
        writer.writeStringValue("deviceId", bitlockerRecoveryKey.deviceId);
        writer.writeStringValue("key", bitlockerRecoveryKey.key);
        writer.writeEnumValue<VolumeType>("volumeType", bitlockerRecoveryKey.volumeType);
}
