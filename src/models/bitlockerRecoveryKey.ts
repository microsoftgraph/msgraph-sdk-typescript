import {Entity} from './entity';
import {VolumeType} from './volumeType';

export interface BitlockerRecoveryKey extends Entity{
    /** The date and time when the key was originally backed up to Azure Active Directory. */
    createdDateTime?:Date | undefined;
    /** ID of the device the BitLocker key is originally backed up from. */
    deviceId?:string | undefined;
    /** The BitLocker recovery key. */
    key?:string | undefined;
    /** Indicates the type of volume the BitLocker key is associated with. Possible values are: operatingSystemVolume, fixedDataVolume, removableDataVolume, unknownFutureValue. */
    volumeType?:VolumeType | undefined;
}
