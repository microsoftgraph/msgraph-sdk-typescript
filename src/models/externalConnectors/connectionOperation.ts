import {Entity} from '../entity';
import {PublicError} from '../publicError';
import {ConnectionOperationStatus} from './connectionOperationStatus';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface ConnectionOperation extends Entity, Parsable {
    /**
     * If status is failed, provides more information about the error that caused the failure.
     */
    errorEscaped?: PublicError | undefined;
    /**
     * Indicates the status of the asynchronous operation. Possible values are: unspecified, inprogress, completed, failed, unknownFutureValue.
     */
    status?: ConnectionOperationStatus | undefined;
}
