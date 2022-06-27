import {Entity} from './entity';
import {LongRunningOperationStatus} from './longRunningOperationStatus';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface LongRunningOperation extends Partial<AdditionalDataHolder>, Entity, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** The createdDateTime property */
    createdDateTime?: Date | undefined;
    /** The lastActionDateTime property */
    lastActionDateTime?: Date | undefined;
    /** The resourceLocation property */
    resourceLocation?: string | undefined;
    /** The status property */
    status?: LongRunningOperationStatus | undefined;
    /** The statusDetail property */
    statusDetail?: string | undefined;
}
