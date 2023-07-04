import {BitlockerRecoveryKey} from './bitlockerRecoveryKey';
import {Entity} from './entity';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface Bitlocker extends Entity, Parsable {
    /**
     * The recovery keys associated with the bitlocker entity.
     */
    recoveryKeys?: BitlockerRecoveryKey[] | undefined;
}
