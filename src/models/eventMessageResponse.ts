import {EventMessage} from './eventMessage';
import {ResponseType} from './responseType';
import {TimeSlot} from './timeSlot';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface EventMessageResponse extends EventMessage, Parsable {
    /**
     * The proposedNewTime property
     */
    proposedNewTime?: TimeSlot | undefined;
    /**
     * The responseType property
     */
    responseType?: ResponseType | undefined;
}
