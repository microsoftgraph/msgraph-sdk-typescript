import {EventMessage} from './eventMessage';
import {ResponseType} from './responseType';
import {TimeSlot} from './timeSlot';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface EventMessageResponse extends Partial<AdditionalDataHolder>, EventMessage, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** The proposedNewTime property */
    proposedNewTime?: TimeSlot | undefined;
    /** The responseType property */
    responseType?: ResponseType | undefined;
}
