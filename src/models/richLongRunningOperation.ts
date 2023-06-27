import {LongRunningOperation} from './longRunningOperation';
import {PublicError} from './publicError';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface RichLongRunningOperation extends LongRunningOperation, Parsable {
    /**
     * Error that caused the operation to fail.
     */
    errorEscaped?: PublicError | undefined;
    /**
     * A value between 0 and 100 that indicates the progress of the operation.
     */
    percentageComplete?: number | undefined;
    /**
     * The unique identifier for the result.
     */
    resourceId?: string | undefined;
    /**
     * The type of the operation.
     */
    type?: string | undefined;
}
