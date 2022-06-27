import {BitlockerRecoveryKey} from './bitlockerRecoveryKey';
import {Entity} from './entity';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface Bitlocker extends Partial<AdditionalDataHolder>, Entity, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** The recovery keys associated with the bitlocker entity. */
    recoveryKeys?: BitlockerRecoveryKey[] | undefined;
}
