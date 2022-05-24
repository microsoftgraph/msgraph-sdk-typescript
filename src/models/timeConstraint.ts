import {ActivityDomain} from './activityDomain';
import {TimeSlot} from './timeSlot';

export interface TimeConstraint{
    /** The nature of the activity, optional. Possible values are: work, personal, unrestricted, or unknown. */
    activityDomain?:ActivityDomain | undefined;
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?:Record<string, unknown>;
    /** The timeSlots property */
    timeSlots?:TimeSlot[] | undefined;
}
