import {Entity} from '../entity';
import {PublicError} from '../publicError';
import {ConnectionOperationStatus} from './connectionOperationStatus';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface ConnectionOperation extends Partial<AdditionalDataHolder>, Entity, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** If status is failed, provides more information about the error that caused the failure. */
    error_escaped?: PublicError | undefined;
    /** Indicates the status of the asynchronous operation. Possible values are: unspecified, inprogress, completed, failed. */
    status?: ConnectionOperationStatus | undefined;
}
