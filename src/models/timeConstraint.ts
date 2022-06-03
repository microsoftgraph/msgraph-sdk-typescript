import {ActivityDomain} from './activityDomain';
import {TimeSlot} from './timeSlot';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface TimeConstraint extends Partial<AdditionalDataHolder>, Partial<Parsable> {
    /** The nature of the activity, optional. Possible values are: work, personal, unrestricted, or unknown. */
    activityDomain?: ActivityDomain | undefined;
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** The timeSlots property */
    timeSlots?: TimeSlot[] | undefined;
}
