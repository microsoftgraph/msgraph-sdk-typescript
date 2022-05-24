import {BitlockerRecoveryKey} from './bitlockerRecoveryKey';
import {Entity} from './entity';

export interface Bitlocker extends Entity{
    /** The recovery keys associated with the bitlocker entity. */
    recoveryKeys?:BitlockerRecoveryKey[] | undefined;
}
