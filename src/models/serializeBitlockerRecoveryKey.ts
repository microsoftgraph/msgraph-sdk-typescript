import {BitlockerRecoveryKey} from './bitlockerRecoveryKey';
import {serializeEntity} from './serializeEntity';
import {VolumeType} from './volumeType';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeBitlockerRecoveryKey(bitlockerRecoveryKey: BitlockerRecoveryKey | undefined = {} as BitlockerRecoveryKey, writer: SerializationWriter) : void {
        serializeEntity(writer, bitlockerRecoveryKey)
        writer.writeDateValue("createdDateTime", bitlockerRecoveryKey.createdDateTime);
        writer.writeStringValue("deviceId", bitlockerRecoveryKey.deviceId);
        writer.writeStringValue("key", bitlockerRecoveryKey.key);
        writer.writeEnumValue<VolumeType>("volumeType", bitlockerRecoveryKey.volumeType);
}
