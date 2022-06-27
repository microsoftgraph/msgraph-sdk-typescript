import {Entity} from './entity';
import {PrintOperationStatus} from './printOperationStatus';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface PrintOperation extends Partial<AdditionalDataHolder>, Entity, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** The DateTimeOffset when the operation was created. Read-only. */
    createdDateTime?: Date | undefined;
    /** The status property */
    status?: PrintOperationStatus | undefined;
}
