import {LongRunningOperation} from './longRunningOperation';
import {PublicError} from './publicError';

export interface RichLongRunningOperation extends LongRunningOperation{
    /** Error due to which the operation failed. */
    error_escaped?:PublicError | undefined;
    /** A value between 0 and 100 that indicates the progress of the operation. */
    percentageComplete?:number | undefined;
    /** A unique identifier for the result. */
    resourceId?:string | undefined;
    /** Type of the operation. */
    type?:string | undefined;
}
