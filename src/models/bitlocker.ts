import { type BitlockerRecoveryKey } from './bitlockerRecoveryKey';
import { type Entity } from './entity';
import { type Parsable } from '@microsoft/kiota-abstractions';

export interface Bitlocker extends Entity, Parsable {
    /**
     * The recovery keys associated with the bitlocker entity.
     */
    recoveryKeys?: BitlockerRecoveryKey[] | undefined;
}
