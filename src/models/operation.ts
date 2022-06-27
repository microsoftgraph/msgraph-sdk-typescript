import {Entity} from './entity';
import {OperationStatus} from './operationStatus';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface Operation extends Partial<AdditionalDataHolder>, Entity, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** The start time of the operation. */
    createdDateTime?: Date | undefined;
    /** The time of the last action of the operation. */
    lastActionDateTime?: Date | undefined;
    /** Possible values are: notStarted, running, completed, failed. Read-only. */
    status?: OperationStatus | undefined;
}
