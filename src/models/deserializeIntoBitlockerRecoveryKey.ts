import { type BitlockerRecoveryKey } from './bitlockerRecoveryKey';
import { deserializeIntoEntity } from './deserializeIntoEntity';
import { VolumeType } from './volumeType';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoBitlockerRecoveryKey(bitlockerRecoveryKey: BitlockerRecoveryKey | undefined = {} as BitlockerRecoveryKey) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(bitlockerRecoveryKey),
        "createdDateTime": n => { bitlockerRecoveryKey.createdDateTime = n.getDateValue(); },
        "deviceId": n => { bitlockerRecoveryKey.deviceId = n.getStringValue(); },
        "key": n => { bitlockerRecoveryKey.key = n.getStringValue(); },
        "volumeType": n => { bitlockerRecoveryKey.volumeType = n.getEnumValue<VolumeType>(VolumeType); },
    }
}
