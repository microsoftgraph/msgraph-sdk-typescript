import {Entity} from '../entity';
import {PublicError} from '../publicError';
import {ConnectionOperationStatus} from './connectionOperationStatus';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface ConnectionOperation extends Entity, Partial<Parsable> {
    /** If status is failed, provides more information about the error that caused the failure. */
    error_escaped?: PublicError | undefined;
    /** Indicates the status of the asynchronous operation. Possible values are: unspecified, inprogress, completed, failed. */
    status?: ConnectionOperationStatus | undefined;
}
