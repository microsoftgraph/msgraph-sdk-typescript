import {LongRunningOperation} from './longRunningOperation';
import {PublicError} from './publicError';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface RichLongRunningOperation extends LongRunningOperation, Partial<Parsable> {
    /** Error due to which the operation failed. */
    error_escaped?: PublicError | undefined;
    /** A value between 0 and 100 that indicates the progress of the operation. */
    percentageComplete?: number | undefined;
    /** A unique identifier for the result. */
    resourceId?: string | undefined;
    /** Type of the operation. */
    type?: string | undefined;
}
