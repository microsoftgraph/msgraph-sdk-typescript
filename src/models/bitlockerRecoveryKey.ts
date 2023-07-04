import {Entity} from './entity';
import {VolumeType} from './volumeType';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface BitlockerRecoveryKey extends Entity, Parsable {
    /**
     * The date and time when the key was originally backed up to Azure Active Directory. Not nullable.
     */
    createdDateTime?: Date | undefined;
    /**
     * Identifier of the device the BitLocker key is originally backed up from. Supports $filter (eq).
     */
    deviceId?: string | undefined;
    /**
     * The BitLocker recovery key. Returned only on $select. Not nullable.
     */
    key?: string | undefined;
    /**
     * Indicates the type of volume the BitLocker key is associated with. The possible values are: 1 (for operatingSystemVolume), 2 (for fixedDataVolume), 3 (for removableDataVolume), and 4 (for unknownFutureValue).
     */
    volumeType?: VolumeType | undefined;
}
