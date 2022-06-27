import {Entity} from './entity';
import {OperationStatus} from './operationStatus';
import {ResultInfo} from './resultInfo';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface CommsOperation extends Partial<AdditionalDataHolder>, Entity, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** Unique Client Context string. Max limit is 256 chars. */
    clientContext?: string | undefined;
    /** The result information. Read-only. */
    resultInfo?: ResultInfo | undefined;
    /** Possible values are: notStarted, running, completed, failed. Read-only. */
    status?: OperationStatus | undefined;
}
