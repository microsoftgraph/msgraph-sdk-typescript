import {DateTimeTimeZone} from '../../../../../../../../../../../models/dateTimeTimeZone';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface SnoozeReminderPostRequestBody extends Partial<AdditionalDataHolder>, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown> | undefined;
    /** The NewReminderTime property */
    newReminderTime?: DateTimeTimeZone | undefined;
}
